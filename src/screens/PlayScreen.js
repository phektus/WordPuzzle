import { useState } from 'react';
import { Button, Text } from 'react-native';
import { shuffle } from '../CustomUtils';
import ScoreText from '../components/ScoreText';
import LevelText from '../components/LevelText';

export default ({ route, navigation }) => {
	const { category, items } = route.params; 
	const levels = Object.keys(items);

    const shuffleLetters = (str) => {
        return shuffle(str.split('').filter((c) => c !== ' '));
    }

    const [state, setState] = useState({
        step: 0,
        guess: Array(),
        pressed: Array(),
    });

    const getItem = () => {
        return items[levels[state.step]];
    };

    const getWord = () => {
        return getItem().word;
    };

    const getHint = () => {
        return getItem().hint;
    };

    const getLetters = () => {
        return shuffleLetters(getWord());
    };

    const handlePress = (e, char, key) => {
        let _state =  Object.assign({}, state);
        _state.guess.push(char);
        _state.pressed.push(key);
        setState(_state);
    }

    const reset = (should_step=false) => {
        let _state =  Object.assign({}, state);
        _state.guess = Array();
        _state.pressed = Array();       
        if(should_step) {
            _state.step++;
        }
        setState(_state);
    }

    const handleReset = (e) => {
        reset();
    }

    const handleSubmit = (e) => {

    }

    return (
        <>
            <ScoreText />
            <Text>Category: {category}</Text>
            <LevelText step={state.step+1} maxSteps={levels.length} />
            
            { getWord().split('').map((char, key) => (  
                <Text key={key}>{key < state.guess.length ? state.guess[key] : ''}</Text>       
            ))}

            <Text>{'----'}</Text>

            { getLetters().map((char, key) => (
                state.pressed.indexOf(key) === -1 &&
                <Button 
                    key={key} 
                    title={char} 
                    onPress={(e) => handlePress(e, char, key)} 
                />
            ))}

            <Text>{'----'}</Text>

            { state.guess.length > 0 && 
                <Button title='Reset' onPress={handleReset}/>
            }

            <Text>{state.guess.length} / {getWord().length}</Text>

            { state.guess.length === getWord().length-1 && 
                <Button title='Submit' onPress={handleSubmit}/>
            }

            <Text>Hint: {getHint()}</Text>

            <Button title={state.step < levels.length-1 ? 'Skip' : 'Finish'} onPress={() => {
                if(state.step < levels.length-1) {
                    reset(true);          
                } else {
                    navigation.navigate('Home');                
                }    
            }} 
            />
        </>
    );
};