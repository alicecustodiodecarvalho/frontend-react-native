import {View, Text, StyleSheet} from 'react-native'
import CardAccount from './CardAccount.js'

export default function Content() {
    return (
        <View style={styles.content}>
            <CardAccount />
            <CardAccount />
            <CardAccount />
            <CardAccount />
            <CardAccount />
            <CardAccount />
            <CardAccount />
            <CardAccount />
            <CardAccount />
            <CardAccount />
            <CardAccount />
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        gap: 10,
        padding: 15
    }
}) 