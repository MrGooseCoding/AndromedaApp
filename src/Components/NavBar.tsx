import { View } from "react-native"
import Text from './Text';
import styles from "../styles"

interface Props {
    callback: Function,
}

function NavBar (props: Props) {
    return (
        <View style={styles.NavBar}>
            <Text>This is the nav bar</Text>
        </View>
    )
}

export default NavBar

