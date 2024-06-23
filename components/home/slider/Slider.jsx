import { db } from "@/configs/firebaseConfig";
import { Colors } from "@/constants/Colors";
import { collection, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

export default function Slider() {
  const [sliderList, setSliderList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSliderList();
  }, []);

  const getSliderList = async () => {
    setIsLoading(true);
    setSliderList([]);

    const q = query(collection(db, "Slider"));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) =>
      setSliderList((prev) => [...prev, doc.data()])
    );

    setIsLoading(false);
  };

  return (
    <View>
      <Text style={styles.heading}>#Special for you</Text>
      {isLoading ? <SliderLoader /> : <SliderContent sliderList={sliderList} />}
    </View>
  );
}

const SliderContent = ({ sliderList }) => (
  <FlatList
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    data={sliderList}
    renderItem={({ item, index }) => (
      <Image
        source={{ uri: item.imageUrl }}
        style={styles.sliderImage}
        key={index}
      />
    )}
    style={styles.sliderList}
  />
);

const SliderLoader = () => (
  <FlatList
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    data={Array.from({ length: 5 }, (_, index) => index)}
    renderItem={() => <View style={styles.loader} />}
    style={(styles.sliderImage, { width: "100%" })}
  />
);

const styles = StyleSheet.create({
  heading: {
    fontFamily: "outfit-bold",
    fontSize: 20,
    margin: 20,
    marginBottom: 10,
  },
  sliderList: {
    paddingLeft: 10,
  },
  sliderImage: {
    borderRadius: 20,
    width: 300,
    height: 150,
    objectFit: "cover",
    marginHorizontal: 10,
  },
  loader: {
    borderRadius: 20,
    width: 300,
    height: 150,
    objectFit: "cover",
    backgroundColor: Colors.gray,
    marginHorizontal: 10,
  },
});
