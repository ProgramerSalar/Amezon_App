import { View, Text } from 'react-native'
import React, {useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Toast from 'react-native-toast-message'
import Home from './src/screens/Home'
import Login from './src/screens/Login'
import Signup from './src/screens/Signup'
import CameraComponent from './src/screens/CameraComponent'









const Main = () => {


 


  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home' screenOptions={{ headerShown: false }}>
        <Stack.Group>
          <Stack.Screen name='home' component={Home} />
          <Stack.Screen name='login' component={Login} />
          <Stack.Screen name='signUp' component={Signup} />
          <Stack.Screen name='cameraComponent' component={CameraComponent} />
        </Stack.Group>
      </Stack.Navigator>

      <Toast position='bottom' topOffset={50} />
    </NavigationContainer>
    
  )
}

export default Main