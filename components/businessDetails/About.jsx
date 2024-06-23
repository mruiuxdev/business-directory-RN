import { View, Text, StyleSheet } from "react-native";

export default function About({ about }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>About</Text>
      <Text style={styles.about}>{about}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingBottom: 30,
  },
  heading: {
    fontFamily: "outfit-bold",
    fontSize: 20,
  },
  about: {
    fontFamily: "outfit-regular",
    fontSize: 16,
    marginTop: 10,
    lineHeight: 20,
  },
});
