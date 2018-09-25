import React from 'react';
import {View,Text,ImageBackground} from 'react-native';
import {Header,Icon} from 'react-native-elements'


export default class HomeScreen extends React.Component{
  static navigationOptions={
    drawerIcon:(<Icon name='home'/>)
  }
  render(){
    return(
      <View>
        <Header

          leftComponent={<Icon  name='menu' size={34} onPress={()=>{this.props.navigation.openDrawer()}}/>}
          centerComponent={{text:'inTrust', style:{color:'white',fontSize:22}}}
          backgroundColor='#f70931'
          placement='left'
          />
          <ImageBackground source={require('../assets/ManCrateOpening.png')} style={{width: '100%', height: '100%'}}>
            <Text style={{fontSize:40,color:'#29313d',display:'flex',alignSelf:'center',paddingTop:'45%'}}>Get Started</Text>
          </ImageBackground>
      </View>
    );
  }
}
