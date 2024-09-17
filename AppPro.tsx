import React from "react";
import { SafeAreaView, StyleSheet, Text, useColorScheme, View } from "react-native";

function AppPro() {
    const isDarkMode = useColorScheme() === "dark";

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={isDarkMode ? styles.whiteText : styles.darkText}>Heading 1</Text>
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus corrupti recusandae laboriosam quisquam inventore. Alias nostrum aut odit autem, id, minus maxime recusandae incidunt quis reiciendis inventore ut! Exercitationem, dolorum!
                </Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    whiteText: {
        textAlign: 'center',
        color: "white",
        fontSize: 40,
        fontWeight: "bold",
        marginBottom: 20,
    },
    darkText: {
        textAlign: 'center',
        color: "black",
        fontSize: 40,
        fontWeight: "bold",
        marginBottom: 20,
    }
});

export default AppPro;