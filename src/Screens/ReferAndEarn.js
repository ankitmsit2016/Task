import React from 'react';
import {View,Text,ScrollView,Image} from 'react-native';
import {Header,Button,Icon} from 'react-native-elements'

export default class ReferAndEarn extends React.Component{
  static navigationOptions={
    drawerIcon:(<Icon name='send'/>)
  }
  render(){
    return(
      <ScrollView>
      <Header
        centerComponent={{text:'Refer & Earn' ,style:{color:'white',fontSize:22}}}
        backgroundColor='#29313d'
      />
      <Image source={require('../assets/referAfriend.png')}
              style={{width:250,height:120,alignSelf:'center'}}
      />
      <View style={{height:40,backgroundColor:'#E7E1E0',marginTop:20}}>
        <Text style={{alignSelf:'center',fontSize:20}}>Your Refferal Code</Text>
      </View>
      <Text style={{alignSelf:'center',fontSize:26,marginTop:30}}>JQ4INT</Text>
      <Button
        title='Share'
        buttonStyle={{
          marginTop:40,
          backgroundColor:'#29313d'
        }}
      />
      </ScrollView>
    );
  }
}
