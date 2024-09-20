import { Linking, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ActionCard = () => {
    const openWebsite = (websiteLink: string) => {
        Linking.openURL(websiteLink);
    }
    return (
        <View>
            <Text style={styles.headingText}>ActionCard</Text>
            <View>
                <View style={[styles.card, styles.elevatedCard]}>

                </View>
            </View>
        </View>
    )
}

export default ActionCard

const styles = StyleSheet.create({
    headingText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    card: {
        padding: 10,
        margin: 10,
        backgroundColor: '#f1f1f1',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 2,
    },
    elevatedCard: {},
    // cardTitle: {
    //     fontSize: 18,
    //     fontWeight: 'bold',
    // },
    // cardDescription: {
    //     marginTop: 5,
    //     fontSize: 16,
    // },
    // cardButton: {
    //     marginTop: 10,
    //     backgroundColor: '#007bff',
    //     padding: 10,
    //     borderRadius: 5,
    //     color: '#fff',
    //     fontSize: 16,
    //     fontWeight: 'bold',
    // },
})