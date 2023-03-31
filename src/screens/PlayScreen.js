import { useState } from 'react';
import { Button, Text } from '@rneui/themed';

import { useDispatch } from 'react-redux';
import { incrementByAmount } from '../redux/features/score/scoreSlice';

import Game from '../Game';
import { shuffle } from '../CustomUtils';
import ScoreText from '../components/ScoreText';
import LevelText from '../components/LevelText';

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
    const getWordWithoutSpaces = () => getWord().replaceAll(' ','');
    const getHint = () => getItem().hint;

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

    const handleSubmit = (e) => {
        const is_correct = state.guess.join('') === getWordWithoutSpaces();
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
        <>
            <ScoreText />
            <Text>Category: {category}</Text>
            <LevelText step={state.step+1} maxSteps={levels.length} />
            
            { getWord().split('').map((char, key) => (  
                <Text key={key}>{key < state.guess.length ? state.guess[key] : ''}</Text>       
            ))}

            { getLetters().map((char, key) => (
                state.pressed.indexOf(key) === -1 &&
                <Button 
                    type='outline'
                    key={key} 
                    title={char} 
                    onPress={(e) => handlePress(e, char, key)} 
                />
            ))}

            <Text>Hint: {getHint()}</Text>

            { state.guess.length > 0 && 
                <Button title='Reset' onPress={() => reset()}/>
            }

            { state.guess.length === (getWordWithoutSpaces().length) && 
                <Button title='Submit' onPress={handleSubmit}/>
            }
        
            { state.guess.length < (getWordWithoutSpaces().length) &&
                <Button title="Skip" onPress={(e) => advance()} />
            }                
        </>
    );
};