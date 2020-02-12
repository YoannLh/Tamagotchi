import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Character from './Components/Character';
import IconOnLeft from './Containers/IconOnLeft'
import IconOnRight from './Containers/IconOnRight'

export default function App() {
    return (
        <View style={styles.container}>
            <IconOnLeft />
            <Character />
            <IconOnRight />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        height: '100%',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        color: 'black'
    },
});
