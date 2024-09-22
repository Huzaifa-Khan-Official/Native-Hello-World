import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ContactList = () => {
    const contacts = [
        {
            uid: 0,
            name: 'Huzaifa Khan',
            status: 'I ❤️ to learn new teach updates!',
            imageUrl: 'https://avatars.githubusercontent.com/u/122217933?v=4',
        },
        {
            uid: 1,
            name: 'Hitesh Choudhary',
            status: 'Just an extra ordinary teacher',
            imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
        },
        {
            uid: 2,
            name: 'Anurag Tiwari',
            status: 'I ❤️ To Code and Teach!',
            imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
        },
        {
            uid: 3,
            name: 'Sanket Singh',
            status: 'Making your GPay smooth',
            imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
        },
        {
            uid: 4,
            name: 'Anirudh Jwala',
            status: 'Building secure Digital banks',
            imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
        },
    ];
    return (
        <View>
            <Text style={styles.headingText}>ContactList</Text>
            <ScrollView
                style={styles.container}
                scrollEnabled={false}
            >
                {
                    contacts.map((contact) => {
                        return (
                            <View key={contact.uid}
                                style={styles.contactCard}
                            >
                                <Image
                                    source={{
                                        uri: contact.imageUrl
                                    }}
                                    style={styles.contactCardImage}
                                />
                                <View>
                                    <Text style={styles.userName}>
                                        {contact.name}
                                    </Text>
                                    <Text style={styles.userStatus}
                                    >
                                        {contact.status}
                                    </Text>
                                </View>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default ContactList

const styles = StyleSheet.create({
    headingText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    container: {
        paddingHorizontal: 10,
        marginBottom: 4,
        marginTop: 10
    },
    contactCard: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 6,
        backgroundColor: "#c6dcff",
        borderLeftWidth: 6,
        borderLeftColor: "#5367ea",
        borderRadius: 10,
        paddingLeft: 8,
        paddingVertical: 10
    },
    contactCardImage: {
        height: 60,
        width: 60,
        borderRadius: 50,
        marginRight: 10,
    },
    userName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    userStatus: {
        fontSize: 14,
        color: '#777'
    }
})