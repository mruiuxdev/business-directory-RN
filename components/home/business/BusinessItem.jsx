import { Colors } from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function BusinessItem({ business }) {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.push(`business/details/${business.id}`)}
      style={styles.parent}
    >
      <Image source={{ uri: business.imageUrl }} style={styles.image} />
      <Text style={styles.name}>{business.name}</Text>
      <Text numberOfLines={2} style={styles.about}>
        {business.about}
      </Text>
      <View style={styles.ratingCategory}>
        <View style={styles.star}>
          <AntDesign name="star" size={15} color="gold" />
          <Text style={styles.rate}>(4.5)</Text>
        </View>
        <View style={styles.category}>
          <Text style={styles.categoryText}>{business.category}</Text>
        </View>
      </View>
    </TouchableOpacity>
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
    width: 220,
  },
  image: {
    width: 200,
    height: 150,
    objectFit: "cover",
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    fontFamily: "outfit-medium",
  },
  about: {
    color: Colors.gray,
    fontFamily: "outfit-regular",
  },
  ratingCategory: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  star: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  rate: {
    fontSize: 14,
    fontFamily: "outfit-bold",
  },
  category: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    padding: 5,
    backgroundColor: Colors.primary,
  },
  categoryText: {
    fontSize: 14,
    fontFamily: "outfit-regular",
    color: "white",
  },
});
