import { useState } from 'react';
import { View } from 'react-native';
import { Button, Text } from '@rneui/themed';
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
        console.log(getWord(), key, _state.guess);
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

    const handleSubmit = (e) => {
        const is_correct = state.guess.join('') === getWord();
        const points = Game.getPoints(getDifficulty());
        let msg = 'Sorry, wrong answer';
        if(is_correct === true) {
            msg = 'CORRECT! You earn '+ points +' points';
            dispatch(incrementByAmount(points));
        }
        alert(msg);        
        advance();
    }

    return (
        <View style={DefaultStyle.containerWithHeader}>
            <View style={DefaultStyle.middle}>     
                <View style={DefaultStyle.rowEdged}>
                    <ScoreText />
                    <Text>{state.step} / {levels.length}</Text>
                    <Text>{category}</Text>
                </View>
                <View style={DefaultStyle.row}>
                    { getWord().split('').map((char, key) => (                          
                        <Text 
                            h3 key={key} 
                            style={char !== ' ' && {textDecorationLine: 'underline'}}
                        >
                            {(key < state.guess.length && char !== ' ') 
                                ? state.guess[key] 
                                : '   '
                            }
                        </Text>       
                    ))}
                </View>
            </View>
            
            <View style={DefaultStyle.row}>
                { getLetters().map((char, key) => (
                    state.pressed.indexOf(key) === -1 &&
                    <Button 
                        color='error'
                        size='lg'
                        // type='outline'
                        key={key} 
                        title={char} 
                        onPress={(e) => handlePress(e, char, key)} 
                    />
                ))}
            </View>

            <Text style={{ textAlign:'center' }}>{getItem().hint}</Text>

            <View style={DefaultStyle.row}>
                { state.guess.length > 0 && 
                    <Button 
                        color='secondary' 
                        size='lg' 
                        title='Reset' 
                        onPress={() => reset()}
                    />
                }
                { state.guess.length === (getWord().length) && 
                    <Button 
                        color="success" 
                        size='lg' 
                        title='Submit' 
                        onPress={handleSubmit}
                    />
                }        
                { state.guess.length < (getWord().length) &&
                    <Button 
                        color="warning" 
                        size='lg' 
                        title="Skip"
                         onPress={(e) => advance()} 
                    />
                }    
            </View>
        </View>
    );
};