import { Colors } from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function BusinessItem({ business }) {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.parent}
      onPress={() => router.push(`business/details/${business.id}`)}
    >
      <Image source={{ uri: business.imageUrl }} style={styles.image} />
      <View style={styles.content}>
        <View>
          <Text style={styles.name}>{business.name}</Text>
          <Text numberOfLines={5} style={styles.about}>
            {business.about}
          </Text>
        </View>
        <View style={styles.ratingCategory}>
          <View style={styles.star}>
            <AntDesign name="star" size={15} color="gold" />
            <Text style={styles.rate}>(4.5)</Text>
          </View>
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
});
