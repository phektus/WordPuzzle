import { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Share } from 'react-native';
import { Text, Button } from '@rneui/themed';
import DefaultStyle from '../styles/DefaultStyle';
import { useSelector } from 'react-redux';
import { selectScore } from '../redux/features/score/scoreSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default ({ navigation }) => {
    const [buttonEnabled, setButtonEnabled] = useState(true);
    const score = useSelector(selectScore);   

    useFocusEffect(
        useCallback(() => {
            const updateTotalScore = async () => {
                try {
                    const storage_score = await AsyncStorage.getItem('@total_score');
                    await AsyncStorage.setItem(
                        '@total_score', 
                        storage_score === null 
                            ? score.toString() 
                            : (parseInt(storage_score) + score).toString()
                    );
                } catch(e) {
                    console.error('Problem fetching total score: ', e);
                }
            }
            updateTotalScore().catch(console.error);
        }, [])
    );
    
    const handleShare = async () => {
        await Share.share({
            message:
                'Word Puzzle | I scored ' + score + ' points!'
            });
    };

    const handleFinish = async () => {                    
        setButtonEnabled(false);       
        navigation.navigate('Home');                    
    };

    return (
        <View style={DefaultStyle.absoluteCentered}>
            <Text h4 style={{ textAlign:'center' }}>
                { score > 0 && 'Congratulations! ' }You earned { score } points
            </Text>
            <View style={DefaultStyle.rowButtons}>
                <Button
                    style={DefaultStyle.rowButtonItem}
                    size={'lg'}
                    title="Share"
                    onPress={handleShare}
                    disabled={score == 0}
                />
                <Text style={{ width: 20 }}>{' '}</Text>
                <Button
                    style={DefaultStyle.rowButtonItem}
                    color='success'
                    size={'lg'}
                    title="Finish"
                    onPress={handleFinish}
                    disabled={!buttonEnabled}
                /> 
            </View>             
        </View>
    );
}