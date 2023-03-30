import { Button, Text, View } from 'react-native';
import ScoreText from '../components/ScoreText';

export default ({ route, navigation }) => {
  const { category, items, step } = route.params; 
  const levels = Object.keys(items);
  const maxStep = levels.length-1;
  const handlePress = () => {
    if(step === maxStep) {
      navigation.navigate('Home');
    } else {
      navigation.navigate({
        name: 'Play',
        params: {
            category: category,
            items: items,
            step: step+1
        },
    });
    }    
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ScoreText />
      <Text>Category: {category}</Text>
      <Text>{step+1} / {levels.length}</Text>
      <Text>Hint: {items[levels[step]]['hint']}</Text>
      <Button title={step === maxStep ? 'Finish' : 'Next'} onPress={handlePress} />
    </View>
  );
};