import { Button, Text } from 'react-native';

export default ({ navigation }) => {
    return (
      <>
        <Text>Leaderboards</Text>
        <Button title="Back to Home" onPress={() => navigation.navigate('Home')} />
      </>
    );
};