import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';

import styles from './styles';

const List = ({ data }) => {
    const [item, setItem] = useState(data);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{item.name}</Text>
            <Image
                style={styles.photo}
                source={item.photo}
                resizeMode='contain'
            />
        </View>
    );
}

export default List;
