import {FlatList} from 'react-native'
import styles from '../styles'
import Message from './Message'
import AccountType from '../Models/Account'
import MessageType from '../Models/Message'

const genericUser = require('./../../assets/generic-user.png')

interface Props {
    messages: MessageType[]
}

function MessagesContainer({messages}: Props):JSX.Element {
    return <FlatList
    data={messages}
    keyExtractor={(item:MessageType) => String(item.id)}
    renderItem={({ item, index }: { item: MessageType; index: number }) => (
      <Message
        data={item}
        lastMessage={index > 0 ? messages[index - 1] : null}
        nextMessage={index < messages.length - 1 ? messages[index + 1] : null}
      />
    )}
  />
  
}

export default MessagesContainer