import {TextInput} from "react-native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"

import styles from "../styles"
import Bottom from "./Bottom"
import Btn from "./Btn"

function MessageForm(): JSX.Element {
    return <Bottom hideWithKeyboard={false} visible={true} style={styles.messageBottom}>
        <TextInput style={styles.TextInput}/>
        <Btn onPress={()=>{}} style={styles.sendBtn}><FontAwesomeIcon icon={faPaperPlane} size={20} color="white"/></Btn>
    </Bottom>
}

export default MessageForm