import About from "@/components/businessDetails/About";
import ActionButtons from "@/components/businessDetails/ActionButtons";
import Intro from "@/components/businessDetails/Intro";
import Reviews from "@/components/businessDetails/Reviews";
import { db } from "@/configs/firebaseConfig";
import { useLocalSearchParams } from "expo-router";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { ScrollView } from "react-native";

export default function BusinessId() {
  const { businessId } = useLocalSearchParams();

  const [businessDetails, setBusinessDetails] = useState(null);

  useEffect(() => {
    getBusinessDetails();
  }, []);

  const getBusinessDetails = async () => {
    const docRef = doc(db, "Business", businessId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setBusinessDetails({ id: docSnap.id, ...docSnap?.data() });
    } else {
      setBusinessDetails("No such document");
    }
  };

  return (
    <>
      <Intro
        image={businessDetails?.imageUrl}
        name={businessDetails?.name}
        address={businessDetails?.address}
      />
      <ActionButtons
        website={businessDetails?.website}
        address={businessDetails?.address}
        name={businessDetails?.name}
      />
      <ScrollView>
        <About about={businessDetails?.about} />
        <Reviews business={businessDetails} businessId={businessId} />
      </ScrollView>
    </>
  );
}
