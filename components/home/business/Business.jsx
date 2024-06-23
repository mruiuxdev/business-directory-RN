import BusinessItem from "@/components/home/business/BusinessItem";
import BusinessLoader from "@/components/home/business/BusinessLoader";
import { db } from "@/configs/firebaseConfig";
import { Colors } from "@/constants/Colors";
import { collection, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function Business() {
  const [businessList, setBusinessList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getBusinessList();
  }, []);

  const getBusinessList = async () => {
    setIsLoading(true);
    setBusinessList([]);

    const q = query(collection(db, "Business"));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) =>
      setBusinessList((prev) => [...prev, { id: doc.id, ...doc.data() }])
    );

    setIsLoading(false);
  };

  return (
    <View>
      <View style={styles.headingLink}>
        <Text style={styles.heading}>Popular Business</Text>
        <Text style={styles.link}>View All</Text>
      </View>
      {isLoading ? (
        <BusinessLoader />
      ) : (
        <BusinessList businessList={businessList} />
      )}
    </View>
  );
}

const BusinessList = ({ businessList }) => (
  <FlatList
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    data={businessList}
    renderItem={({ item, index }) => (
      <BusinessItem key={index} business={item} />
    )}
    style={styles.businessList}
  />
);

const styles = StyleSheet.create({
  headingLink: {
    margin: 20,
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  heading: {
    fontSize: 20,
    fontFamily: "outfit-bold",
  },
  link: {
    fontFamily: "outfit-regular",
    fontSize: 16,
    color: Colors.primary,
  },
  businessList: {
    paddingLeft: 10,
  },
});
