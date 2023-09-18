import { View, Image } from "react-native";
import { BackHandler } from "react-native";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import Message from "../Components/Message";
import MessageForm from "../Components/MessageForm";
import MessagesContainer from "../Components/MessagesContainer";
import Btn from "../Components/Btn";
import Text from "../Components/Text";
import styles from "../styles";


const genericUser = require('./../../assets/generic-user.png')

interface Props {
    navigation: any,
    route: any,
    setBottomVisibility: Function
}

function ChatScreen({navigation, route, setBottomVisibility}: Props): JSX.Element {
    function handleBackButtonClick() {
        navigation.goBack();
        setBottomVisibility(true)
        return true;
    }

    useEffect(() => {
        setBottomVisibility(false)

        BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
        };
    }, []);
    return <View style={styles.Screen}>
        <View style={styles.Header}>
            <Btn onPress={()=>handleBackButtonClick()}><FontAwesomeIcon icon={faArrowLeft} size={25}/></Btn>
            <Image style={{
                borderRadius: 50,
                width: 45,
                height: 45
            }} source={genericUser}/>
            <View>
                <View style={[styles.centerVertical, {marginTop: -3}]}>
                    <Text>Chat {route.params.id}</Text>
                </View>
            </View>
        </View>

        <MessagesContainer/>

        <MessageForm/>
        
    </View>
}

export default ChatScreen