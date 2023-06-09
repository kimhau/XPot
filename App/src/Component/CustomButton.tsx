import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface ICustomButton {
  onPress: () => void;
  type: "secondary" | "primary";
  text: string;
  disabled?: boolean;
}

function CustomButton({ onPress, type, text, disabled }: ICustomButton) {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      activeOpacity={0.7}
      disabled={disabled}
      style={[
        type === "primary"
          ? { backgroundColor: "#D0BCFF" }
          : {
              backgroundColor: "transparent",
              borderWidth: 1,
              borderColor: "#D0BCFF",
            },
        {
          justifyContent: "center",
          height: 40,
          borderRadius: 100,
        },
      ]}
    >
      <Text
        style={[
          type === "primary" ? { color: "#381E72" } : { color: "#D0BCFF" },
          { textAlign: "center", fontWeight: "500" },
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}

export default CustomButton;
