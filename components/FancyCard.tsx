import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCard = () => {
    return (
        <View>
            <Text style={styles.headingText}>Trending Places</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image source={{
                    uri: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ"
                }}
                    style={styles.cardImage}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>
                        Hawa Mahal
                    </Text>
                    <Text style={styles.cardLabel}>
                        Pink City, Jaipur
                    </Text>
                    <Text style={styles.cardDescription}>
                        The Hawa Mahal is a palace in the city of Jaipur, India. Built from
                        red and pink sandstone, it is on the edge of the City Palace.
                    </Text>
                    <Text style={styles.cardFooter}>

                    </Text>
                </View>
            </View>
        </View>
    )
}

export default FancyCard

const styles = StyleSheet.create({
    headingText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    card: {},
    cardElevated: {},
    cardImage: {
        height: 100
    },
    cardBody: {},
    cardTitle: {},
    cardLabel: {},
    cardDescription: {},
    cardFooter: {},
})