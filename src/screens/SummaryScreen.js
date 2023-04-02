import { View } from 'react-native';
import { Text, Button } from '@rneui/themed';
import DefaultStyle from '../styles/DefaultStyle';

import { useSelector } from 'react-redux';
import { selectScore } from '../redux/features/score/scoreSlice';

export default () => {
    const score = useSelector(selectScore);    

    return (
        <View style={DefaultStyle.container}>
            <View style={DefaultStyle.centered}>
                <Text style={{ textAlign:'center' }}>
                    Congratulations! You earned { score } points
                </Text>
                <Text>{' '}</Text>
                <Text style={{ textAlign:'center' }}>Share</Text>
                <Text>{' '}</Text>
                <Button
                    color='error'
                    title="Back to Home"
                    onPress={() => {                    
                        navigation.navigate('Home');                    
                    }}
                />
            </View>
        </View>
    );
}