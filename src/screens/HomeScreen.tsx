import React, { useContext } from 'react'
import { ActivityIndicator, Dimensions, FlatList, View } from 'react-native'
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';
import ImageColors from "react-native-image-colors";
import { getImageColors } from '../helpers/getColores';
import { GradientContext } from '../context/GradientContext';
import { useEffect } from 'react';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {

  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();
  const {setMainColorsPub} = useContext(GradientContext);

  const getPosterColors = async(index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const [primary='green', secondary='orange'] = await getImageColors(uri);
    setMainColorsPub({primary, secondary});
  }

  useEffect(() => {
    if (nowPlaying.length > 0) {
      getPosterColors(0);
    }
  }, [nowPlaying])
  
  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="red" size={100}/>
      </View>
    )
  }

  return (
    <GradientBackground>
      <ScrollView>
        <View style={{height: 440, marginTop: top + 20}}>
          <FlatList
            data={nowPlaying}
            renderItem={({item}: any) => (
              <MoviePoster movie={item}/>
            )}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            // onScroll={({item}: any) => getPosterColors(item)}
          />
        </View>
        <HorizontalSlider title='Populares' movies={popular}/>
        <HorizontalSlider title='Top Rated' movies={topRated}/>
        <HorizontalSlider title='Próximamente' movies={upcoming}/>
      </ScrollView>
    </GradientBackground>
  )
}
