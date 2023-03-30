import { useState } from 'react';
import { Text, Button } from 'react-native';

export default ({ word, jumbled }) => {
    const [state, setState] = useState({
        letters:  Object.fromEntries(word.split('')
            .map(c => [c, c === ' ' ? ' ' : '_']))
    });

    const handlePress = (e, char) => {
        if(state.letters[char] !== undefined) {
            const _letters = state.letters;
            _letters[char] = char;
            setState({ letters: _letters });
        }
    }

    return (
        <>
            { word.split('').map((char, key) => (
                <Text key={key}>{state.letters[char]}</Text>
            ))}

            { jumbled.map((char, key) => (
                <Button 
                    key={key} 
                    title={char} 
                    onPress={(e) => handlePress(e, char)} 
                    disabled={state.letters[char] !== '_'}
                />
            ))}
        </>
    );
}
