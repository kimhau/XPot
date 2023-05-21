import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { background } from '../Asset/bgImage';
import { CustomButton, Header } from '../Component';

interface ISavingsProps {
  navigation: any;
  route: any;
}
function Savings({ navigation, route }: ISavingsProps) {
  console.log(route);
  return (
    <ImageBackground
      source={{ uri: background.image }}
      resizeMode="cover"
      style={{ flex: 1, backgroundColor: 'black' }}
    >
      <Header />
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require('../Asset/manycoins.gif')}
          style={{ flex: 1 }}
        >
          <View
            style={{
              paddingTop: 100,
              paddingBottom: 50,
            }}
          >
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontWeight: '400',
                fontSize: 45,
              }}
            >
              Ready to save ?
            </Text>
          </View>
          {/**put coin image here */}

          <ImageBackground
            source={require('../Asset/coin.png')}
            style={{
              height: 200,
              width: 200,
              alignSelf: 'center',
            }}
            resizeMode="contain"
          >
            <View
              style={{
                height: 180,
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  color: 'black',
                  fontWeight: '900',
                  fontSize: 60,
                  textAlign: 'center',
                }}
              >{`$${route.params.slotValue}`}</Text>
            </View>
          </ImageBackground>

          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
            }}
          >
            <View style={{ padding: 16, paddingBottom: 0 }}>
              <CustomButton
                text={`Let's save!`}
                type="primary"
                onPress={() => {
                  navigation.push('Summary', {
                    totalAcc: route.params.slotValue,
                  });
                }}
              />
            </View>
            <View style={{ padding: 16 }}>
              <CustomButton
                text={`Give up challenge`}
                type="secondary"
                onPress={() => {}}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    </ImageBackground>
  );
}

export default Savings;
