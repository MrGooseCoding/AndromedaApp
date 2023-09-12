import { StyleSheet } from "react-native"
import { Platform, StatusBar} from "react-native"
import colors from "./colors"

const StatusBarCurrentHeight = StatusBar.currentHeight? StatusBar.currentHeight + 10 : 25

const styles = StyleSheet.create({
    App: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBarCurrentHeight: 0,
        backgroundColor: colors.background,
    },
    Screen: {
        flex: 1,
        backgroundColor: colors.background,
    },
    NavBar: {
        bottom: 0,
    },
    Text: {
        color: "white",
        fontSize: 20,
    }
})

export default styles