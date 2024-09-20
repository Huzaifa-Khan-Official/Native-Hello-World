import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCard = () => {
    return (
        <View>
            <Text style={styles.headingText}>Trending Places</Text>
            <View style={styles.cardDiv}>
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
                            12 mins away
                        </Text>
                    </View>
                </View>
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
                            12 mins away
                        </Text>
                    </View>
                </View>
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
                            12 mins away
                        </Text>
                    </View>
                </View>
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
                            12 mins away
                        </Text>
                    </View>
                </View>
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
                            12 mins away
                        </Text>
                    </View>
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
        paddingVertical: 8,
    },
    cardDiv: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
        padding: 2,
        gap: 4
    },
    card: {
        maxWidth: 340,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 10,
    },
    cardElevated: {
        backgroundColor: "lightgrey",
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        }
    },
    cardImage: {
        height: 180,
        marginBottom: 8,
        borderRadius: 6
    },
    cardBody: {
        flex: 1,
        gap: 5,
        flexGrow: 1,
        paddingHorizontal: 12
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    cardLabel: {
        fontSize: 16,
    },
    cardDescription: {
        fontSize: 14,
        flexShrink: 1,
        color: "#2F363F"
    },
    cardFooter: {
        fontSize: 14,
        color: "grey"
    },
})