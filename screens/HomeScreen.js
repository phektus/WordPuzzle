import { Button, View } from 'react-native';

export default ({ navigation }) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
            title="Play"
            onPress={() => navigation.navigate('Play')}
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