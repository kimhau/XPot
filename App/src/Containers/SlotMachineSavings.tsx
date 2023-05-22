import React, { useRef, useState } from "react";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import SlotMachine from "react-native-slot-machine";
import { background } from "../Asset/bgImage";
import { CustomButton, Header } from "../Component";
import { randomIntFromInterval } from "../Utils/helper";

interface ISlotMachineSavings {
  navigation: any;
}
function SlotMachineSavings({ navigation }: ISlotMachineSavings) {
  const slotRef = useRef<{
    spinTo: (e: string | number) => {};
  }>();

  const [triggered, setTriggered] = useState<boolean>(false);

  const symbols = ["$", "$", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  return (
    <ImageBackground
      source={{ uri: background.image }}
      resizeMode="cover"
      style={{ flex: 1 }}
    >
      <Header />
      <View
        style={{
          flex: 1,
          padding: 16,
          justifyContent: "space-between",
        }}
      >
        <View />
        <View style={{ padding: 16 }}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 45,
              color: "white",
              fontWeight: "400",
            }}
          >
            How much to save today ?
          </Text>
        </View>
        <SlotMachine
          ref={slotRef}
          text={11111}
          renderContent={(c: any) => (
            <Text
              style={{
                fontSize: 45,
                color: "white",
                textShadowColor: "black",
                textShadowRadius: 9,
              }}
            >
              {symbols[c]}
            </Text>
          )}
          height={100}
          width={(Dimensions.get("window").width - 64) / 5}
          range={"987654321"}
          styles={smStyles}
        />
        <View style={{ gap: 16, paddingHorizontal: 16 }}>
          <CustomButton
            text="Spin to find out"
            type="primary"
            disabled={triggered}
            onPress={() => {
              setTriggered(true);
              console.log("-----");
              let temp: string[] = [];
              for (let i = 1; i <= 5; i++) {
                const randNumber = randomIntFromInterval();
                console.log(i, randNumber, symbols[randNumber]);
                temp.push(symbols[randNumber + 1]);
              }
              console.log("-----");
              console.log(temp.join(""));
              console.log("-----");
              const timer = setTimeout(() => {
                slotRef.current?.spinTo(parseInt(temp.join("")));
                clearTimeout(timer);
              }, 1000);

              const timerNavi = setTimeout(() => {
                var sum = temp
                  .map((el: string) => {
                    console.log(el);
                    return parseInt(el);
                  })
                  .reduce(function (accumulator, currentValue) {
                    return accumulator - 1 + currentValue;
                  }, 0);
                navigation.push("Savings", {
                  slotValue: sum,
                  slotValues: temp.map((num) => {
                    return parseInt(num) - 1;
                  }),
                });
                clearTimeout(timerNavi);
              }, 4000);
            }}
          />
          <CustomButton
            text="Not now"
            type="secondary"
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const smStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    overflow: "hidden",
    borderRadius: 8,
    elevation: 20,
    shadowColor: "#F8E35E",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    marginBottom: 100,
  },
  slotWrapper: {
    backgroundColor: "gray",
    marginLeft: 5,
    borderRadius: 8,
    elevation: 20,
    shadowColor: "#F8E35E",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  slotInner: {
    backgroundColor: "#D0BCFF",
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    padding: 2,
    borderRadius: 8,
  },
  text: {
    fontSize: 90,
    top: -2,
    fontWeight: "bold",
    borderRadius: 8,
    color: "#FFFFFF",
  },
  innerBorder: {
    position: "absolute",
    top: 1,
    right: 1,
    left: 1,
    bottom: 1,
    borderColor: "blue",
    borderRadius: 8,
    borderWidth: 0,
    zIndex: 1,
  },
  outerBorder: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    borderColor: "#989898",
    borderRadius: 8,
    borderWidth: 1,
    zIndex: 1,
  },
  overlay: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    borderRadius: 8,
    backgroundColor: "#ffffff77",
  },
});

export default SlotMachineSavings;
