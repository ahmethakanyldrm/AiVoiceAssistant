import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Redirect } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function index() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isOnboarding, setIsOnboarding] = useState(true);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [loading, setLoading] = useState(true);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(()=> {
    const checkOnboarding = async () => {
      const isOnboarding = await AsyncStorage.getItem("onboarding")

      if (isOnboarding) {
        setIsOnboarding(false);
      }
      setLoading(false);
    }
    checkOnboarding();
  }, [])

  if(loading) return null

  return <Redirect href= {isOnboarding ? "/(routes)/onboarding" : "/(routes)/home"}/>
  
}