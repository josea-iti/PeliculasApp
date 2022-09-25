import React, { createContext, useState } from 'react';
import ImageColors from 'react-native-image-colors';

interface ImageColors {
    primary: string;
    secondary: string;
}

interface ContextProps {
    colors: ImageColors;
    prevColors: ImageColors;
    setMainColorsPub: (colors: ImageColors) => void;
    setPrevColorsPub: (colors: ImageColors) => void;
}

export const GradientContext = createContext({} as ContextProps); //TODO definir tipo

export const GradientProvider = ({children}: any) => {

    const [colors, setColors] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent',
    });

    const [prevColors, setPrevColors] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent',
    });

    const setMainColorsPub = (colors: ImageColors) => {
        setColors(colors);
    }
    const setPrevColorsPub = (colors: ImageColors) => {
        setPrevColors(colors);
    }

    return (
        <GradientContext.Provider value={{
            colors,
            prevColors,
            setMainColorsPub,
            setPrevColorsPub
        }}>
            {children}
        </GradientContext.Provider>
    )
}