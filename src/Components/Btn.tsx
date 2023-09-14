import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Text from "./Text";
import ReactNode from 'react-native'

interface Props {
    title?: string,
    style?: any,
    onPress: Function,
    children?: React.ReactNode
}

export default function Btn({title, style, onPress, children}: Props) {
    const color = (style?.color)?style.color:'black'
    const fontSize = (style?.fontSize)?style.fontSize:20
    const fontWeight = (style?.fontWeight)?style.fontWeight:500

    return (
        <TouchableOpacity style={{...style, flexDirection:'row', alignItems:'center',}} onPress={() => onPress()}>
            {children}
            <Text style={{fontSize: fontSize, color: color, fontWeight: fontWeight}}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}
