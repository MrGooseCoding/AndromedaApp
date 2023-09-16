import { View, Image, TouchableOpacity } from "react-native";
import Text from "./Text";
import styles from "../styles";

const genericUser = require('./../../assets/generic-user.png')

function Chat(): JSX.Element {
    return <TouchableOpacity style={styles.Chat}>
        <Image source={genericUser} style= {{
            width: 80,
            height: 80
        }}/>
        <View style={{flexGrow : 1, justifyContent : 'center'}}>
            <Text style={styles.chatTitle}>Chat 1</Text>
            <Text>Some message</Text>
        </View>
    </TouchableOpacity>
}

export default Chat