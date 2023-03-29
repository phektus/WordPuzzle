import { Button, Text, View } from 'react-native';
import ScoreText from '../components/ScoreText';

export default ({ route, navigation }) => {
    const { category, items } = route.params;
    console.log('Question items:', items);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ScoreText />
        <Text>Category: {category}</Text>
        <Button title="Back to Home" onPress={() => navigation.navigate('Home')} />
      </View>
    );
};