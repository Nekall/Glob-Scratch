import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userToken, setUserToken] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const login = () => {
        setIsLoading(true);
        // Call API login here
        setUserToken("token here");
        AsyncStorage.setItem("userToken", "token here");
        setIsLoading(false);
    }

    const logout = () => {
        setIsLoading(true);
        setUserToken(null);
        AsyncStorage.removeItem("userToken");
        setIsLoading(false);
    }

    const isAuthenticated = async () => {
        try {
            setIsLoading(true);
            let userToken = await AsyncStorage.getItem("userToken");
            setUserToken(userToken);
            setIsLoading(false);
        } catch (error) {
            console.log(`isAuthenticated error : ${error}`);
        }
    }

    useEffect(() => {
        isAuthenticated();
    }, [])

    return (
        <AuthContext.Provider value={{ login, logout, userToken, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}