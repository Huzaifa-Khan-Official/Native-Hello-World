import React from "react";

import { SafeAreaView, Text, View, StyleSheet, useColorScheme } from "react-native";

function AppPro(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark'

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={isDarkMode ? styles.whiteText : styles.darkText}>Paragraph 1:</Text>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    whiteText: {
        color: "white"
    },
    darkText: {
        color: "black"
    }
});

export default AppPro;