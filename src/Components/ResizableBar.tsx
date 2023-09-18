import {View} from 'react-native'
import Text from './Text'
import styles from '../styles'
import useSwipe from './../Hooks/useSwipe'
import { Animated } from "react-native";
import {useEffect} from 'react'

interface Props {
    setPointerEvents: Function
}

function ResizableBar({setPointerEvents}: Props): JSX.Element {
    const fadeAnim = new Animated.Value(0);

    const fadeIn = () => {
        setPointerEvents(false)
        Animated.timing(fadeAnim, {
            toValue: -500,
            duration: 500,
            useNativeDriver: true,
        }).start();
    };

    const fadeOut = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
        }).start(()=>setPointerEvents(true));
    };
    const onSwipeUp = () => {
        fadeIn()
    }

    const onSwipeDown = () => {
        fadeOut()
    }

    const { onTouchStart, onTouchEnd } = useSwipe(onSwipeUp, onSwipeDown, 2)

    return <Animated.View style={{translateY: fadeAnim, height: 600, marginBottom: -500,}} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <View style={styles.center}>
            <View
                style={styles.resizeBar}>
            </View>
        </View>

        <View style={styles.ResizableBar}>
            <Text>Some react native here!</Text>
        </View>
    </Animated.View>
}

export default ResizableBar