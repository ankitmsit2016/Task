import React from 'react';
import {View,Text} from 'react-native';
import {Icon} from 'react-native-elements';

export default class FAQ extends React.Component{
  static navigationOptions={
    drawerIcon:(<Icon name='question-answer'/>)
  }
  render(){
    return(
      <Text>FAQ</Text>
    );
  }
}
