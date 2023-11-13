import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Navigation from "./navigation";

export default function App() {
  return (
    <SafeAreaView className="flex-1">
      <Navigation />
    </SafeAreaView>
  );
}
