import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

import {
  Firestore,
  getFirestore,
  addDoc,
  getDoc,
  collection,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCFgI55Gk39pY0ald9ph0Nhkltn9T9KBrI",
  authDomain: "dotpng-baadf.firebaseapp.com",
  projectId: "dotpng-baadf",
  storageBucket: "dotpng-baadf.appspot.com",
  messagingSenderId: "473340246999",
  appId: "1:473340246999:web:64b22a4018d353e0ad2992",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage();
const db = getFirestore();

export { auth };

//storage

export async function uploadProfilepic(file, currentUser, setLoading) {
  const fileRef = ref(storage, currentUser.uid + ".png");

  await uploadBytes(fileRef, file); // Wait for the upload to complete

  const photoURL = await getDownloadURL(fileRef); // Get the download URL

  try {
    await updateProfile(currentUser, { photoURL });
    setLoading(false);
  } catch (error) {
    // Handle any errors with updating the profile
    console.error("Error updating profile:", error);
    setLoading(false);
  }
}
// Function to upload image to Firebase Storage and add its data to Firestore
export async function uploadImageAndAddToFirestore(
  file,
  currentUser,
  setLoading,
  imageName,
  imageDesc
) {
  try {
    // Upload image to Firebase Storage
    const storageRef = ref(storage, currentUser.uid + "/" + file.name);
    await uploadBytes(storageRef, file);

    // Get the download URL of the uploaded image
    const imageURL = await getDownloadURL(storageRef);

    // Add image data to Firestore
    await addDoc(collection(db, "images"), {
      imageURL,
      imageName,
      imageDesc,
    });

    setLoading(false); // Set loading to false after successful upload
  } catch (error) {
    console.error("Error uploading image and adding to Firestore:", error);
    setLoading(false);
    throw error;
  }
}
