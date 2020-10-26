import React, { useState } from 'react';
import { View, Text, Image, FlatList } from 'react-native';

import ProfileList from '../../components/ProfileList';

import styles from './styles';

export default function Profile() {
    const [profile, setProfile] = useState([
        {
            id: 1,
            name: 'Davi Roberto Vicente de Almeida',
            photo: require('../../../assets/profile/davi.jpg'),
        },
        {
            id: 2,
            name: 'Gustavo Damiani Melo de Souza Duarte',
            photo: require('../../../assets/profile/gustavo.jpg'),
        }
    ])
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Perfil</Text>
                </View>

                <FlatList
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item.id}
                    data={profile}
                    renderItem={({ item }) => <ProfileList data={item} />}
                />
            </View>
        </View>
    );
}
