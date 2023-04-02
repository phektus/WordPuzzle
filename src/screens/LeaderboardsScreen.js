
import { useState } from 'react';
import { View } from 'react-native';
import { ListItem, Avatar, Text } from '@rneui/themed';

const leaderboardsData = require('../../data/leaderboards.json');

export default () => {
    const leaderboards = leaderboardsData.leaderboards;

    return (
        <View>
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
        </View>
    );
};