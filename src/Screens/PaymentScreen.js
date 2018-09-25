import React from 'react';
import {View,Text,ScrollView,Image,Modal,Picker} from 'react-native';
import {Icon ,FormInput,Button,Header } from 'react-native-elements';

export default class PaymentScreen extends React.Component{
  static navigationOptions={
    drawerIcon:(<Icon name='payment'/>)
  }
  constructor(props){
    super(props);
    this.state={
      savedCard:'',
      mobileWallets:''
    }
  }
  render(){
    return(
      <ScrollView>
        <Header
          centerComponent={{text:'Payments' ,style:{color:'white',fontSize:22}}}
          backgroundColor='#29313d'
        />
        <View>
        <Image
          source={require('../assets/payment.jpg')}
          style={{width:150,height:120,alignSelf:'center'}}
        />
        <View style={{marginLeft:10,height:60}}>
        <Picker
          selectedValue={this.state.savedCard}
          onValueChange={(itemValue, itemIndex) => this.setState({savedCard: itemValue})}>
          <Picker.Item label="saved Cards" value="none" />
          <Picker.Item label="ICICI" value="1" />
          <Picker.Item label="SBI" value="2" />
          <Picker.Item label="OBC" value="3" />
        </Picker>
        </View>

        <View style={{marginLeft:10,height:60}}>
        <Picker
          selectedValue={this.state.mobileWallets}
          onValueChange={(itemValue, itemIndex) => this.setState({mobileWallets: itemValue})}>
          <Picker.Item label="Mobile Wallets" value="none" />
          <Picker.Item label="Phone Pay" value="1" />
          <Picker.Item label="Paytm" value="2" />
          <Picker.Item label="BHIM" value="3" />
        </Picker>
        </View>
            <Button
              title='Intrust Account Balance'
              buttonStyle={{
                backgroundColor:'#A3A0A0',
              }}
            />
        <View style={{display:'flex',flexDirection:'row', justifyContent:'space-around',paddingTop:20}}>
            <Button
              title='View Balance'
              size='medium'
              buttonStyle={{
                backgroundColor:'#A3A0A0',
                width:130
              }}
            />
            <Button
              title='Add Balance'
              icon={{
                     name: 'add',
                     size: 15,
                     color: 'red'
                   }}

              buttonStyle={{
                backgroundColor:'#A3A0A0',
              }}
            />
        </View>
  
        </View>
      </ScrollView>
    );
  }
}
