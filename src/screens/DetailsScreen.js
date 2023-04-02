import { View } from 'react-native';
import { Button, Text } from '@rneui/themed';
import DefaultStyle from '../styles/DefaultStyle';

export default ({ route, navigation }) => {
    const { userId } = route.params;
    return (
        <View style={DefaultStyle.containerWithHeader}>
            <Text>Details Screen</Text>
            <Text>User ID: {JSON.stringify(userId)}</Text>
            <Button title="Back to Home" onPress={() => navigation.navigate('Home')} />
        </View>
    );
};