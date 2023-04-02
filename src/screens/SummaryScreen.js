import { useState } from 'react';
import { View, Share } from 'react-native';
import { Text, Button } from '@rneui/themed';
import DefaultStyle from '../styles/DefaultStyle';
import { useSelector } from 'react-redux';
import { selectScore } from '../redux/features/score/scoreSlice';

export default ({ navigation }) => {
    const [buttonEnabled, setButtonEnabled] = useState(true);
    const score = useSelector(selectScore);   
    
    const handleShare = async () => {
        await Share.share({
            message:
                'Word Puzzle | I scored ' + score + ' points!'
            });
    };

    const handleFinish = () => {                    
        setButtonEnabled(false);
        navigation.navigate('Home');                    
    };

    return (
        <View style={DefaultStyle.container}>
            <View style={DefaultStyle.centered}>
                <Text h3 style={{ textAlign:'center' }}>
                    { score > 0 && 'Congratulations! ' }You earned { score } points
                </Text>
                <View style={DefaultStyle.rowButtons}>                    
                    <Button
                        style={DefaultStyle.rowButtonItem}
                        title="Share"
                        onPress={handleShare}
                        disabled={score == 0}
                    />
                    <Button
                        style={DefaultStyle.rowButtonItem}
                        color='success'
                        title="Finish"
                        onPress={handleFinish}
                        disabled={!buttonEnabled}
                    />                
                </View>
                
            </View>
        </View>
    );
}