import { StyleSheet } from "react-native"
import { Platform, StatusBar, Dimensions} from "react-native"
import colors from "./colors"

const deviceWidth = Dimensions.get('screen').width

const StatusBarCurrentHeight = StatusBar.currentHeight? StatusBar.currentHeight + 10 : 25

const styles = StyleSheet.create({
    center: {
        justifyContent: "center",
        alignItems: "center"
    },
    smallImage: {
        width: 37, height: 37,
    },
    title: {
        fontSize: 40,
    },
    App: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBarCurrentHeight: 0,
        backgroundColor: colors.background,
    },
    Screen: {
        flex: 1,
        backgroundColor: colors.background,
    },
    ChatsScreen: {
    },
    chats: {
    },
    Chat: {
        gap: 10,
        padding: 15,
        flexDirection: "row"
    },
    chatTitle:{
        fontWeight: "bold"
    },
    TextInput: {
        padding: 4,
        paddingLeft: 10,
        backgroundColor: "grey",
        borderRadius: 15,
        flex: 1,
        fontSize: 17,

    },
    Bottom: {
        bottom: 0,
    },
    NavBar: {
        borderTopColor: "grey",
        borderTopWidth: 0.25,
        padding: 15,
        backgroundColor: colors.background,
        shadowRadius: 70,
        elevation: 7,
        flexDirection: "row",
        justifyContent: "space-between" 
    },
    NavBarBtn: {
    },
    ResizableBar: {
        backgroundColor: colors.background,
        padding: 30,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40, 
        elevation: 7,
        shadowColor: 'black',
    },
    resizeBar: {
        shadowColor: "#000000",
        elevation: 1.5,
        backgroundColor: "grey",
        marginBottom: 10,
        width: 90,
        height: 8,
        borderRadius: 50,
    },
    Text: {
        color: "black",
        fontSize: 20,
    }
})

export default styles