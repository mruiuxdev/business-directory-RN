import { FlatList, StyleSheet, View } from "react-native";
import { Colors } from "@/constants/Colors";

export default function CategoryLoader() {
  return (
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={Array.from({ length: 5 }, (_, index) => index)}
      renderItem={() => <View style={styles.icon}></View>}
      style={{ paddingLeft: 20 }}
    />
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: Colors.gray,
    marginHorizontal: 5,
  },
});
