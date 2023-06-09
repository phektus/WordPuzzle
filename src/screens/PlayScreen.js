import { useState } from 'react';
import { View } from 'react-native';
import { Button, Text, Overlay } from '@rneui/themed';
import DefaultStyle from '../styles/DefaultStyle';

import { useDispatch } from 'react-redux';
import { incrementByAmount } from '../redux/features/score/scoreSlice';

import Game from '../Game';
import { shuffle } from '../CustomUtils';
import ScoreText from '../components/ScoreText';

export default ({ route, navigation }) => {
	const { category, items } = route.params; 
	const levels = Object.keys(items);

    const dispatch = useDispatch();

    const shuffleLetters = (str) => shuffle(
        str.split('').filter((c) => c !== ' '));

    const [state, setState] = useState({
        score: 0,
        step: 0,
        guess: Array(),
        pressed: Array(),
        letters: null,
    });          

    const getDifficulty = () => levels[state.step];
    const getItem = () => items[getDifficulty()];
    const getWord = () => getItem().word;

    const getLetters = () => {
        let letters = state.letters;
        if(letters == null) {
            letters = shuffleLetters(getWord());
            let _state =  Object.assign({}, state);
            _state.letters = letters;
            setState(_state);
        }
        return letters;
    };

    const handlePress = (e, char, key) => {
        let _state =  Object.assign({}, state);        
        _state.guess.push(char);
        if(getWord()[_state.guess.length] === ' ') _state.guess.push(' ');
        _state.pressed.push(key);
        setState(_state);
    }

    const reset = (should_step=false, include_letters=false) => {
        let _state =  Object.assign({}, state);
        _state.guess = Array();
        _state.pressed = Array();       
        if(should_step) _state.step++;
        if(include_letters) _state.letters = null;
        setState(_state);
    }

    const advance = () => {
        if(state.step < levels.length-1) {
            reset(true, true);          
        } else {
            navigation.navigate('Summary');                
        }   
    }

    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMsg, setAlertMsg] = useState('Sorry, wrong answer');

    const handleSubmit = (e) => {
        const is_correct = state.guess.join('') === getWord();
        const points = Game.getPoints(getDifficulty());
        let msg = 'Sorry, wrong answer';
        if(is_correct === true) {
            msg = 'CORRECT! You earn '+ points +' points';
            dispatch(incrementByAmount(points));
        }
        setAlertMsg(msg);      
        setAlertVisible(true);
    }

    const handleAlertPress = () => {
        setAlertVisible(false);
        advance();
    }

    return (
        <View style={DefaultStyle.containerWithHeader}>
            <View style={DefaultStyle.middle}>     
                <View style={DefaultStyle.rowEdged}>
                    <ScoreText />
                    <Text>{state.step+1} / {levels.length}</Text>
                    <Text>{category}</Text>
                </View>
                <View style={DefaultStyle.row}>
                    { getWord().split('').map((char, key) => (                          
                        <Text 
                            h3 key={key} 
                            style={char !== ' ' && {
                                borderWidth: 1,
                                borderColor: "lightgrey",
                            }}
                        >
                            {(key < state.guess.length && char !== ' ') 
                                ? state.guess[key] 
                                : '   '
                            }
                        </Text>       
                    ))}
                </View>
            </View>

            <Text style={{ textAlign:'center' }}>{getItem().hint}</Text>
            
            <View style={DefaultStyle.rowButtons}>
                { getLetters().map((char, key) => (
                    <Button 
                        style={DefaultStyle.rowButtonItem}
                        color='error'
                        size='lg'
                        radius='lg'
                        key={key} 
                        title={char} 
                        onPress={(e) => handlePress(e, char, key)} 
                        disabled={state.pressed.indexOf(key) !== -1}
                    />
                ))}
            </View>            

            <View style={DefaultStyle.row}>
                { state.guess.length > 0 && 
                    <Button 
                        color='secondary' 
                        size='lg' 
                        radius='lg'
                        title='Reset' 
                        onPress={() => reset()}
                    />
                }
                { state.guess.length === (getWord().length) && 
                    <Button 
                        color="success" 
                        size='lg' 
                        radius='lg'
                        title='Submit' 
                        onPress={handleSubmit}
                    />
                }        
                { state.guess.length < (getWord().length) &&
                    <Button 
                        color="warning" 
                        size='lg' 
                        radius='lg'
                        title="Skip"
                        onPress={(e) => advance()} 
                    />
                }    
            </View>

            <Overlay 
                isVisible={alertVisible} 
            >
                <Text h4>{ alertMsg }</Text>
                <Button 
                    color='success'
                    size='lg' 
                    radius='lg'
                    onPress={handleAlertPress} 
                    title='Dismiss' 
                    style={{
                        margin: 15,
                    }}
                />
            </Overlay>
        </View>
    );
};