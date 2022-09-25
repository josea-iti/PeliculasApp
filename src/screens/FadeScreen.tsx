import React from 'react'
import { Animated, Button, View } from 'react-native';
import { useFade } from '../hooks/useFade';

export const FadeScreen = () => {

  const {opacity, fadeIn, fadeOut} = useFade(0, 1, 1000);

  return (

    <View 
      style={{
        flex: 1,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
      }}>

        <Animated.View 
          style={{
            backgroundColor: 'blue',
            width: 150,
            height: 150,
            borderColor: 'white',
            borderWidth: 10,
            opacity,
            marginBottom: 20,
          }}/>

        <Button
            title='Fade In'
            onPress={fadeIn}
        />
        <Button
            title='Fade Out'
            onPress={fadeOut}
        />

    </View>

    )
}
