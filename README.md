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
import navReducer from '../../slices/navSlice';

export const store = configureStore({
    reducer: {
        nav: navReducer,
    },
})

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
    travelTimeInformation: null
}

export const navSlice = createSlice({
    name: 'nav',
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

export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions;


// Selectors
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation

export default navSlice.reducer;
```

- finally our root file `App.js`

```js
//App.js
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

```

## Setting TailwindCss with our React native project
