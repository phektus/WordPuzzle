import { Button, Text, View } from 'react-native';

export default ({ route, navigation }) => {
    const { category } = route.params;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Category: {category}</Text>
        <Button title="Back to Home" onPress={() => navigation.navigate('Home')} />
      </View>
    );
};