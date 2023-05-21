import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

interface ICustomButton {
  onPress: () => void;
  type: 'secondary' | 'primary';
  text: string;
}

function CustomButton({onPress, type, text}: ICustomButton) {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      activeOpacity={0.7}
      style={[
        type === 'primary'
          ? {backgroundColor: '#D0BCFF'}
          : {
              backgroundColor: 'transparent',
              borderWidth: 1,
              borderColor: '#D0BCFF',
            },
        {
          justifyContent: 'center',
          height: 40,
          borderRadius: 100,
        },
      ]}>
      <Text
        style={[
          type === 'primary' ? {color: '#381E72'} : {color: '#D0BCFF'},
          {textAlign: 'center'},
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

export default CustomButton;
