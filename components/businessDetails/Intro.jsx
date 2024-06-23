import { AntDesign, Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function Intro({ image, name, address }) {
  const router = useRouter();

  return (
    <View style={styles.parent}>
      <View style={styles.parentOverlay} />
      <View style={styles.backHeart}>
        <TouchableOpacity>
          <AntDesign
            name="back"
            size={30}
            color="white"
            onPress={() => router.back()}
          />
        </TouchableOpacity>
        <AntDesign
          name="hearto"
          size={30}
          color="white"
          onPress={() => router.back()}
        />
      </View>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.nameAddress}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.location}>
          <Entypo name="location-pin" size={20} color="white" />
          <Text style={styles.address}>{address}</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  parent: {
    position: "relative",
    backgroundColor: "white",
  },
  backHeart: {
    position: "absolute",
    top: 50,
    left: 0,
    width: "100%",
    paddingHorizontal: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    zIndex: 2,
  },
  parentOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    backgroundColor: "rgba(0,0,0,.5)",
    zIndex: 1,
  },
  image: {
    width: "100%",
    height: 350,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    objectFit: "cover",
  },
  nameAddress: {
    position: "absolute",
    bottom: 20,
    left: 0,
    paddingHorizontal: 30,
    zIndex: 2,
    display: "flex",
    gap: 2,
  },
  location: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  name: {
    fontFamily: "outfit-bold",
    fontSize: 25,
    color: "white",
  },
  address: {
    fontFamily: "outfit-medium",
    fontSize: 16,
    color: "white",
  },
});
