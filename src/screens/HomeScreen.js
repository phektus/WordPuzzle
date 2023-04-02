import { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View } from 'react-native';
import { CheckBox, Button, Text } from '@rneui/themed';
import DefaultStyle from '../styles/DefaultStyle';
import { useDispatch } from 'react-redux';
import { resetScore } from '../redux/features/score/scoreSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Game from '../Game';

export default ({ navigation }) => {        
    const [category, setCategory] = useState('cities');
    const [total_score, setTotalScore] = useState(0);
    const dispatch = useDispatch(); 
    
    useFocusEffect(
        useCallback(() => {
            const fetchTotalScore = async () => {
                const score_from_storage = await AsyncStorage.getItem('@total_score');
                setTotalScore(score_from_storage);
            }
            fetchTotalScore().catch(console.error);
        }, [])
    );

    const handlePlay = () => {
        dispatch(resetScore());
        const items = Game.generateItems(category);
        navigation.navigate({
            name: 'Play',
            params: {
                category: category,
                items: items,
            },
        });
    }

    return (
        <View style={DefaultStyle.containerWithHeader}>
            <View style={DefaultStyle.middle}>
                <CheckBox
                    checked={category=='cities'}
                    onPress={() => setCategory('cities')}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    size={32}
                    title="Cities"
                />
                <CheckBox
                    checked={category=='animals'}
                    onPress={() => setCategory('animals')}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    size={32}
                    title="Animals"
                />
                <CheckBox
                    checked={category=='foods'}
                    onPress={() => setCategory('foods')}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    size={32}
                    title="Foods"
                />
            </View>
            <View style={DefaultStyle.middle}>
                <Button
                    color="success"
                    size="lg"
                    title="Start"
                    onPress={handlePlay}
                />
                <Text style={{ textAlign:'center' }}>Your total points: {total_score}</Text>
            </View>
            
            
            <View style={DefaultStyle.row}>
                <Button
                    color="secondary"
                    title="Leaderboards"
                    onPress={() => navigation.navigate('Leaderboards')}
                />
                <Button
                    color="warning"
                    title="My Details"
                    onPress={() => navigation.navigate('Details')}
                />
            </View>
            
        </View>
    );
}