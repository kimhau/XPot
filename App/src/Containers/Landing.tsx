import React, { useEffect } from "react";
import { ImageBackground, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { background } from "../Asset/bgImage";
import { potImage } from "../Asset/pot";
import { CustomButton, Header } from "../Component";
import { useLoginMutation } from "../Services/auth";
import { useSummaryQuery } from "../Services/summary";
import { loginSuccess } from "../Store/Slices/Auth";

interface IXBankLanding {
  navigation: any;
}
function XBankLanding({ navigation }: IXBankLanding) {
  const [login, { data: user }] = useLoginMutation();
  const { data: summary } = useSummaryQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    login({
      username: "jane",
      password: "HAHA1",
    })
      .unwrap()
      .then((res) => {
        console.log(res.data.token);
        dispatch(loginSuccess({ token: res.data.token }));
      })
      .catch((err) => {
        console.log("login eror", err);
      });
  }, []);

  return (
    <ImageBackground
      source={{ uri: background.image }}
      resizeMode="cover"
      style={{ flex: 1 }}
    >
      <Header />
      <View style={{ padding: 16 }}>
        <Text style={{ color: "white", fontSize: 12 }}>Welcome back,</Text>
        <Text style={{ fontWeight: "400", fontSize: 20, color: "white" }}>
          {user?.data?.usersDTO.name}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text
            style={{
              paddingTop: 30,
              paddingBottom: 50,
              textAlign: "center",
              color: "white",
              fontWeight: "400",
              fontSize: 45,
            }}
          >
            Ready to save ?
          </Text>
        </View>
        {/**put pot image here */}
        <ImageBackground
          source={{ uri: potImage.image }}
          style={{
            height: 200,
            width: 200,
            alignSelf: "center",
          }}
          resizeMode="contain"
        ></ImageBackground>
        {summary?.data?.currentStreakDays === 0 ? (
          <View
            style={{
              justifyContent: "flex-end",
              paddingBottom: 16,
            }}
          >
            <Text
              style={{
                paddingTop: 30,
                textAlign: "center",
                color: "white",
                fontWeight: "400",
                fontSize: 24,
              }}
            >
              Join the X Pot challenge.
            </Text>
            <Text
              style={{
                paddingLeft: 16,
                paddingRight: 16,
                textAlign: "center",
                color: "white",
                fontWeight: "400",
                fontSize: 24,
              }}
            >
              A daily saving game to see how long you can save.
            </Text>
          </View>
        ) : (
          <View
            style={{
              justifyContent: "flex-end",
              paddingBottom: 16,
            }}
          >
            <Text
              style={{
                paddingTop: 30,
                textAlign: "center",
                color: "white",
                fontWeight: "400",
                fontSize: 24,
              }}
            >
              Don't break your streak.
            </Text>
            <Text
              style={{
                paddingLeft: 16,
                paddingRight: 16,
                textAlign: "center",
                color: "white",
                fontWeight: "400",
                fontSize: 24,
              }}
            >
              Continue your XPot challenge.
            </Text>
          </View>
        )}
      </View>
      <View style={{ padding: 20 }}>
        <CustomButton
          type="primary"
          text={
            summary?.data?.currentStreakDays === 0
              ? "Join the X Pot challenge"
              : "Ready to save"
          }
          onPress={() => navigation.push("SlotMachine")}
        />
      </View>
    </ImageBackground>
  );
}

export default XBankLanding;
