import { useState } from 'react';
import { Button, View, Text } from 'react-native';
import CategoryPicker from '../components/CategoryPicker';

export default ({ route, navigation }) => {    
    const { game } = route.params;
    const categories = game.getCategories();
    
    const [category, setCategory] = useState('random');
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Select a Category:</Text>
            <CategoryPicker 
                categories={categories} 
                setCategory={setCategory}
            />

            <Button
                title="Play"
                onPress={() => navigation.navigate({
                    name: 'Play',
                    params: {
                        category: category
                    }
                })}
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