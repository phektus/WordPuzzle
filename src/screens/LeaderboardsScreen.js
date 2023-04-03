
import { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { ListItem, Avatar, Text } from '@rneui/themed';

export default () => {
    const [leaderboards, setLeaderboards] = useState([]);

    useFocusEffect(
        useCallback(() => {
            const fetchLeaderboards = async () => {
                try {
                    const response = await fetch(
                      'https://raw.githubusercontent.com/phektus/WordPuzzle/main/data/leaderboards.json',
                    );
                    const json = await response.json();
                    setLeaderboards(json.leaderboards);
                } catch (error) {
                    const leaderboardsData = require('../../data/leaderboards.json');
                    setLeaderboards(leaderboardsData.leaderboards);
                }
            }
            fetchLeaderboards().catch(console.error);
        }, [])
    );

    return (
        <ScrollView>
            { leaderboards.map((item, key) => (
                <ListItem bottomDivider key={key}>
                    <Avatar
                        rounded
                        icon={{
                            name: 'person-outline',
                            type: 'material',
                            size: 26,
                        }}
                        containerStyle={{ backgroundColor: item.color }}
                    />
                    <ListItem.Content>
                        <ListItem.Title>{item.name}</ListItem.Title>
                        <Text style={{ marginLeft:'auto', marginTop:0 }}>{item.score} points</Text>
                    </ListItem.Content>
                </ListItem>
            ))}            
        </ScrollView>
    );
};