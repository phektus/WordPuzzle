import { Button, Text, View } from 'react-native';

export default ({ route, navigation }) => {
    const { userId } = route.params;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>User ID: {JSON.stringify(userId)}</Text>
        <Button title="Back to Home" onPress={() => navigation.navigate('Home')} />
      </View>
    );
};