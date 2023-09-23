import {View} from 'react-native'
import styles from '../styles'
import Message from './Message'
import AccountType from '../Models/Account'
import MessageType from '../Models/Message'

const genericUser = require('./../../assets/generic-user.png')

interface Props {
    messages: MessageType[]
}

function MessagesContainer({messages}: Props):JSX.Element {
    return <View style={styles.container}>
        {messages?.map((MessageData, index, elements)=>{
            return <Message key={MessageData.id} data={MessageData} lastMessage={elements[index-1]} nextMessage={elements[index + 1]}/>
        })}
    </View>
}

export default MessagesContainer