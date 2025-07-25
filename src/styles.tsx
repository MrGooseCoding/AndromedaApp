import { StyleSheet } from "react-native"
import { Platform, StatusBar, Dimensions} from "react-native"
import colors from "./colors"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"

const deviceWidth = Dimensions.get('screen').width

const StatusBarCurrentHeight = StatusBar.currentHeight? StatusBar.currentHeight + 10 : 25

const styles = StyleSheet.create({
    center: {
        justifyContent: "center",
        alignItems: "center"
    },
    centerVertical: {
        flexGrow : 1, 
        justifyContent : 'center',
        textAlignVertical: 'center'
    },
    container: {
        padding: 10,
    },
    smallImage: {
        width: 40, height: 40,
        borderRadius: 37
    },
    smallText: {
        color: "grey",
        fontSize: 15
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
    Header:{
        gap: 10,
        padding: 20,
        fontSize: 40,
        flexDirection: 'row',
        borderBottomWidth: 1.5,
        borderBottomColor: "gray",
    },
    chats: {
        marginBottom: 70,
    },
    ChatPreview: {
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
        borderRadius: 20,
        flex: 1,
        fontSize: 17,

    },
    Bottom: {
        position: "absolute",
        bottom: 0,
        width: deviceWidth,
    },
    messageBottom: {
        padding: 10,
        gap: 10,
        flexDirection: "row"
    },
    sendBtn: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        height: 40,
        width: 40,
        backgroundColor: "grey",
    },
    NavBar: {
        maxHeight: 70,
        borderTopColor: "grey",
        borderTopWidth: 0.25,
        padding: 15,
        backgroundColor: colors.background,
        shadowRadius: 70,
        elevation: 8,
        flexDirection: "row",
        justifyContent: "space-between" 
    },
    NavBarBtn: {
    },
    ResizableBar: {
        flex: 1,
        backgroundColor: colors.background,
        padding: 25,
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
        fontSize: 18
    },
    Message: {
        flexDirection: "row",
        gap: 10,
        marginBottom: 1
    },
    messageAuthorImage: {
        marginTop: "auto"
    },
    messageContent: {
        padding: 7,
        backgroundColor:colors.background,
        borderWidth: 1,
        borderColor: "grey"
    }
})

export default styles