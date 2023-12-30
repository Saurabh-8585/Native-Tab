import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const userToken = await AsyncStorage.getItem('userToken');
        if (userToken) {
          // User is logged in
          setIsLoggedIn(true);
        } else {
          // No token found, user is not logged in
          setIsLoggedIn(false);
        }
      } catch (error) {
        // Handle AsyncStorage errors
        console.error('Error checking authentication status:', error);
        setIsLoggedIn(false);
      }
    };

    checkLoginStatus();
  }, []);

  const setLoggedOut = async () => {
    try {
      // Remove the token from AsyncStorage or perform any other logout actions
      await AsyncStorage.removeItem('userToken');
      setIsLoggedIn(false);
    } catch (error) {
      // Handle AsyncStorage errors
      console.error('Error logging out:', error);
    }
  };

  return { isLoggedIn, setLoggedOut };
};

export default useAuth;
