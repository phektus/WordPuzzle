import { useState } from 'react';
import { Text, Button, TextInput} from 'react-native';

export default ({ word, jumbled }) => {
    const [state, setState] = useState({
        guess: Array(),
        pressed: Array()
    });

    const handlePress = (e, char, key) => {
        let _state =  Object.assign({}, state);
        _state.guess.push(char);
        _state.pressed.push(key);
        setState(_state);
    }

    const handleReset = (e) => {
        let _state =  Object.assign({}, state);
        _state.guess = Array();
        _state.pressed = Array();
        setState(_state);
    }

    return (
        <>
            { word.split('').map((char, key) => (  
                <Text>{key < state.guess.length ? state.guess[key] : ''}</Text>       
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
        </>
    );
}
