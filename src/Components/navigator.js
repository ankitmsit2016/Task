import React from 'react'
import {createDrawerNavigator,createStackNavigator,DrawerItems} from 'react-navigation'
import {Container,Content} from 'native-base'
import {Header,Icon} from 'react-native-elements'
import HomeScreen from '../Screens/HomeScreen'
import ProfileEditForm from '../Screens/ProfileEditForm'
import LoginScreen from '../Screens/LoginScreen'
import PaymentScreen from '../Screens/PaymentScreen'
import History from '../Screens/TransictionHistory'
import ReferAndEarn from '../Screens/ReferAndEarn'
import FAQ from '../Screens/FAQ'

const customDrawerContent=(props)=>{
  return(
  <Container>
    <Content>
      <Header
          leftComponent={<Icon  name='lock-outline' size={44} color='white'/>}
          centerComponent={{text:'inTrust', style:{color:'white',fontSize:28}}}
          backgroundColor='#29313d'
      />
        <DrawerItems {...props}/>
    </Content>
  </Container>
);
}

export const Drawer = createDrawerNavigator({
    Home:{screen:HomeScreen},
    EditProfile:{screen:ProfileEditForm},
    Payment:{screen:PaymentScreen},
    History:{screen:History},
    'Refer & Earn':{screen:ReferAndEarn},
    FAQ:{screen:FAQ},
},
  {
    initialRouteName:'Home',
    contentComponent:customDrawerContent,
    drawerOpenRoute:'openDrawer',
    drawerCloseRoute:'closeDrawer',
    drawerToggleRoute: 'toggleDrawer'
  }
);

export const AppNavigator=createStackNavigator({
    LogIn:{screen:LoginScreen},
    Drawer:{screen:Drawer}
},{headerMode:'none'});
