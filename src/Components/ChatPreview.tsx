import { View, Image, TouchableOpacity } from "react-native";
import Text from "./Text";
import styles from "../styles";
import { navigate } from "../Utils/RootNavigation";

const genericUser = require('./../../assets/generic-user.png')

interface Props {
    id: number
}

function Chat(props: Props): JSX.Element {

    const id = props.id

    const onPress = () => {
        navigate('Chat', {id: id})
    }

    return <TouchableOpacity style={styles.ChatPreview} onPress={onPress}>
        <Image source={genericUser} style= {{
            width: 80,
            height: 80,
            borderRadius: 80
        }}/>
        <View style={styles.centerVertical}>
            <Text style={styles.chatTitle}>Chat 1</Text>
            <Text>Some message</Text>
        </View>
    </TouchableOpacity>
}

export default Chat