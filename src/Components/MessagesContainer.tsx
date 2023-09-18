import {View} from 'react-native'
import styles from '../styles'

import Message from './Message'

function MessagesContainer():JSX.Element {
    return <View style={styles.container}>
        <Message data={{}}/>
    </View>
}

export default MessagesContainer