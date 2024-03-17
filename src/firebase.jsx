import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getStorage, ref, uploadBytes } from "firebase/storage";
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

export { auth };

//storage

export async function uploadProfilepic(file, currentUser, setLoading) {
  const fileRef = ref(storage, currentUser.uid + ".png");

  const snapshot = await uploadBytes(fileRef, file);
}
