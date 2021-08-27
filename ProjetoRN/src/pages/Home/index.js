import React from 'react';
import { View, Text, Image, Button } from 'react-native';

import styles from './styles';

export default function Home({ navigation }) {
    return (
        
        <View style={styles.container}>

        <Button style={styles.b}color="green" title="Ir para Sobre"onPress={() => navigation.navigate('Movies') } />

            <View style={styles.box}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Projeto de TCC</Text>
                </View>

                <View style={styles.main}>
                    <Text style={styles.mainText}>Seja bem-vindo. Nosso TCC se trata de um jogo <Text style={styles.bold}> RPG</Text> auditivos</Text>
                </View>
                    <Image
                        style={styles.photo}
                        source={require('../../../assets/icon.png')}
                    />
            </View>
        </View>
    );
}
