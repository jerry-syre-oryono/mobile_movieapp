// Import necessary components from React Native.
import { Text, View } from "react-native";

// Define the main component for the index screen.
export default function Index() {
  return (
    // Use a View as a container.
    // The `className` prop applies Tailwind CSS classes for styling.
    // `flex-1`: Makes the view take up all available space.
    // `justify-center`: Centers children vertically.
    // `items-center`: Centers children horizontally.
    <View
      className="flex-1 justify-center items-center"
    >
      {/* Display a title for the app. */}
      <Text className="text-5xl font-bold text-accent">Movie App</Text>
    
    </View>
  );
}