import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NativeBaseProvider, Box, Text} from 'native-base';
import {theme} from "./theme";
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import {Provider} from "react-redux";
import {store} from "./redux/store";

const Stack = createStackNavigator();


export default function App() {
    return (
        <Provider store={store}>
        <NativeBaseProvider theme={theme}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </NativeBaseProvider>
        </Provider>
    );
}


const styles = StyleSheet.create({
    container: {}
});










import axios from "axios";
import Constants from 'expo-constants';

const axiosInstance = axios.create({
    baseURL: Constants.manifest.extra.production ? Constants.manifest.extra.URL : Constants.manifest.extra.URL_DEV,
    headers: {
        Accept: "application/json",
        Platform: 'app-partner'
    }
});
axiosInstance.interceptors.request.use(async (request) => {
    return request;
}, (error) => {
    return Promise.reject(error.response)
})

axiosInstance.interceptors.response.use((response) => {
    return response;
}, (error) => {
    return Promise.reject(error.response)
})

export default axiosInstance;
