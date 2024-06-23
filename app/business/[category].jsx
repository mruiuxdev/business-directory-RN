import BusinessItem from "@/components/business/BusinessItem";
import BusinessLoader from "@/components/business/BusinessLoader";
import { db } from "@/configs/firebaseConfig";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function Category() {
  const navigation = useNavigation();
  const { category } = useLocalSearchParams();

  const [businessList, setBusinessList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    navigation.setOptions({ headerShown: true, headerTitle: category });

    getBusinessByCategory();
  }, []);

  const getBusinessByCategory = async () => {
    setIsLoading(true);
    setBusinessList([]);

    const q = query(
      collection(db, "Business"),
      where("category", "==", category)
    );
    const queySnapshot = await getDocs(q);

    queySnapshot.forEach((doc) =>
      setBusinessList((prev) => [...prev, { id: doc?.id, ...doc.data() }])
    );

    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Array.from({ length: 5 }, (_, index) => index)}
          renderItem={({ index }) => <BusinessLoader key={index} />}
        />
      ) : businessList.length > 0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          onRefresh={getBusinessByCategory}
          refreshing={isLoading}
          data={businessList}
          renderItem={({ item, index }) => (
            <BusinessItem business={item} key={index} />
          )}
        />
      ) : (
        <Text style={styles.noContent}>No Business Added</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  noContent: {
    fontFamily: "outfit-bold",
    fontSize: 20,
    textAlign: "center",
    padding: 50,
  },
});
