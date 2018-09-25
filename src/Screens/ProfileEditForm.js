import React from 'react';
import {View,Text,ScrollView} from 'react-native';
import {Icon ,FormInput,Button,Header } from 'react-native-elements';

export default class ProfileEditForm extends React.Component{
  static navigationOptions={
    drawerIcon:(<Icon name='edit'/>)
  }
  render(){
    return(
      <ScrollView >
      <Header
        centerComponent={{text:'Edit Profile' ,style:{color:'white',fontSize:22}}}
        backgroundColor='#29313d'
      />
      <FormInput
        placeholder='Full Name'
        containerStyle={{
          borderWidth:2,
          marginVertical:8
        }}
        underlineColorAndroid='transparent'
      />
      <FormInput
        placeholder='Address'
        containerStyle={{
          borderWidth:2,
          marginVertical:8
        }}
        underlineColorAndroid='transparent'
      />
      <FormInput
        placeholder='Address line two'
        containerStyle={{
          borderWidth:2,
          marginVertical:8
        }}
        underlineColorAndroid='transparent'
      />
      <FormInput
        placeholder='Town/City'
        containerStyle={{
          borderWidth:2,
          marginVertical:8
        }}
        underlineColorAndroid='transparent'
      />

      <FormInput
        placeholder='Postcode/Zip'
        containerStyle={{
          borderWidth:2,
          marginVertical:8
        }}
        underlineColorAndroid='transparent'
      />
      <FormInput
        placeholder='Phone'
        containerStyle={{
          borderWidth:2,
          marginVertical:8
        }}
        underlineColorAndroid='transparent'
      />
      <FormInput
        placeholder='Email Address'
        containerStyle={{
          borderWidth:2,
          marginVertical:8
        }}
        underlineColorAndroid='transparent'
      />
      <Button
        title='Save'
        buttonStyle={{
          backgroundColor:'#009900'
        }}
      />
      </ScrollView>
    );
  }
}
