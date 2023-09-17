import { Keyboard, View } from "react-native";
import {useEffect} from 'react'
import styles from "../styles";
import { Animated } from "react-native";
import { useRef } from "react";

interface Props {
    children: React.ReactNode,
    hideWithKeyboard: boolean,
    visible: boolean,
    style?: any
}

function Bottom(props: Props):JSX.Element {
    const fadeAnim = new Animated.Value(0);

    const fadeIn = () => {
        if (props.hideWithKeyboard) {
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }).start();
        }
    };

    const fadeOut = () => {
        if (props.hideWithKeyboard) {
            Animated.timing(fadeAnim, {
            toValue: 400,
            duration: 500,
            useNativeDriver: true,
            }).start();
        }
    };

    useEffect(() => {
        if (props.visible) {fadeIn()} else {fadeOut()}
    }, [props.visible])

    useEffect(() => {
        
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow',fadeOut);
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide',fadeIn);
        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, [])
    return <Animated.View style={[styles.Bottom, props.style, {translateY: fadeAnim}]}>
        {props.children}
    </Animated.View>
}

export default Bottom
