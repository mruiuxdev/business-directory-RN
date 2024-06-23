import CategoryItem from "@/components/home/category/CategoryItem";
import CategoryLoader from "@/components/home/category/CategoryLoader";
import { db } from "@/configs/firebaseConfig";
import { Colors } from "@/constants/Colors";
import { router, useRouter } from "expo-router";
import { collection, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function Category({ explore = false, onCategorySelect }) {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = async () => {
    setIsLoading(true);
    setCategoryList([]);

    const q = query(collection(db, "Category"));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) =>
      setCategoryList((prev) => [...prev, doc.data()])
    );

    setIsLoading(false);
  };

  const onPressCategoryHandler = (category) => {
    if (!explore) {
      router.push(`/business/${category.title}`);
    } else {
      onCategorySelect(category);
    }
  };

  return (
    <View>
      {!explore && (
        <View style={styles.headingLink}>
          <Text style={styles.heading}>Category</Text>
          <Text style={styles.link}>View All</Text>
        </View>
      )}
      {isLoading ? (
        <CategoryLoader />
      ) : (
        <CategoryContent
          categoryList={categoryList}
          onPressCategoryHandler={onPressCategoryHandler}
        />
      )}
    </View>
  );
}

const CategoryContent = ({ categoryList, onPressCategoryHandler }) => (
  <FlatList
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    data={categoryList}
    renderItem={({ item }) => (
      <CategoryItem
        category={item}
        onCategoryPress={(category) => onPressCategoryHandler(category)}
      />
    )}
    style={styles.categoryList}
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
  categoryList: {
    paddingLeft: 20,
  },
});
