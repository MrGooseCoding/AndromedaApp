import {View, Image} from 'react-native'
import Text from './Text'
import styles from '../styles'
import MessageType from '../Models/Message'

const genericUser = require('./../../assets/generic-user.png')

interface Props {
    data: MessageType
    nextMessage: MessageType | null
    lastMessage: MessageType | null
}

function Message({data, lastMessage, nextMessage}: Props): JSX.Element {
    const lastMessageSameAuthor = (lastMessage?.author.id === data.author.id)
    const nextMessageSameAuthor = (nextMessage?.author.id === data.author.id)

    const selfMessage = (data.author.id === 1)


    return <View style={[styles.Message, {marginLeft: (selfMessage)?"auto":0}]}>
        {
            (!selfMessage)&&<Image style={[styles.smallImage, styles.messageAuthorImage, {opacity: (lastMessageSameAuthor)?0:1}]} source={genericUser}/>
        }
        <View>
            {
                (!lastMessageSameAuthor)&&<Text style={{...styles.smallText, marginLeft: (selfMessage)?"auto":0}}>{data.author.user.first_name}</Text>
            }
            <View style={[styles.messageContent, {
                borderTopLeftRadius: (lastMessageSameAuthor && !selfMessage)?0:22,
                borderBottomLeftRadius: (nextMessageSameAuthor && !selfMessage)?0:22,

                borderTopRightRadius: (lastMessageSameAuthor && selfMessage)?0:22,
                borderBottomRightRadius: (nextMessageSameAuthor && selfMessage)?0:22,
            }]}>
                <Text>{data.content}</Text>
            </View>
        </View>
        {
            (selfMessage)&&<Image style={[styles.smallImage, styles.messageAuthorImage, {opacity: (lastMessageSameAuthor)?0:1}]} source={genericUser}/>
        }
    </View>
}

export default Message;