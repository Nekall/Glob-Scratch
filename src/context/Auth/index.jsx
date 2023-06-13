import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";
import { API_BASE_URL } from "../../utils/config";
import { Toast } from 'toastify-react-native';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userToken, setUserToken] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
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
                if (responseJson.success) {
                    setUserToken(responseJson.token);
                    setUserInfo(responseJson.user);
                    Toast.success("Connecté avec succès");
                    AsyncStorage.setItem("userToken", responseJson.token);
                    AsyncStorage.setItem("userInfo", JSON.stringify(responseJson.user));
                } else {
                    setUserToken(null);
                    setUserInfo(null);
                    AsyncStorage.removeItem("userToken");
                    Toast.error(responseJson.message);

                }
                setIsLoading(false);
            }
            )
            .catch(error => console.log(`login error : ${error}`));
    }

    const updateUser = (user) => {
        const { firstname, lastname, password, email, country, franceDpt } = user;
        fetch(`${API_BASE_URL}/user`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${userToken}`
            },
            body: JSON.stringify({
                firstname,
                lastname,
                password,
                email,
                country,
                franceDpt
            })
        })
            .then(response => response.json())
            .then(responseJson => {
                if (responseJson.success) {
                    setUserInfo(responseJson.user);
                    AsyncStorage.setItem("userInfo", JSON.stringify(responseJson.user));
                } else {
                    Toast.error(responseJson.message);
                }
            })
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
            let userInfo = await AsyncStorage.getItem("userInfo");
            let userToken = await AsyncStorage.getItem("userToken");

            userInfo = JSON.parse(userInfo);

            if (userInfo) {
                setUserToken(userToken);
                setUserInfo(userInfo);
            }

            setIsLoading(false);
        } catch (error) {
            console.log(`isAuthenticated error : ${error}`);
        }
    }

    useEffect(() => {
        isAuthenticated();
    }, [])

    return (
        <AuthContext.Provider value={{ login, logout, userToken, isLoading, userInfo, updateUser }}>
            {children}
        </AuthContext.Provider>
    )
}