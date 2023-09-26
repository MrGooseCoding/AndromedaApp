import { Dimensions, Animated , PanResponder} from 'react-native';
import { GestureResponderHandlers } from 'react-native';
import { useState } from 'react'
const windowWidth = Dimensions.get('window').width;

function useSwipe(): {translateY: Animated.Value, handlers: GestureResponderHandlers} {
    const [translateY] = useState(new Animated.Value(0));

    const panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([null, { dy: translateY }], {
                useNativeDriver: false,
            }),
        onPanResponderRelease: (e, gestureState) => {
            console.log(gestureState.dy)
            const dy = gestureState.dy
            const expandThreshold = 10;
            const retractThreshold = 0;

            if (dy > 200) {
                // If its dy is big enough, then completely hide
                Animated.spring(translateY, {
                    toValue: 500,
                    useNativeDriver: false,
                }).start();
            } else if (dy < expandThreshold) {
                // User swiped down, so expand the bar
                Animated.spring(translateY, {
                    toValue: -600,
                    useNativeDriver: false,
                }).start();
            } else if (dy < retractThreshold) {
                // User swiped up, so retract the bar
                Animated.spring(translateY, {
                    toValue: 0,
                    useNativeDriver: false,
                }).start();
            } else {
                // The user's swipe didn't meet the thresholds, so return the bar to its initial position
                Animated.spring(translateY, {
                    toValue: 0,
                    useNativeDriver: false,
                }).start();
            }
        },
    });
    
    const handlers = panResponder.panHandlers

    return {translateY, handlers}
}
export default useSwipe