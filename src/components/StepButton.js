import { Button } from 'react-native';

export default ({ 
    navigation, 
    step, 
    maxSteps, 
    category, 
    items
}) => (
    <>
        <Button title={step < maxSteps ? 'Next' : 'Finish'} onPress={() => {
            if(step < maxSteps) {
                navigation.navigate({
                    name: 'Play',
                    params: {
                        category: category,
                        items: items,
                        step: step+1
                    },
                });                
            } else {
                navigation.navigate('Home');                
            }    
        }} 
        />
    </>    
)