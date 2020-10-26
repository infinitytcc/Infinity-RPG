import React, { useState } from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

import List from '../../components/List';

import styles from './styles';

export default function Movies() {
    const [movies, setMovies] = useState([
        {
            id: '1',
            title: 'O Senhor dos Anéis: A Sociedade do Anel',
            year: '2001',
            photo: require('../../../assets/movies/senhor_dos_aneis.jpg'),
        },
        {
            id: '2',
            title: 'Vingadores: Ultimato',
            year: '2019',
            photo: require('../../../assets/movies/vingadores.jpg'),
        },
        {
            id: '3',
            title: 'Velozes e Furiosos 8',
            year: '2017',
            photo: require('../../../assets/movies/velozes_furiosos.jpg'),
        },
    ])
    
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Filmes</Text>
                </View>

                <FlatList
                    showsVerticalScrollIndicator={true}
                    keyExtractor={item => item.id}
                    data={movies}
                    renderItem={({ item }) => <List data={item} />}
                />
            </View>
        </View>
    )
}
