import {
  Image,
  Linking,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ActionButtons({ website, address, name }) {
  const actions = [
    {
      id: 1,
      icon: require("@/assets/images/call.png"),
      url: `tel:79564231`,
      name: "Tel",
    },
    {
      id: 2,
      icon: require("@/assets/images/web.png"),
      url: website,
      name: "Website",
    },
    {
      id: 3,
      icon: require("@/assets/images/pin.png"),
      url: `https://www.google.com/maps/search/?api=1&query=${address}`,
      name: "Location",
    },
    {
      id: 4,
      icon: require("@/assets/images/share.png"),
      url: "",
      name: "Share",
    },
  ];

  const onPressHandler = (item) => {
    if (item.name === "Share") {
      Share.share({ message: `${name} address: ${address}` });
    } else {
      Linking.openURL(item?.url);
    }
  };

  return (
    <View style={styles.actions}>
      {actions.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => onPressHandler(item)}
        >
          <Image source={item?.icon} style={styles.icon} />
          <Text style={styles.name}>{item?.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  actions: {
    position: "relative",
    top: -30,
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: "white",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    zIndex: -11,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.05,
    shadowRadius: 30,
    elevation: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  icon: {
    width: 50,
    height: 50,
  },
  name: {
    fontFamily: "outfit-medium",
    textAlign: "center",
    marginTop: 5,
    fontSize: 14,
  },
});
