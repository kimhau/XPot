import React, {useRef, useState} from 'react';
import {StyleSheet, Text, ImageBackground, View} from 'react-native';
import SlotMachine from 'react-native-slot-machine';
import {background} from '../Asset/bgImage';
import {CustomButton, Header} from '../Component';
import {randomIntFromInterval} from '../Utils/helper';

interface ISlotMachineSavings {
  navigation: any;
}
function SlotMachineSavings({navigation}: ISlotMachineSavings) {
  const slotRef = useRef<{
    spinTo: (e: string | number) => {};
  }>();

  const [triggered, setTriggered] = useState<boolean>(false);

  const symbols = ['$', '$', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  return (
    <ImageBackground
      source={{uri: background.image}}
      resizeMode="cover"
      style={{flex: 1}}>
      <Header />
      <View
        style={{
          flex: 1,
          padding: 16,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <SlotMachine
          ref={slotRef}
          text={11111}
          renderContent={(c: any) => (
            <Text style={{fontSize: 25}}>{symbols[c]}</Text>
          )}
          height={100}
          width={50}
          range={'987654321'}
          styles={smStyles}
        />
      </View>
      <View style={{padding: 16, paddingBottom: 0}}>
        <CustomButton
          text="Spin to find out"
          type="primary"
          onPress={() => {
            navigation.push('Savings');
            // setTriggered(true);
            // let temp: string[] = [];
            // for (let i = 1; i <= 5; i++) {
            //   console.log(i);
            //   temp.push(randomIntFromInterval(2, 10));
            // }
            // console.log(temp.join(''), temp.join('').length);
            // const timer = setTimeout(() => {
            //   slotRef.current?.spinTo(parseInt(temp.join('')));
            //   () => clearTimeout(timer);
            // }, 1000);
          }}
        />
      </View>
      <View style={{padding: 16}}>
        <CustomButton text="Not now" type="secondary" onPress={() => {}} />
      </View>
    </ImageBackground>
  );
}

const smStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    overflow: 'hidden',
  },
  slotWrapper: {
    backgroundColor: 'gray',
    marginLeft: 5,
  },
  slotInner: {
    backgroundColor: 'lightgreen',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
  },
  text: {
    fontSize: 50,
    top: -2,
    fontWeight: 'bold',
    color: '#b5b7ba',
  },
  innerBorder: {
    position: 'absolute',
    top: 1,
    right: 1,
    left: 1,
    bottom: 1,
    borderColor: 'blue',
    borderRadius: 8,
    borderWidth: 0,
    zIndex: 1,
  },
  outerBorder: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    borderColor: '#989898',
    borderRadius: 8,
    borderWidth: 1,
    zIndex: 1,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    backgroundColor: '#ffffff77',
  },
});

export default SlotMachineSavings;
