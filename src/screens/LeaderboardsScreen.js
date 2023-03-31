import { Button, Text } from '@rneui/themed';

export default ({ navigation }) => {
    return (
      <>
        <Text>Leaderboards</Text>
        <Button title="Back to Home" onPress={() => navigation.navigate('Home')} />
      </>
    );
};