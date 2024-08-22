import { View, Text, StyleSheet } from 'react-native'
import CardAccount from './CardAccount.js'

export default function Content() {

    const accounts = [
        {
            id:1,
            service: "Gmail",
            imgUrl: "https://static.vecteezy.com/system/resources/previews/022/484/516/original/google-mail-gmail-icon-logo-symbol-free-png.png",
            userName: "alicecustodio1908@gmail.com"
        },
        {
            id:2,
            service: "Instagram",
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/640px-Instagram_logo_2022.svg.png",
            userName: "alicee_custodio"
        },
        {
            id:3,
            service: "Github",
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/640px-GitHub_Invertocat_Logo.svg.png",
            userName: "alicecustodiodecarvalho"
        }
    ]

    return (
        <View style={styles.content}>
            {
                accounts.map((account) =>
                    <CardAccount
                        key={account.id}
                        service={account.service}
                        imgUrl={account.imgUrl}
                        userName={account.userName}
                    />
                )
            }

        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        gap: 10,
        padding: 15
    }
}) 