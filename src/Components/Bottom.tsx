import { Keyboard, View } from "react-native";
import {useEffect} from 'react'
import styles from "../styles";
import { Animated } from "react-native";
import { useRef } from "react";

interface Props {
    children: React.ReactNode,
    hideWithKeyboard: boolean
    style?: any
}

function Bottom(props: Props):JSX.Element {
    const fadeAnim = new Animated.Value(0);

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    if (props.hideWithKeyboard) {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
        }).start();
    }
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    if (props.hideWithKeyboard) {
        Animated.timing(fadeAnim, {
        toValue: 400,
        duration: 500,
        useNativeDriver: true,
        }).start();
    }
  };
    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow',fadeOut);
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide',fadeIn);
        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, [])
    return <Animated.View style={[styles.Bottom, {translateY: fadeAnim}]}>
        {props.children}
    </Animated.View>
}

export default Bottom