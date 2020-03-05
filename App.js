import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Character from './Components/Character'
import IconsOnTop from './Containers/IconsOnTop'
import IconsOnBottom from './Containers/IconsOnBottom'
import birthTimer from './timers/birthTimer' 
import hungryTimer from './timers/hungryTimer'

export default function App() {
    return (
        <View style={styles.container}>
            <IconsOnTop />
            <Character />
            <IconsOnBottom />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 25,
        height: '100%',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        color: 'black'
    },
});


