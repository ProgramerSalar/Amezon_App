import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Avatar, Button, TextInput} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/actions/userAction';
import { useMessageAndErrorUser } from '../../utils/hooks';

const Login = ({navigation}) => {

    // const navigation = useNavigation()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const dispatch = useDispatch()

  const submitHandler = () => {
    dispatch(login(email,password))


    // alert('hello wold');
  };
  useMessageAndErrorUser(navigation, dispatch, "home")


  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        padding:10,
        
      }}>

        

      <View style={{
        top:50
      }}>
        <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity onPress={submitHandler}>
          <Button style={{
            backgroundColor:'blue',
            margin:10,
            padding:10
          }}>Login</Button>
        </TouchableOpacity>
      </View>
      <View style={{
        margin:10,
        marginTop:10,
        top:50,
        flexDirection:'row',
        justifyContent:'space-between'
      }}>
      <TouchableOpacity onPress={() => navigation.navigate("signUp")}>
        <Text>SignUp?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("forgetPassword")}>
        <Text>ForgetPassword?</Text>
      </TouchableOpacity>

      </View>
     
      
    </View>
  );
};



export default Login;
