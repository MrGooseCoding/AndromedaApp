import {View} from 'react-native'
import Text from './Text'
import styles from '../styles'

function ResizableBar(): JSX.Element {
    return <View>
        <View style={styles.center}>
            <View style={styles.resizeBar}></View>
        </View>

        <View style={styles.ResizableBar}>
            <Text>Some react native here!</Text>
        </View>
    </View>
}

export default ResizableBar