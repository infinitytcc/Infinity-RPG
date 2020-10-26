import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Bem-vindo</Text>
                </View>

                <View style={styles.main}>
                    <Text style={styles.mainText}>Seja bem-vindo ao GDApp, comece arrastando para o lado</Text>
                </View>
                    <Image
                        style={styles.photo}
                        source={require('../../../assets/icon.png')}
                    />
            </View>
        </View>
    );
}
