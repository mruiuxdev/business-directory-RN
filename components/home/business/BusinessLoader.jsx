import { Colors } from "@/constants/Colors";
import { FlatList, StyleSheet, View } from "react-native";

export default function BusinessItem() {
  return (
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={Array.from({ length: 5 }, (_, index) => index)}
      renderItem={() => (
        <View style={styles.parent}>
          <View style={styles.image} />
          <View style={styles.name} />
          <View style={styles.about} />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  parent: {
    borderRadius: 15,
    backgroundColor: "white",
    padding: 10,
    marginHorizontal: 10,
    display: "flex",
    gap: 5,
  },
  image: {
    width: 200,
    height: 150,
    backgroundColor: Colors.gray,
    borderRadius: 10,
  },
  name: {
    height: 10,
    backgroundColor: Colors.gray,
    borderRadius: 10,
  },
  about: {
    backgroundColor: Colors.gray,
    height: 10,
    borderRadius: 10,
  },
});
