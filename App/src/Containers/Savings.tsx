import React from 'react';
import {Image, ImageBackground, View} from 'react-native';
import {background} from '../Asset/bgImage';
import {Header} from '../Component';

function Savings() {
  return (
    <ImageBackground
      source={{uri: background.image}}
      resizeMode="cover"
      style={{flex: 1, backgroundColor: 'black'}}>
      <Header />
      <View style={{flex: 1}}>
        <ImageBackground
          source={require('../Asset/manycoins.gif')}
          style={{flex: 1}}></ImageBackground>
      </View>
    </ImageBackground>
  );
}

export default Savings;
