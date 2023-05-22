import React from "react";
import { ImageBackground, Text, View } from "react-native";
import { background } from "../Asset/bgImage";
import { potImage } from "../Asset/pot";
import { CustomButton, Header } from "../Component";
import { useSummaryQuery } from "../Services/summary";

interface ISummaryProps {
  navigation: any;
  route: any;
}
function Summary({ navigation, route }: ISummaryProps) {
  const { data: summary } = useSummaryQuery();
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ImageBackground
        style={{ flex: 1 }}
        resizeMode="cover"
        source={{
          uri: background.image,
        }}
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
              padding: 16,
            }}
          >
            {`Total savings for ${summary?.data?.currentStreakDays} days`}
          </Text>
        </View>
        <ImageBackground
          source={{ uri: potImage.image }}
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
            >{`$${summary?.data?.currentStreakSavings}`}</Text>
          </View>
        </ImageBackground>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          <View style={{ padding: 16, paddingBottom: 0 }}>
            <CustomButton text="Share" type="primary" onPress={() => {}} />
          </View>
          <View style={{ padding: 16 }}>
            <CustomButton
              text="Back to home"
              type="secondary"
              onPress={() => {
                navigation.push("XBank");
              }}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Summary;
