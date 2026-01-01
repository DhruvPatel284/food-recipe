// SafeScreen.jsx
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SafeScreen({ children }) {
  return (
    <SafeAreaView 
      style={{ flex: 1, backgroundColor: "white" }} 
      edges={["top", "bottom", "left", "right"]} // important for Android bottom buttons
    >
      {children}
    </SafeAreaView>
  );
}
