import { Routes, Route } from "react-router-dom";
import Cart from "./cartComponents/Cart";
import Header from "./Header"
import Home from "./homeComponents/Home";
import Login from "./Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useEffect } from "react";
import { useStateValue } from "../context/StateProvider";



function App() {
  const [{ user }, dispacher] = useStateValue();

  useEffect(() => {

    const unsubcribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispacher({
          type: "SET_USER",
          user: authUser,
        })
      } else {
        dispacher({
          type: "SET_USER",
          user: null,
        })
      }
    });

    return () => {
      unsubcribe();
    }

  }, []);

  // console.log("User is ->>", user);
  return (
    <>
      <Routes>
        <Route path="/Amazon-clone/login" element={<Login />} />
        <Route path="/Amazon-clone/" element={<><Header /><Home /></>} />
        <Route path="/Amazon-clone/cart" element={<><Header /><Cart /></>} />
      </Routes>
    </>
  );
}

export default App;
