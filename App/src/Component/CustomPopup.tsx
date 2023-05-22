import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Modal, Portal } from "react-native-paper";

interface ICustomPopupProps {
  visible: boolean;
  hideModal: () => void;
  action: () => void;
}
function CustomPopup({ hideModal, visible, action }: ICustomPopupProps) {
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={{
          backgroundColor: "#2B2930",
          borderRadius: 28,
          marginLeft: 40,
          marginRight: 40,
          padding: 20,
        }}
      >
        <Text
          style={{
            color: "#E6E0E9",
            paddingBottom: 16,
            fontWeight: "400",
            fontSize: 24,
          }}
        >
          Giving up so fast ?
        </Text>
        <Text style={{ color: "#E6E0E9", fontWeight: "400", fontSize: 14 }}>
          When you give up on the challenge, your progress will not be saved and
          saving streak will end.
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            paddingTop: 20,
          }}
        >
          <TouchableOpacity onPress={hideModal}>
            <Text
              style={{
                color: "#D0BCFF",
                fontWeight: "500",
                fontSize: 14,
                padding: 16,
              }}
            >
              Cancel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={action}>
            <Text
              style={{
                color: "#D0BCFF",
                fontWeight: "500",
                fontSize: 14,
                padding: 16,
              }}
            >
              Yes, give up
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </Portal>
  );
}

export default CustomPopup;
