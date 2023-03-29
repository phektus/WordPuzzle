import { Text } from 'react-native';
import { useSelector } from 'react-redux';
import { selectScore } from '../redux/features/score/scoreSlice';

export default () => {
    const count = useSelector(selectScore);
    return (
        <>
            <Text>Score: {count}</Text>
        </>        
    );
};