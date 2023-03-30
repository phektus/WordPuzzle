import { Button, Text } from 'react-native';

export default ({ route, navigation }) => {
    const { userId } = route.params;
    return (
      <>
        <Text>Details Screen</Text>
        <Text>User ID: {JSON.stringify(userId)}</Text>
        <Button title="Back to Home" onPress={() => navigation.navigate('Home')} />
      </>
    );
};