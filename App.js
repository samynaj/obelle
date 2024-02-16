import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import OnboardingScreen from "./screens/OnboardingScreen";
import Slider from "./screens/Slider";
import Form from "./screens/Form";
import FAQScreen from "./screens/FAQScreen";
import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator();
export default function App() {
  const [loaded] = useFonts({
    Pacifico: require("./assets/fonts/Pacifico-Regular.ttf"),
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    // <View>
    //   <Text>hello height</Text>
    // </View>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={"Onboarding"} component={OnboardingScreen} />
        <Stack.Screen name={"Slider"} component={Slider} />
        <Stack.Screen name={"Form"} component={Form} />
        <Stack.Screen name={"FAQ"} component={FAQScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
