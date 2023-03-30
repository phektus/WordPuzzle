import { Text } from 'react-native';
import { shuffle } from '../CustomUtils';
import ScoreText from '../components/ScoreText';
import LevelText from '../components/LevelText';
import StepButton from '../components/StepButton';
import QuizPanel from '../components/QuizPanel';

export default ({ route, navigation }) => {
  const { category, items, step } = route.params; 
  const levels = Object.keys(items);
  const item = items[levels[step]];
  const word = item.word;
  const hint = item.hint;

  return (
    <>
      <ScoreText />
      <Text>Category: {category}</Text>
      <LevelText step={step+1} maxSteps={levels.length} />
      
      <QuizPanel 
        word={word} 
        jumbled={shuffle(word.split('').filter((c) => c !== ' '))}
      />
    
      <Text>Hint: {hint}</Text>

      <StepButton 
        navigation={navigation}
        step={step}
        maxSteps={levels.length-1}
        category={category}
        items={items}
      />
    </>
  );
};