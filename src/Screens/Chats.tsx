import { ScrollView, TextInput, View } from "react-native"
import Text from "../Components/Text"
import styles from "../styles"
import ChatPreview from '../Components/ChatPreview'
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

interface Props {
    navigation: any,
    route: any,
}

function ChatsScreen ({navigation, route}: Props) {
    return <View style={[styles.Screen, styles.ChatsScreen]}>
        <View style={{padding: 15}}>
            <Text style={styles.title}>Chats</Text>
            <View style={{flexDirection: "row", gap: 10,}}>
                <TextInput style={styles.TextInput} 
                    placeholder="Search"/>
                <FontAwesomeIcon icon={faPlus} size={40}/>
            </View>
        </View>

        <ScrollView style={styles.chats}>
            <ChatPreview/>
        </ScrollView>
    </View>
}

export default ChatsScreen