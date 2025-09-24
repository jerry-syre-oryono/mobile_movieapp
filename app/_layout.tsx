// Import the Stack component from expo-router for navigation.
import { Stack } from "expo-router";
// Import the global CSS file for styling.
import './globals.css';

// Define the root layout component.
export default function RootLayout() {
  // The root layout uses a Stack navigator.
  return <Stack>
    <Stack.Screen name="index" options={{ headerShown: false }} />
    <Stack.Screen name="movies/[id]" options={{ headerShown: false }} />
  </Stack>;
}