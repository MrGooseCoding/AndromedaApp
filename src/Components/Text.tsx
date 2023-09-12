import { Text as NativeText } from "react-native";
import styles from "../styles";
import { Children } from "react";

interface Props {
    children?: any
}

function Text(props: Props) {
    return <NativeText style={styles.Text}>{props.children}</NativeText>
}
export default Text