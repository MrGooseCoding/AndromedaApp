import {View} from 'react-native'
import { useEffect, useState } from 'react'

import Text from './Text'
import styles from '../styles'
import { Animated , PanResponder} from "react-native"
import useSwipe from '../Hooks/useSwipe'

interface Props {
    setPointerEvents: React.Dispatch<React.SetStateAction<boolean>>
}

function ResizableBar({setPointerEvents}: Props): JSX.Element {
    const {translateY, handlers} = useSwipe()

    return <Animated.View style={{transform:[{translateY}]}} 
            onTouchStart={()=>setPointerEvents(false)} 
            onTouchEnd={()=>setPointerEvents(true)}
            >
        <View style={styles.center}>
            <View
                style={styles.resizeBar}
                {...handlers}>
            </View>
        </View>

        <View style={styles.ResizableBar}>
            <Text>Some react native here!</Text>
        </View>
    </Animated.View>
}

export default ResizableBar