import { Colors } from "@/constants/Colors";
import { StyleSheet, View } from "react-native";

export default function BusinessItem({}) {
  return (
    <View style={styles.parent}>
      <View style={styles.image} />
      <View style={styles.content}>
        <View>
          <View style={styles.name} />
          <View style={styles.about} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    borderRadius: 15,
    backgroundColor: "white",
    padding: 10,
    marginHorizontal: 15,
    marginVertical: 10,
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    flex: 1,
  },
  image: {
    width: 150,
    height: 150,
    backgroundColor: Colors.gray,
    borderRadius: 10,
  },
  name: {
    backgroundColor: Colors.gray,
    height: 10,
    borderRadius: 10,
  },
  about: {
    backgroundColor: Colors.gray,
    height: 10,
    borderRadius: 10,
    marginTop: 20,
  },
});
