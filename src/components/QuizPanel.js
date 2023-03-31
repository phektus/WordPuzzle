import { useState } from 'react';
import { Text, Button } from 'react-native';

export default ({ 
    word, 
    jumbled,
}) => {    
    const [state, setState] = useState({
        guess: Array(),
        pressed: Array()
    });

    const reset = () => {
        let _state =  Object.assign({}, state);
        _state.guess = Array();
        _state.pressed = Array();
        setState(_state);
    }

    const handlePress = (e, char, key) => {
        let _state =  Object.assign({}, state);
        _state.guess.push(char);
        _state.pressed.push(key);
        setState(_state);
    }

    const handleReset = (e) => {
       reset();
    }

    const handleSubmit = (e) => {

    }

    return (
        <>
            { word.split('').map((char, key) => (  
                <Text key={key}>{key < state.guess.length ? state.guess[key] : ''}</Text>       
            ))}

            <Text>{'----'}</Text>

            { jumbled.map((char, key) => (
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

            <Text>{state.guess.length} / {word.length}</Text>

            { state.guess.length === word.length-1 && 
                <Button title='Submit' onPress={handleSubmit}/>
            }
        </>
    );
}
