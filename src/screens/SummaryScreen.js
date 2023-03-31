import { Text, Button } from 'react-native';

import { useSelector } from 'react-redux';
import { selectScore } from '../redux/features/score/scoreSlice';

export default () => {
    const score = useSelector(selectScore);    

    return (
        <>
            <Text>Congratulations! You earned { score } points</Text>
            <Text>{' '}</Text>
            <Text>Share</Text>
            <Text>{' '}</Text>
            <Button
                title="Back to Home"
                onPress={() => {                    
                    navigation.navigate('Home');                    
                }}
            />
        </>
    );
}