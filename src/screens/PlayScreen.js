import { Button, Text, View } from 'react-native';
import ScoreText from '../components/ScoreText';
import LevelText from '../components/LevelText';
import StepButton from '../components/StepButton';

export default ({ route, navigation }) => {
  const { category, items, step } = route.params; 
  const levels = Object.keys(items);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ScoreText />
      <Text>Category: {category}</Text>
      <LevelText step={step+1} maxSteps={levels.length} />
      <Text>Hint: {items[levels[step]]['hint']}</Text>
      <StepButton 
        navigation={navigation}
        step={step}
        maxSteps={levels.length-1}
        category={category}
        items={items}
      />
    </View>
  );
};