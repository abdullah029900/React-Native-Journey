import React from 'react'
import { View, Text, StyleSheet, useColorScheme } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


function AppPro(): React.JSX.Element {
    const isDarkMode = useColorScheme() === 'dark'
    return (
        <SafeAreaView  style={styles.container}>
            <View  style={styles.container}>
                <Text style={isDarkMode ? styles.whiteText : styles.darkText}>Hello World</Text>
            </View>


        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',

    },
    whiteText: {
        color: '#cb0c0cff'
    },
    darkText: {
        color: '#0a895eff'
    }
})

export default AppPro