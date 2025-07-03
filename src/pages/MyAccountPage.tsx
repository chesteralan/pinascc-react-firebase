import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

const MyAccountPage: React.FC = () => {
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (user) {
      const userDocRef = doc(db, "users", user.uid);
      getDoc(userDocRef).then((docSnap) => {
        if (docSnap.exists()) {
          const userData = docSnap.data();
          setName(userData.name);
          setAbout(userData.bio);
        }
      });
    }
  }, [user]);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (user) {
      const userDocRef = doc(db, "users", user.uid);
      try {
        await setDoc(userDocRef, { name, bio: about }, { merge: true });
        setMessage("Profile updated successfully!");
      } catch {
        setMessage("Error updating profile.");
      }
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <main className="w-full max-w-2xl p-8">
        <h1 className="text-4xl font-bold mb-2">My Account</h1>
        <p className="text-gray-600 mb-8">Manage your profile information.</p>

        {message && <p className="text-green-500 mb-4">{message}</p>}

        <form onSubmit={handleFormSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 font-bold">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="about" className="block mb-2 font-bold">
              About Me
            </label>
            <textarea
              id="about"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              maxLength={250}
              className="w-full p-3 border border-gray-300 rounded-lg resize-y min-h-[120px]"
            ></textarea>
            <div className="text-sm text-gray-600 text-right">
              {about.length} / 250
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-3 rounded-lg text-xl hover:bg-red-600"
          >
            Update Profile
          </button>
        </form>
      </main>
    </div>
  );
};

export default MyAccountPage;
