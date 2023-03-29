import { useState } from 'react';
import { Button, View, Text } from 'react-native';
import CategoryPicker from '../components/CategoryPicker';
import Game from '../Game';

export default ({ navigation }) => {        
    const [category, setCategory] = useState('random');
    const handlePlay = () => {
        navigation.navigate({
            name: 'Play',
            params: {
                category: category === 'random' 
                    ? Game.randomizeCategory()
                    : category,
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