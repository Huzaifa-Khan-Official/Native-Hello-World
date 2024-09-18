import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
    return (
        <View>
            <Text style={styles.headingText}>ElevatedCards</Text>
            <View style={{ flex: 1, paddingVertical: 6 }}>
                <ScrollView horizontal>
                    <View style={styles.cardContainer}>
                        <View style={[styles.card, styles.cardElevated]}>
                            <Text>Tap</Text>
                        </View>
                        <View style={[styles.card, styles.cardElevated]}>
                            <Text>Tap</Text>
                        </View>
                        <View style={[styles.card, styles.cardElevated]}>
                            <Text>Tap</Text>
                        </View>
                        <View style={[styles.card, styles.cardElevated]}>
                            <Text>Tap</Text>
                        </View>
                        <View style={[styles.card, styles.cardElevated]}>
                            <Text>Tap</Text>
                        </View>
                        <View style={[styles.card, styles.cardElevated]}>
                            <Text>More...</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default ElevatedCards

const styles = StyleSheet.create({
    headingText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    cardContainer: {
        display: "flex",
        flexDirection: "row",
        gap: 6,
        paddingHorizontal: 6,
    },
    card: {
        width: 100,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    cardElevated: {
        backgroundColor: "#CAD5E2",
        elevation: 5,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: "#EF5354"
    },
})