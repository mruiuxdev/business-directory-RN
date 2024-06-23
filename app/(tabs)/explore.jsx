import Category from "@/components/home/category/Category";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Colors } from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";

export default function explore() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Explore Business</Text>
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
      <View style={styles.category}>
        <Category
          explore={true}
          onCategorySelect={(category) => console.log(category)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  heading: {
    fontFamily: "outfit-bold",
    fontSize: 20,
    margin: 20,
    marginBottom: 10,
  },
  search: {
    marginHorizontal: 20,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    height: 50,
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  input: {
    width: "90%",
    height: 40,
    fontFamily: "outfit-regular",
    color: Colors.gray,
    fontSize: 16,
  },
  category: {
    marginTop: 30,
  },
});
