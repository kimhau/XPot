import React, { useState } from "react";
import { ImageBackground, Text, View } from "react-native";
import { background } from "../Asset/bgImage";
import { CustomButton, CustomPopup, Header } from "../Component";
import { useChallengeMutation } from "../Services/challenge";

interface ISavingsProps {
  navigation: any;
  route: any;
}
function Savings({ navigation, route }: ISavingsProps) {
  const [challenge] = useChallengeMutation();
  console.log(route);
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <ImageBackground
      source={{ uri: background.image }}
      resizeMode="cover"
      style={{ flex: 1, backgroundColor: "black" }}
    >
      <Header />
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require("../Asset/manycoins.gif")}
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
                textAlign: "center",
                color: "white",
                fontWeight: "400",
                fontSize: 45,
              }}
            >
              Ready to save ?
            </Text>
          </View>
          {/**put coin image here */}

          <ImageBackground
            source={require("../Asset/coin.png")}
            style={{
              height: 200,
              width: 200,
              alignSelf: "center",
            }}
            resizeMode="contain"
          >
            <View
              style={{
                height: 180,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "black",
                  fontWeight: "900",
                  fontSize: 60,
                  textAlign: "center",
                }}
              >{`$${route.params.slotValue}`}</Text>
            </View>
          </ImageBackground>

          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
            }}
          >
            <View style={{ padding: 16, paddingBottom: 0 }}>
              <CustomButton
                text={`Let's save!`}
                type="primary"
                onPress={() => {
                  console.log("haha");
                  console.log({
                    hasGaveUp: false,
                    amountsToSave: route.params.slotValues,
                  });
                  challenge({
                    hasGaveUp: false,
                    amountsToSave: route.params.slotValues,
                  })
                    .unwrap()
                    .then((res) => {
                      console.log(res);
                      navigation.push("Summary", {
                        totalAcc: route.params.slotValue,
                      });
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
              />
            </View>
            <View style={{ padding: 16 }}>
              <CustomButton
                text={`Give up challenge`}
                type="secondary"
                onPress={() => {
                  setShowModal(!showModal);
                }}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
      <CustomPopup
        action={() => {
          challenge({
            hasGaveUp: true,
            amountsToSave: route.params.slotValues,
          }).then((res) => {
            if ("data" in res) {
              navigation.popToTop();
            }
          });
        }}
        visible={showModal}
        hideModal={() => {
          setShowModal(!showModal);
        }}
      />
    </ImageBackground>
  );
}

export default Savings;
