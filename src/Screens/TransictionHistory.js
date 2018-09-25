import React from 'react';
import {View,Text,ScrollView,Image,Picker} from 'react-native';
import {Header,Icon} from 'react-native-elements'

export default class History extends React.Component{
  static navigationOptions={
    drawerIcon:(<Icon name='history'/>)
  }
  constructor(props){
    super(props);
    this.state={
      orders:'',
      payables:'',
      payments:'',
      tickets:'',
      invoice:'',
      rating:''
    }
  }
  render(){
    return(
      <ScrollView>
      <Header
        centerComponent={{text:'History' ,style:{color:'white',fontSize:22}}}
        backgroundColor='#29313d'
      />
        <Image source={require('../assets/clock.png')} style={{width:150,height:150,alignSelf:'center'}}/>
        <View style={{marginLeft:10,height:60}}>
        <Picker
          selectedValue={this.state.orders}
          onValueChange={(itemValue, itemIndex) => this.setState({orders: itemValue})}>
          <Picker.Item label="Your Orders" value="none" />
          <Picker.Item label="JAN" value="1" />
          <Picker.Item label="FEB" value="2" />
          <Picker.Item label="MARCH" value="3" />
        </Picker>
        </View>

        <View style={{marginLeft:10,height:60}}>
        <Picker
          selectedValue={this.state.payables}
          onValueChange={(itemValue, itemIndex) => this.setState({payables: itemValue})}>
          <Picker.Item label="Payables" value="none" />
          <Picker.Item label="ICICI" value="1" />
          <Picker.Item label="SBI" value="2" />
          <Picker.Item label="OBC" value="3" />
        </Picker>
        </View>

        <View style={{marginLeft:10,height:60}}>
        <Picker
          selectedValue={this.state.savedCard}
          onValueChange={(itemValue, itemIndex) => this.setState({payments: itemValue})}>
          <Picker.Item label="Payments" value="none" />
          <Picker.Item label="Big Bazar" value="1" />
          <Picker.Item label="Metro" value="2" />
          <Picker.Item label="Others" value="3" />
        </Picker>
        </View>

        <View style={{marginLeft:10,height:60}}>
        <Picker
          selectedValue={this.state.savedCard}
          onValueChange={(itemValue, itemIndex) => this.setState({tickets: itemValue})}>
          <Picker.Item label="Tickets" value="none" />
          <Picker.Item label="ICICI" value="1" />
          <Picker.Item label="SBI" value="2" />
          <Picker.Item label="OBC" value="3" />
        </Picker>
        </View>

        <View style={{marginLeft:10,height:60}}>
        <Picker
          selectedValue={this.state.savedCard}
          onValueChange={(itemValue, itemIndex) => this.setState({invoice: itemValue})}>
          <Picker.Item label="Invoice" value="none" />
          <Picker.Item label="ICICI" value="1" />
          <Picker.Item label="SBI" value="2" />
          <Picker.Item label="OBC" value="3" />
        </Picker>
        </View>

        <View style={{marginLeft:10,height:60}}>
        <Picker
          selectedValue={this.state.savedCard}
          onValueChange={(itemValue, itemIndex) => this.setState({rating: itemValue})}>
          <Picker.Item label="Ratings" value="none" />
          <Picker.Item label="ICICI" value="1" />
          <Picker.Item label="SBI" value="2" />
          <Picker.Item label="OBC" value="3" />
        </Picker>
        </View>
      </ScrollView>
    );
  }
}
