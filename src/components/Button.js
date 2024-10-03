import { Text, StyleSheet, Pressable } from "react-native";

export default function Button({ onPress, children }) {
    return (
        <Pressable
            style={styles.button}
            onPress={onPress}
        >
            <Text style={styles.textCad}>{children}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: ({ pressed }) => [{
        backgroundColor: pressed ? 'red' : 'brown',
        alignItems: 'center',
        marginVertical: 10,
        borderRadius: 10,
        paddingVertical: 5,
    }]
}) 