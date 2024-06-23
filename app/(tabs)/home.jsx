import Category from "@/components/home/category/Category";
import Header from "@/components/home/header/Header";
import Slider from "@/components/home/slider/Slider";
import Business from "@/components/home/business/Business";
import { ScrollView, View } from "react-native";

export default function home() {
  return (
    <>
      <Header />
      <ScrollView>
        <Slider />
        <Category />
        <Business />
        <View style={{ height: 50 }}></View>
      </ScrollView>
    </>
  );
}
