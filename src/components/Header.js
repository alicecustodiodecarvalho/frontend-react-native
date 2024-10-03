import { View, Text, StyleSheet } from 'react-native'
import { Image } from 'expo-image';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Header() {
    return (
        <View style={styles.header}>
            <View style={styles.user}>
                <Image
                    style={styles.avatar}
                    source={require('../../assets/avatar-alice.jpg')}
                    // source="https://cursinhoparamedicina.com.br/wp-content/uploads/2022/10/Paisagem-1.jpg"
                />
                <Text style={styles.name}>Alice Custódio</Text>
            </View>
            <Ionicons style={styles.menu} name="menu" size={24} color="black" />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'brown',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        paddingTop: 30
    },
    user:{
        flexDirection:'row',
        alignItems: 'center',
        gap: 10
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    name: {
        fontWeight: '600',
        fontSize: 18
    },
    menu: {
        padding: 10
    }
})