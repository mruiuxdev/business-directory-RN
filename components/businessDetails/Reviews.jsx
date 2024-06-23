import { Colors } from "@/constants/Colors";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "@/configs/firebaseConfig";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import { Rating } from "react-native-ratings";
import { useUser } from "@clerk/clerk-expo";

export default function Reviews({ business }) {
  const [rating, setRating] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [reviews, setReviews] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    if (business?.reviews) {
      setReviews(business.reviews);
    }
  }, [business]);

  const onSubmit = async () => {
    const newReview = {
      rating: rating,
      comment: userInput,
      username: user?.fullName,
      imageUrl: user?.imageUrl,
      email: user?.primaryEmailAddress?.emailAddress,
    };

    const docRef = doc(db, "Business", business?.id);

    await updateDoc(docRef, {
      reviews: arrayUnion(newReview),
    });

    Platform.OS === "android" &&
      ToastAndroid.show("Review added successfully", ToastAndroid.BOTTOM);

    setReviews((prevReviews) => [...prevReviews, newReview]);
    setUserInput("");
  };

  return (
    <View style={styles.parent}>
      <Text style={styles.heading}>Reviews</Text>
      <Rating
        onFinishRating={(value) => setRating(value)}
        style={{ paddingVertical: 10 }}
        imageSize={20}
        startingValue={rating}
      />
      <TextInput
        placeholder="Write your review..."
        style={styles.input}
        numberOfLines={4}
        placeholderTextColor={Colors.gray}
        onChangeText={(value) => setUserInput(value)}
        value={userInput}
        multiline={true}
      />
      <TouchableOpacity
        disabled={!userInput}
        style={styles.button}
        onPress={onSubmit}
      >
        <Text style={styles.submit}>Submit</Text>
      </TouchableOpacity>

      {reviews.length > 0 && (
        <View style={styles.reviews}>
          {reviews.map((item, index) => (
            <View key={index} style={styles.review}>
              <View style={styles.profile}>
                <View>
                  <Image
                    source={{ uri: item?.imageUrl }}
                    style={styles.profileImage}
                  />
                </View>
                <View style={styles.comment}>
                  <Text style={styles.name}>{item?.username}</Text>
                  <Text style={styles.text}>{item?.comment}</Text>
                  <Rating
                    imageSize={20}
                    readonly
                    startingValue={item?.rating}
                    style={{ alignItems: "flex-start", marginTop: 10 }}
                  />
                </View>
              </View>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    paddingHorizontal: 30,
    paddingVertical: 30,
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },
  heading: {
    fontFamily: "outfit-bold",
    fontSize: 20,
  },
  input: {
    fontFamily: "outfit-regular",
    color: Colors.gray,
    fontSize: 16,
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 15,
    textAlignVertical: "top",
    padding: 15,
    height: 100,
  },
  button: {
    backgroundColor: Colors.primary,
    marginTop: 20,
    padding: 15,
    borderRadius: 15,
  },
  submit: {
    color: "white",
    textAlign: "center",
    fontFamily: "outfit-medium",
    fontSize: 18,
  },
  reviews: { marginTop: 20, display: "flex", gap: 20 },
  review: {
    padding: 15,
    borderRadius: 15,
    borderColor: Colors.gray,
    borderWidth: 1,
    backgroundColor: "white",
  },
  profile: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  text: {
    fontFamily: "outfit-regular",
    marginTop: 5,
    fontSize: 14,
  },
  name: {
    fontFamily: "outfit-bold",
    fontSize: 16,
  },
  comment: {
    flex: 1,
  },
});
