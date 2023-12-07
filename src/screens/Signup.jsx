import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Avatar, Button, TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { register } from '../redux/actions/userAction';
import { useMessageAndErrorUser } from '../../utils/hooks';

const Signup = ({route}) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigation = useNavigation();
  const [avatar, setAvatar] = useState(null)

  
  // const dispatch = useDispatch()
  // const submitHandler = () => {

  //   const myForm = new FormData()
  //   myForm.append("name", name)
  //   myForm.append("email", email)
  //   myForm.append("password", password)

  //   dispatch(register(myForm))
  //   console.log(dispatch(register(myForm)))
  //   console.log(myForm)


  // };
  // useMessageAndErrorUser(navigation, dispatch, "profile")


  const dispatch = useDispatch()
  const submitHandler = () => {

    const myForm = new FormData()
    myForm.append("name", name)
    myForm.append("email", email)
    myForm.append("password", password)
    
    dispatch(register(myForm))
    console.log(myForm)
  }


  // const loading = false
  useMessageAndErrorUser(navigation, dispatch, "home")

  

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        // margin:10,
        padding: 10,
      }}>

        {/* Image  */}
      {/* <View>
        <Avatar.Image
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
          }}
          size={80}
          source={{
            uri: avatar ? avatar : defaultImg,
          }}
        />
        <TouchableOpacity onPress={() => navigation.navigate('cameraComponent')}>
            <Button>change Photo</Button>
        </TouchableOpacity>
      </View> */}




      <View
        style={{
          top: 50,
        }}>
        <TextInput placeholder="Name" value={name} onChangeText={setName} />
        <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity onPress={submitHandler}>
          <Button
            style={{
              backgroundColor: 'blue',
              margin: 10,
              padding: 10,
            }}>
            SignUp
          </Button>
        </TouchableOpacity>
        <View
          style={{
            margin: 10,
            marginTop: 10,
            // top:50,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('login')}>
            <Text>Login?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('forgetPassword')}>
            <Text>ForgetPassword?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};


export const defaultImg = "https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png"


export default Signup;
