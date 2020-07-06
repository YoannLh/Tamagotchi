import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Character from './Components/Character'
import IconsOnTop from './Containers/IconsOnTop'
import IconsOnBottom from './Containers/IconsOnBottom'
import BirthTimer from './timers/BirthTimer' 
import HungryTimer from './timers/HungryTimer'

import { Provider } from 'react-redux'
import Store from './Store/configureStore'

export default function App() {
    return (
        <Provider store={Store}>
            <View style={styles.container}>
                <BirthTimer />
                <HungryTimer />
                <IconsOnTop />
                <Character />
                <IconsOnBottom />
            </View>
        </Provider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 25,
        height: '100%',
        justifyContent: 'space-between',
        backgroundColor: '#fff'
    },
});





