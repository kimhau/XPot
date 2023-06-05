import React, { RefObject, useRef } from "react";
import { ImageBackground, Text, View } from "react-native";
import Share from 'react-native-share';
import ViewShot from "react-native-view-shot";
import { background } from "../Asset/bgImage";
import { potImage } from "../Asset/pot";
import { CustomButton, Header } from "../Component";
import { useSummaryQuery } from "../Services/summary";

interface ISummaryProps {
  navigation: any;
  route: any;
}

type CaptureRef = {
  capture: (options?: { format?: string; quality?: number }) => Promise<string>;
};
function Summary({ navigation, route }: ISummaryProps) {
  const ref: RefObject<CaptureRef>  = useRef(null);
  const { data: summary } = useSummaryQuery();
  return (
    <View style={{ flex: 1,  }}>
      <Header />
      <ViewShot ref={ref}  style={{ flex: 1 }}>
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
        </ImageBackground>
      </ViewShot>
      <View
        style={{
          position: "absolute",
          bottom:0,
          width: "100%",
          // justifyContent: "flex-end",
          // backgroundColor: ""
        }}
      >
        <View style={{ paddingVertical: 16, paddingBottom: 0, paddingHorizontal:32 }}>
          <CustomButton text="Share" type="primary" onPress={shareScreen} />
        </View>
        <View style={{ paddingVertical: 16, paddingHorizontal:32 }}>
          <CustomButton
            text="Back to home"
            type="secondary"
            onPress={() => {
              navigation.push("XBank");
            }}
          />
        </View>
      </View>
    </View>
  );

  async function shareScreen() {
    const uri = await ref?.current?.capture({
      format: 'png',
      quality: 1,
    });
  
    const shareOptions = {
      title: 'XPot',
      message: 'Join me on XPot!',
      url: `file://${uri}`
    };
  
    await Share.open(shareOptions);
  }
}

export default Summary;
