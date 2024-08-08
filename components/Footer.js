import { View, Text, StyleSheet } from 'react-native'

export default function Footer() {
    return (
        <View style={styles.footer}>
            <Text>Footer</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footer:{
      flex: 2, 
      backgroundColor: 'purple',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }) 