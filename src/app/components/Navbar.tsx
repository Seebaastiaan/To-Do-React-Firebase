"use client";

import AddIcon from "@mui/icons-material/Add";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import {
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";
import Image from "next/image";
import { useEffect, useState } from "react";
import GoogleButton from "react-google-button";
import { auth, provider } from "../../firebaseConfig";
import Buttons from "./Buttons";
import BasicModal from "./Modalsito";

interface NavbarProps {
  addTask: (name: string, description: string) => void;
}

function Navbar({ addTask }: NavbarProps) {
  const [isLightMode, setIsLightMode] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      console.log("User info:", result.user);
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  const handleGoogleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error during sign-out:", error);
    }
  };

  const handleClick = () => {
    setIsLightMode(!isLightMode);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className="mx-36 mt-10 flex items-center justify-center gap-10">
      <Buttons
        text=""
        icon={isLightMode ? <LightModeIcon /> : <DarkModeIcon />}
        onClick={handleClick}
      />
      <Buttons text="Add task" icon={<AddIcon />} onClick={handleModalOpen} />
      <BasicModal
        open={isModalOpen}
        handleClose={handleModalClose}
        handleOpen={handleModalOpen}
        addTask={addTask}
      />

      {user ? (
        <div className="flex items-center gap-4">
          <Image
            src={user.photoURL || "/default-avatar.png"}
            alt="User Avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span>{user.displayName}</span>
          <button
            onClick={handleGoogleSignOut}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <GoogleButton onClick={handleGoogleSignIn} />
      )}
    </nav>
  );
}

export default Navbar;
