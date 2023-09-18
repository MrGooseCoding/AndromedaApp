import {View, Image} from 'react-native'

import Text from './Text'
import styles from '../styles'

const genericUser = require('./../../assets/generic-user.png')

interface Props {
    data: {}
}

function Message({data}: Props): JSX.Element {
    return <View style={styles.Message}>
        <Image style={styles.messageAuthorImage} source={genericUser}/>
        <View style={styles.messageContent}>
            <Text>Hey</Text>
        </View>
    </View>
}

export default Message;