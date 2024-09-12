import { View, Text, StyleSheet, Pressable } from "react-native";
import { Image } from 'expo-image';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function NewCardAccount({ id, service, userName, imgUrl, accounts, setAccounts }) {

    const handleDelete = async () => {
        const response = await fetch(`http://localhost:3000/account/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            const newAccounts = accounts.filter((item) => item.id !== id);
            setAccounts(newAccounts);
            return;
        }
        console.log('Erro ao deletar conta');
        return;
    }

    return (
        <View style={styles.card}>
            <Image
                style={styles.logo}
                source={imgUrl}
            />

            <View style={styles.content}>
                <View style={styles.textContainer}>
                    <Text style={styles.service}>{service}</Text>
                    <Text style={styles.username}>{userName}</Text>
                </View>
                <Pressable onPress={handleDelete} style={styles.dele}>
                    <FontAwesome name="trash-o" size={24} color="black" />
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 10,
        borderStyle: 'solid',
        borderColor: '#EEEEEE',
        borderWidth: 1,
        flexDirection: 'row',
        gap: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 10 // Adicione um pouco de espaço entre os cards
    },
    logo: {
        width: 60,
        height: 60
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textContainer: {
        flex: 1,
        gap: 8
    },
    service: {
        fontSize: 17
    },
    username: {
        color: '#777777'
    },
    dele: {
        marginLeft: 10
    }
});
