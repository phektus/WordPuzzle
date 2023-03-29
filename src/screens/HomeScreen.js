import { useState } from 'react';
import { Button, View, Text } from 'react-native';
import CategoryPicker from '../components/CategoryPicker';
import Game from '../Game';

export default ({ navigation }) => {        
    const [category, setCategory] = useState('random');
    const handlePlay = () => {
        const _category = category === 'random' 
            ? Game.randomizeCategory()
            : category;
        const items = Game.generateItems(_category);
        navigation.navigate({
            name: 'Play',
            params: {
                category: _category,
                items: items
            }
        });
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Select a Category:</Text>
            <CategoryPicker 
                categories={Game.categories} 
                setCategory={setCategory}
            />

            <Button
                title="Play"
                onPress={handlePlay}
            />
            <Button
                title="Leaderboards"
                onPress={() => navigation.navigate('Leaderboards')}
            />
            <Button
                title="My Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}