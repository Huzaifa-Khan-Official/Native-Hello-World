import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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
                    <View style={styles.headingContainer}>
                        <Text style={styles.headerText}>
                            What's new in JavaScript 21 - ES12
                        </Text>
                    </View>
                    <Image
                        source={{
                            uri: "https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        }}
                        style={styles.cardImage}
                    />
                    <View style={styles.bodyConatiner}>
                        <Text numberOfLines={3}>
                            Just like every year, Javascript brings in new features. This year
                            javascript is bringing 4 new features, which are almost in
                            production rollout. I won't be wasting much more time and directly
                            jump to code with easy to understand examples.
                        </Text>
                    </View>
                    <View style={styles.footerConatiner}>
                        <TouchableOpacity
                            onPress={() => openWebsite("https://blog.learncodeonline.in/whats-new-in-javascript-21-es12")}
                        >
                            <Text style={styles.socialLink}>
                                Read More
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => openWebsite("https://www.linkedin.com/in/huzaifa-khan-officia/")}
                        >
                            <Text style={styles.socialLink}>
                                Follow Me
                            </Text>
                        </TouchableOpacity>
                    </View>
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
        margin: 5,
        backgroundColor: '#f1f1f1',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 2,
    },
    elevatedCard: {
        backgroundColor: "#CAD5E2",
        elevation: 5,
        shadowOffset: {
            width: 1,
            height: 1
        },
    },
    headingContainer: {
        height: 40,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardImage: {
        height: 190,
    },
    bodyConatiner: {
        padding: 10
    },
    footerConatiner: {
        padding: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    socialLink: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "white",
        padding: 10,
        backgroundColor: "#3c95f5",
        borderRadius: 5,
        textDecorationLine: "underline",
    },
})