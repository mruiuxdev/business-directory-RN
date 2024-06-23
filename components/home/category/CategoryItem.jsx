import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CategoryItem({ category, onCategoryPress }) {
  return (
    <TouchableOpacity
      style={styles.category}
      onPress={() => onCategoryPress(category)}
    >
      <View style={styles.icon}>
        <Image
          source={{ uri: category.icon ? category.icon : "" }}
          width={30}
          height={30}
        />
      </View>
      <Text style={styles.title}>{category.title ? category.title : ""}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  category: {
    marginHorizontal: 5,
    display: "flex",
    gap: 5,
    textAlign: "center",
    alignItems: "center",
  },
  icon: {
    width: 60,
    height: 60,
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#c6b2ff",
  },
  title: {
    fontFamily: "outfit-medium",
    fontSize: 14,
  },
});
