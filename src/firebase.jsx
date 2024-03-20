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
  Timestamp,
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

export async function uploadProfilepic(file, currentUser, setLoading) {
  const fileRef = ref(storage, currentUser.uid + ".png");

  await uploadBytes(fileRef, file);

  const photoURL = await getDownloadURL(fileRef);

  try {
    await updateProfile(currentUser, { photoURL });
    setLoading(false);
  } catch (error) {
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
    const storageRef = ref(storage, currentUser.uid + "/" + file.name);
    await uploadBytes(storageRef, file);

    const imageURL = await getDownloadURL(storageRef);

    const imageRef = collection(db, "images");

    await addDoc(imageRef, {
      imageURL,
      imageHeading: imageName,
      imageDesc,
      uploader: currentUser.uid,
      uploaderImage: currentUser.photoURL,
      uploadAt: Date.now(),
    });

    setLoading(false);
  } catch (error) {
    console.error("Error uploading image and adding to Firestore:", error);
    setLoading(false);
    throw error;
  }
}
