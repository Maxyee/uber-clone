# Uber Clone

## Setting the development environment

- follow the instructions https://reactnative.dev/docs/environment-setup

```bash
npm install -g expo-cli
```

```bash
expo init AwesomeProject

cd AwesomeProject
npm start # you can also use: expo start
```

- after running the application just scan the QR from you phone
- before scan we need app installed into our phone. which is `expo-client`

## setting up the Redux

- we will follow this toolkit website https://redux-toolkit.js.org/introduction/getting-started

- we will follow the existing project approach

```bash
npm install @reduxjs/toolkit
```

```bash
npm install react-redux
```

- lets wrap up our project with the `provider`

- before doing this provider work we need to make a file called `store.js`

```bash
mkdir redux
mkdir redux/store
touch redux/store/store.js
```

- open that file called `store.js`

```js
import { configureStore } from "@reduxjs/toolkit";
import navReducer from "../../slices/navSlice";

export const store = configureStore({
  reducer: {
    nav: navReducer,
  },
});
```

- now we need to create that `navSlice.js` file

```bash
mkdir slices
touch slices/navSlice.js
```

- now put the code on that `navSlice.js` file

```js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState: initialState,
  reducer: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setTravelTimeInformation } =
  navSlice.actions;

// Selectors
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) =>
  state.nav.travelTimeInformation;

export default navSlice.reducer;
```

- finally our root file `App.js`

```js
//App.js
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Lets Build Our Uber Clone Application</Text>
        <StatusBar style="auto" />
      </View>
    </Provider>
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
```

## Making Home Screen

- lets create a folder called `screens` and a file `HomeScreen.js` into that folder

```bash
mkdir screens
touch screens/HomeScreen.js
```

- we need to install `tailwind react native classnames` library

```bash
npm install tailwind-react-native-classnames
```

- make a folder called components for our reusable components

```bash
mkdir components
touch components/NavOptions.js

```

- we need react native elements for interactive design

```bash
npm install react-native-elements
npm install react-native-vector-icons
npm install react-native-safe-area-context
```

- put the code to the `NavOptions.js` file

```js
//NavOptions.js
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },
];

const NavOptions = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
          <View>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              name="arrowright"
              color="white"
              type="antdesign"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
```

- put the code below to `HomeScreen.js`

```js
//HomeScreen.js
import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{ width: 100, height: 100, resizeMode: "contain" }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />

        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    color: "blue",
  },
});
```

- all dependencies into the root `App.js`

```js
//App.js
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import HomeScreen from "./screens/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <HomeScreen />
      </SafeAreaProvider>
    </Provider>
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
```

## Implement React Native Navigation

- lets create file `MapScreen.js`

```bash
touch screens/MapScreen.js
```

- for swtiching from one screen to another we need to install `react native navigation`

```bash
npm install @react-navigation/native
expo install react-native-screens react-native-safe-area-context
npm install @react-navigation/native-stack
```

```js
//App.js
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import HomeScreen from "./screens/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MapScreen from "./screens/MapScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MapScreen"
              component={MapScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
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
```

## Google Autocomplete Library

- we need to install `react native google places auto complete`

```bash
npm install react-native-google-places-autocomplete --save
```

- we need `google places api keys`

follow this link https://console.cloud.google.com/

- we need to enable places, directions, distance matrix API from google console

- then we have to create credentials and google will provide us `API KEY`

- make a `.env` file and store the key to that file

- now we need to install library for execute that `.env` file API Key

```bash
npm install react-native-dotenv
```

- lets add some `plugin` in `babel.config.js` file

```js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
        },
      ],
    ],
  };
};
```

- now open the file called `HomeScreen.js` file

```js
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";

<GooglePlacesAutocomplete
  placeholder="Where From?"
  nearbyPlacesAPI="GooglePlacesSearch"
  debounce={400}
/>;
```

- if we find any problem to start our project use below command for remove cache

```bash
expo r -c
```

- now lets finish up with some more code in `HomeScreen.js` file

```js
<GooglePlacesAutocomplete
  placeholder="Where From?"
  styles={{
    container: {
      flex: 0,
    },
    textInput: {
      fontSize: 18,
    },
  }}
  onPress={(data, details = null) => {
    console.log(data);
    console.log(details);
  }}
  fetchDetails={true}
  returnKeyType={"search"}
  enablePoweredByContainer={false}
  minLength={2}
  query={{
    key: GOOGLE_MAPS_APIKEY,
    language: "en",
  }}
  nearbyPlacesAPI="GooglePlacesSearch"
  debounce={400}
/>
```

- now we will store the location

```js
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";

const dispatch = useDispatch();


onPress={(data, details = null) => {
  dispatch(
    setOrigin({
      location: details.geometry.location,
      description: data.description,
    })
  );

  dispatch(setDestination(null));
}}
```

## Finish Up MapScreen
