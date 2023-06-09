import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";
import { API_BASE_URL } from "../../utils/config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userToken, setUserToken] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const login = (email, password) => {
        console.log(`${API_BASE_URL}/login`);

        setIsLoading(true);
        // Call API login here
        fetch(`${API_BASE_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        })
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson);
                setUserToken(responseJson.token);
                AsyncStorage.setItem("userToken", responseJson.token);
                setIsLoading(false);
            }
            )
            .catch(error => console.log(`login error : ${error}`));
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