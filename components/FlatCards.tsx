import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatCards = () => {
    return (
        <View>
            <Text style={styles.headingText}>FlatCards</Text>
            <View style={styles.cardContainer}>
                <View style={[styles.card, styles.cardOne]}>
                    <Text>Red</Text>
                </View>
                <View style={[styles.card, styles.cardTwo]}>
                    <Text>Green</Text>
                </View>
                <View style={[styles.card, styles.cardThree]}>
                    <Text>Blue</Text>
                </View>
                <View style={[styles.card, styles.cardThree]}>
                    <Text>Blue</Text>
                </View>
                <View style={[styles.card, styles.cardTwo]}>
                    <Text>Green</Text>
                </View>
                <View style={[styles.card, styles.cardOne]}>
                    <Text>Red</Text>
                </View>
            </View>
        </View>
    )
}

export default FlatCards

const styles = StyleSheet.create({
    headingText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    cardContainer: {
        display: "flex",
        flexDirection: "row",
        gap: 6,
        marginVertical: 10,
        paddingHorizontal: 6,
        flexWrap: "wrap"
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 4,
    },
    cardOne: {
        backgroundColor: '#EF5354',
    },
    cardTwo: {
        backgroundColor: "#40DBB4"
    },
    cardThree: {
        backgroundColor: "#5DA3FA"
    }
})