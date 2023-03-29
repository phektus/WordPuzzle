import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import LeaderboardsScreen from '../screens/LeaderboardsScreen';
import PlayScreen from '../screens/PlayScreen';

export default () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="Home"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: 'lightblue',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            >
                <Stack.Screen 
                    name="Play" 
                    component={PlayScreen}
                    options={{ title: 'Play' }}
                />
                <Stack.Screen 
                    name="Leaderboards" 
                    component={LeaderboardsScreen}
                    options={{ title: 'Leaderboards' }}
                />
                <Stack.Screen 
                    name="Details" 
                    component={DetailsScreen}
                    initialParams={{ userId: 420 }}
                    options={{ title: 'My Details' }}
                />
                <Stack.Screen 
                    name="Home" 
                    component={HomeScreen} 
                    options={{ title: 'Words Puzzle' }}
                />       
            </Stack.Navigator>
        </NavigationContainer>
    );
}
    