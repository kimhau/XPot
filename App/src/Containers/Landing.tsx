import React from 'react';
import {Text, ImageBackground, View} from 'react-native';
import {background} from '../Asset/bgImage';
import {potImage} from '../Asset/pot';
import {CustomButton, Header} from '../Component';

interface IXBankLanding {
  navigation: any;
}
function XBankLanding({navigation}: IXBankLanding) {
  return (
    <ImageBackground
      source={{uri: background.image}}
      resizeMode="cover"
      style={{flex: 1}}>
      <Header />
      <View
        style={{
          flex: 1,
        }}>
        <View style={{padding: 16}}>
          <Text style={{color: 'white'}}>Welcome back,</Text>
          <Text style={{fontWeight: '400', fontSize: 20, color: 'white'}}>
            Jane Lee
          </Text>
        </View>
        <View>
          <Text
            style={{
              paddingTop: 30,
              paddingBottom: 50,
              textAlign: 'center',
              color: 'white',
              fontWeight: '400',
              fontSize: 45,
            }}>
            Ready to save ?
          </Text>
        </View>
        {/**put pot image here */}
        <ImageBackground
          source={{uri: potImage.image}}
          style={{
            height: 200,
            width: 200,
            alignSelf: 'center',
          }}
          resizeMode="contain"></ImageBackground>

        <View
          style={{
            justifyContent: 'flex-end',
            paddingBottom: 16,
          }}>
          <Text
            style={{
              paddingTop: 30,
              textAlign: 'center',
              color: 'white',
              fontWeight: '400',
              fontSize: 24,
            }}>
            Join the X Pot challenge.
          </Text>
          <Text
            style={{
              paddingLeft: 16,
              paddingRight: 16,
              textAlign: 'center',
              color: 'white',
              fontWeight: '400',
              fontSize: 24,
            }}>
            A daily saving game to see how long you can save.
          </Text>
        </View>
      </View>
      <View style={{padding: 20}}>
        <CustomButton
          type="primary"
          text="Join the X Pot challenge"
          onPress={() => navigation.push('SlotMachine')}
        />
      </View>
    </ImageBackground>
  );
}

export default XBankLanding;
