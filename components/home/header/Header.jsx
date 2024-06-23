import { Colors } from "@/constants/Colors";
import { useUser } from "@clerk/clerk-expo";
import { AntDesign } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";

export default function Header() {
  const { user } = useUser();

  return (
    <View style={styles.parent}>
      <View style={styles.container}>
        <View>
          <Image source={{ uri: user?.imageUrl }} style={styles.profileImage} />
        </View>
        <View>
          <Text style={styles.text}>Welcome,</Text>
          <Text style={(styles.text, styles.name)}>{user?.fullName}</Text>
        </View>
      </View>
      <View style={styles.search}>
        <AntDesign
          name="search1"
          size={30}
          style={styles.iconSearch}
          color={Colors.primary}
        />
        <TextInput
          placeholder="Search..."
          placeholderTextColor={Colors.gray}
          style={styles.input}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: Colors.primary,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "white",
  },
  text: {
    fontFamily: "outfit-medium",
    color: "white",
  },
  name: {
    fontFamily: "outfit-bold",
    fontSize: 18,
    color: "white",
  },
  search: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    height: 50,
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "90%",
    height: 40,
    fontFamily: "outfit-regular",
    color: Colors.gray,
    fontSize: 16,
  },
});
