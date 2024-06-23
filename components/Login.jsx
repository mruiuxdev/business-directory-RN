import { Colors } from "@/constants/Colors";
import { useWarmUpBrowser } from "@/hooks/useWarmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";
import * as WebBrowser from "expo-web-browser";
import { useCallback } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

WebBrowser.maybeCompleteAuthSession();

export default function Login() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/images/login.png")}
          style={styles.image}
        />
        <Text style={styles.subContainer}>
          Your ultimate{" "}
          <Text style={{ color: Colors.primary }}>
            Community Business Directory
          </Text>{" "}
          App
        </Text>
        <Text style={styles.text}>
          Find your favorite business near your and post your own business to
          your community
        </Text>
      </View>
      <View>
        <TouchableOpacity style={styles.btn} onPress={onPress}>
          <Text style={styles.btnText}>Let's Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    marginVertical: 80,
  },
  image: {
    width: 200,
    height: 415,
    borderRadius: 20,
    borderWidth: 6,
    borderColor: "black",
    objectFit: "contain",
  },
  subContainer: {
    textAlign: "center",
    padding: 20,
    fontSize: 30,
    marginTop: -20,
    fontFamily: "outfit-bold",
    backgroundColor: "white",
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    paddingHorizontal: 50,
    fontFamily: "outfit-regular",
    color: Colors.gray,
  },
  btn: {
    marginTop: 30,
    backgroundColor: Colors.primary,
    padding: 20,
    width: "60%",
    maxWidth: 400,
    borderRadius: 50,
    textAlign: "center",
    marginHorizontal: "auto",
  },
  btnText: {
    color: "white",
    fontSize: 18,
    fontFamily: "outfit-medium",
    textAlign: "center",
  },
});
