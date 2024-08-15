import { View, Text, StyleSheet } from 'react-native'

export default function Footer() {
    return (
        <View style={styles.footer}>
            <Text style={styles.copy}>Copyright &copy; 2024 Alice Custódio</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footer:{
      padding: 25,
      justifyContent: 'center',
      alignItems: 'center'
    },
    copy: {
        color: "#BBBBBB"
    }
  }) 