import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/core';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import ImageColors from "react-native-image-colors";
import { getImageColors } from '../helpers/getColores';
import { GradientContext } from '../context/GradientContext';

interface Props {
    movie: Movie;
    width?: number;
    height?: number;
}

export const MoviePoster = ({movie, width=300, height=420}: Props) => {

  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const navigation = useNavigation();

  // getPosterColors(uri);

  return (
    <TouchableOpacity
        onPress={() => navigation.navigate('DetailScreen', movie)}
        activeOpacity={0.8}
        style={{
            width,
            height,
            marginHorizontal: 2,
            paddingBottom: 20,
            paddingHorizontal: 7,
        }}
    >
        <View style={styles.imageContainer}>
            <Image
                source={{uri}}
                style={styles.image}
            />
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18,
    },
    imageContainer: {
        flex: 1,
        borderRadius:19,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.60,
        shadowRadius: 8.35,
        
        elevation: 8,
    }
})

// const getPosterColors = async(uri: string) => {
//     const {setMainColorsPub} = useContext(GradientContext);
//     const [primary='green', secondary='orange'] = await getImageColors(uri);
//     setMainColorsPub({primary, secondary});
// }
