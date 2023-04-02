import { useState } from 'react';
import { View } from 'react-native';
import { Text, Button } from '@rneui/themed';
import DefaultStyle from '../styles/DefaultStyle';

import { useSelector } from 'react-redux';
import { selectScore } from '../redux/features/score/scoreSlice';

export default () => {
    const [buttonEnabled, setButtonEnabled] = useState(true);
    const score = useSelector(selectScore);    

    return (
        <View style={DefaultStyle.container}>
            <View style={DefaultStyle.centered}>
                <Text style={{ textAlign:'center' }}>
                    { score > 0 && 'Congratulations! ' }You earned { score } points
                </Text>
                <Text>{' '}</Text>
                <Text style={{ textAlign:'center' }}>Share</Text>
                <Text>{' '}</Text>
                <Button
                    color='error'
                    title="Back to Home"
                    onPress={() => {                    
                        setButtonEnabled(false);
                        navigation.navigate('Home');                    
                    }}
                    disabled={!buttonEnabled}
                />
            </View>
        </View>
    );
}