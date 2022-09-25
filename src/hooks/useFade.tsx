import { useRef } from "react";
import { Animated } from 'react-native';

export const useFade = (fromValue: number, toValue: number, duration: number) => {

    const opacity = useRef(new Animated.Value(fromValue)).current;

    const fadeIn = () => {
        Animated.timing(
            opacity,
            {
                toValue: toValue,
                duration,
                useNativeDriver: true
            }
        ).start();
    }
    const fadeOut = () => {
        Animated.timing(
            opacity,
            {
                toValue: fromValue,
                duration,
                useNativeDriver: true
            }
        ).start();
    }

    return {
        fadeIn,
        fadeOut,
        opacity
    }

}
