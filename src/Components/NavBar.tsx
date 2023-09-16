import { View, Image } from "react-native"
import Text from './Text';
import styles from "../styles"
import Btn from "./Btn";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCommentAlt, faBell, faHome } from "@fortawesome/free-solid-svg-icons";

const genericUser = require('./../../assets/generic-user.png')

interface Props {
    callback: Function,
}

function NavBar (props: Props) {
    return (
        <View style={styles.NavBar}>
            <Btn style={styles.NavBarBtn} onPress={()=>{console.log('Hey!')}}><FontAwesomeIcon icon={faBell} size={32} color="black"/></Btn>
            <Btn style={styles.NavBarBtn} onPress={()=>{console.log('Hey!')}}><FontAwesomeIcon icon={faHome} size={32} color="black"/></Btn>
            <Btn style={styles.NavBarBtn} onPress={()=>{console.log('Hey!')}}><FontAwesomeIcon icon={faCommentAlt} size={32} color="black"/></Btn>
            <Btn style={styles.NavBarBtn} onPress={()=>{console.log('Hey!')}}><Image style={styles.smallImage} source={genericUser}/></Btn>
        </View>
    )
}

export default NavBar

