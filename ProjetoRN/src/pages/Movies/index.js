import React, { useState } from 'react';
import { Text, View, TouchableOpacity, FlatList, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

import List from '../../components/List';

import styles from './styles';

export default function Movies({navigation})
{
return (
<View style={styles.container}>

<Button style={styles.b}color="green" title="Ir para Home"onPress={() => navigation.navigate('Home') } />

    <View style={styles.box}>
        <View style={styles.header}>
            <Text style={styles.headerText}>Sobre o Projeto</Text>
        </View>

        <View style={styles.main}>
            <Text style={styles.mainText}></Text>
        </View>
            <Image
                style={styles.photo}
                source={require('../../../assets/icon.png')}
            />
    </View>
</View>
);
}
