import React from 'react';
import {View,Text,ScrollView} from 'react-native';
import {Icon ,FormInput,Button } from 'react-native-elements';

export default class Login extends React.Component{
  loginToApp(){
    this.props.navigation.navigate('Drawer');
  }
    render(){
      return(
        <ScrollView>
          <Icon name='lock-outline' size={100} />
          <Text style={{fontSize:30,color:'#003366',alignSelf:'center'}}>in<Text style={{fontSize:30,fontWeight:'bold',color:'#003366'}}>trust</Text></Text>
          <FormInput
            placeholder='Username'
            containerStyle={{
              borderWidth:2,
              borderRadius:5,
              marginVertical:'3%'
            }}
            underlineColorAndroid='transparent'
          />
          <FormInput
            placeholder='Password'
            containerStyle={{
              borderWidth:2,
              borderRadius:5,
              marginVertical:'5%'
            }}
            underlineColorAndroid='transparent'
          />
          <Button
            title='Login'
            onPress={this.loginToApp.bind(this)}
            buttonStyle={{
              borderRadius:5,
              backgroundColor:'#ff9900',
            }}
          />
          <Text style={{fontWeight:'bold',fontSize:20,alignSelf:'center',paddingVertical:'5%'}}>OR</Text>
          <Button
            title='Facebook Login'
            buttonStyle={{
              borderRadius:5,
              backgroundColor:'#3366cc'
            }}
          />
          <Text style={{fontWeight:'bold',fontSize:18,alignSelf:'center',paddingVertical:'5%'}}>Register for a new account</Text>
        </ScrollView>
      );
    }
}
