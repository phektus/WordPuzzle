import { useState } from 'react';
import { Text, Button } from 'react-native';

export default ({ word, jumbled }) => {
    const [state, setState] = useState({
        guess: Array()
    });

    const handlePress = (e, char) => {
        let _guess = state.guess;
        _guess.push(char);
        setState({ guess: _guess });
    }

    const handleReset = (e) => {
        setState({
            guess: Array()
        });
    }

    return (
        <>
            { state.guess.map((char, key) => (
                <Button key={key} title={char} />
            ))}

            <Text>{'----'}</Text>

            { jumbled.map((char, key) => (
                <Button 
                    key={key} 
                    title={char} 
                    onPress={(e) => handlePress(e, char)} 
                    // disabled={state.letters[char] !== '_'}
                />
            ))}

            { state.guess.length > 0 && 
                <Button title='Reset' onPress={handleReset}/>
            }
        </>
    );
}
