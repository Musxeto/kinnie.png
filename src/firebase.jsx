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
  serverTimestamp,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4OBDEjmdpObLnT-erINYBh_xK3QOff9A",
  authDomain: "kinnie-cd8ed.firebaseapp.com",
  projectId: "kinnie-cd8ed",
  storageBucket: "kinnie-cd8ed.appspot.com",
  messagingSenderId: "204157949502",
  appId: "1:204157949502:web:e21a960880a21ac781236f",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage();
const db = getFirestore();

export { auth };
export { db };
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
    const imageRef = collection(db, "images");
    const uploadTime = serverTimestamp(); // Timestamp of upload time
    await addDoc(imageRef, {
      imageURL,
      imageHeading: imageName,
      imageDesc,
      uploader: currentUser.uid,
      uploadTime,
    });

    // Set loading to false after successful upload
    setLoading(false);
  } catch (error) {
    // Handle any errors
    console.error("Error uploading image and adding to Firestore:", error);
    setLoading(false);
    throw error; // Re-throw the error to be handled in the component
  }
}
