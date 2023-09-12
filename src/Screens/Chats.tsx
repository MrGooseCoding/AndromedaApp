import { View } from "react-native"
import Text from "../Components/Text"
import styles from "../styles"

interface Props {
    navigation: any,
    route: any,
}

function ChatsScreen ({navigation, route}: Props) {
    return <View style={styles.Screen}>
        <Text>Welcome to Chats Screen</Text>
    </View>
}

export default ChatsScreen