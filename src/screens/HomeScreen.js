import { useState } from 'react';
import { View } from 'react-native';
import { CheckBox, Button } from '@rneui/themed';
import DefaultStyle from '../styles/DefaultStyle';

import { useDispatch } from 'react-redux';
import { resetScore } from '../redux/features/score/scoreSlice';

import Game from '../Game';

export default ({ navigation }) => {        
    const [category, setCategory] = useState('cities');
    const dispatch = useDispatch();    

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
                    color="error"
                    size="lg"
                    title="Start"
                    onPress={handlePlay}
                />
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