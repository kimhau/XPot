import React from 'react';
import {Text, View} from 'react-native';
import {Icon} from 'react-native-elements';

function Header() {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 64,
        backgroundColor: '#141218',
      }}>
      <View
        style={{
          padding: 16,
        }}>
        <Icon name="menu" type="material" color="white" />
      </View>
      <View
        style={{
          flex: 1,
          padding: 16,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            fontWeight: '500',
            color: 'white',
          }}>
          XBank
        </Text>
      </View>
      <View
        style={{
          padding: 16,
        }}>
        <Icon name="account-circle" type="material" color="white" />
      </View>
    </View>
  );
}

export default Header;
