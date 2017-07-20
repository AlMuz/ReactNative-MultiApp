import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  NavigatorIOS,
  Button,
  TextInput,
  Image,
  Alert,
  TouchableOpacity,
  SegmentedControlIOS,
  Slider,
  ActivityIndicator,
  Picker,
  Linking,
  ListView,
  FlatList
} from 'react-native';

export default class MyProject extends Component {

  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: FirstScreen,
          title: 'Multi App',
        }}
        style={{flex: 1}}
      />
    )
  }
}

class FirstScreen extends React.Component{
  RegScreen() {
    this.props.navigator.push({
      component: RegistationScreen,
      title: 'Registration'
    });
  }

  CalcScreen() {
    this.props.navigator.push({
      component: CalcScreen,
      title: 'Calculator'
    });
  }

  Lvscreen(){
    this.props.navigator.push({
      component: LVPage,
      title: 'Different types of views'
    });
  }

  FirstWork(){
    this.props.navigator.push({
      component: mfw,
      title: 'Unused components'
    });
  }

  render() {
    return (
      <ScrollView>
      <View>
        <View>
          <Text style= {[styles.style]}>
          Hey, check what i can!
          </Text>
        </View>
        <Button
          onPress={this.RegScreen.bind(this)}
          title="Registration Page with validation"
        />

        <Button
          onPress={this.CalcScreen.bind(this)}
          title="Calculator"
        />

        <Button
          onPress={this.Lvscreen.bind(this)}
          title="Different types of views"
        />

        <Button
          onPress={this.FirstWork.bind(this)}
          title="Unused components"
        />
        </View>
      </ScrollView>

    )
  }
}

class RegistationScreen extends React.Component{
  AccScreen() {
    this.props.navigator.push({
      component: LoginScreen,
      title: 'Account'
    });
  }

  constructor(props){
    super(props);
    this.state = {login: '',
      passw: '',
      passw2:'',
      captcha:''
    };
  }

  changeScreen() {
    this.props.navigator.push({
      component: LoginScreen,
      passProps: { usrnm: this.state.login,
                  passw: this.state.passw},
      title: 'Account'
    });
  }

  render() {
    return (
      <ScrollView>
        <View>
          <Text style= {[styles.style]}>Username</Text>
          <TextInput
            style={[styles.inputstyle]}
            onChangeText={(text) => this.setState({login: text})}

          />
          <Text style= {[styles.style]}>Password</Text>
          <TextInput
            style={[styles.inputstyle]}
            onChangeText={(text) => this.setState({passw: text})}

          />
          <Text style= {[styles.style]}>Repeat your password</Text>
          <TextInput
            style={[styles.inputstyle]}
            onChangeText={(text) => this.setState({passw2: text})}

          />
          <View style= {{justifyContent: 'center',alignItems:'center'}}>
          <Text style= {[styles.style]}>Captcha</Text>
            <Image source={require('./img/captcha1.gif')}
             style={{width: 320, height: 80}}/>
          </View>
          <TextInput
            style={[styles.inputstyle]}
            autoCapitalize={'none'}

            onChangeText={(text) => this.setState({captcha: text})}
          />
        </View>
        <View >
          <Button

            onPress = {  () => {
              if(this.state.login == "" ){
                Alert.alert(
                'Error - Username field is empty',
                'Fill this field!',
                [
                  {text: 'OK', onPress: () => console.log('Username was empty')},
                ]
              )
              }else if(this.state.passw == "" ){
                Alert.alert(
                  'Error - Password field is empty',
                'Fill this field!',
                [
                  {text: 'OK', onPress: () => console.log('Password was empty')},
                ]
              )
              }else if(this.state.passw2 == "" ){
                Alert.alert(
                  'Error - Repeat Password field is empty',
                'Fill this field!',
                [
                  {text: 'OK', onPress: () => console.log('Password was empty')},
                ]
              )
              }else if(this.state.captcha != "xjv999"){
                Alert.alert(
                  'Error - Captcha is not right',
                'Fill this field right!',
                [
                  {text: 'OK', onPress: () => console.log('Password was empty')},
                ]
              )
              }else if(this.state.captcha == "" ){
                Alert.alert(
                  'Error - Captcha field is empty',
                'Fill this field!',
                [
                  {text: 'OK', onPress: () => console.log('Password was empty')},
                ]
              )
              }else if(this.state.passw != this.state.passw2 ){
                Alert.alert(
                  'Error - Entered passwords are not the same',
                'Try again',
                [
                  {text: 'OK', onPress: () => console.log('Password was empty')},
                ]
              )
              }else{
                this.changeScreen()
              }
            }
        }
            title="Register"
          />
        </View>
      </ScrollView>
    );
  }
}

class LoginScreen extends React.Component {

  moveBack() {
    this.props.navigator.pop();
  }

  render() {
    return (
      <ScrollView >
        <Text style= {[styles.style]}>Hello, {this.props.usrnm}</Text>
        <Text style= {[styles.style]}>Your password is {this.props.passw}</Text>
        <Text style= {[styles.style]}>It is you! &dArr; </Text>
        <TouchableOpacity onPress={() => Linking.openURL('https://9gag.com')}>
          <View style= {{justifyContent: 'center',alignItems:'center'}}>
            <Image source={require('./img/you.gif')}
             style={{width: 200, height: 200}}/>
          </View>
        </TouchableOpacity>
        <Text style= {[styles.style]}>Press on me! &uArr; </Text>
        <Text style= {[styles.style]}>&spades; Just a joke &spades; </Text>
      </ScrollView>
    )
  }
}

class CalcScreen extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      FirstNumber: 0,
      SecondNumber: 0
    };
  }

  changeScreen() {
    this.props.navigator.push({
      title: 'Calculator'
    });
  }

  moveBack() {
    this.props.navigator.pop();
  }

  render() {
    const plus = this.state.FirstNumber+this.state.SecondNumber;
    return (
      <ScrollView >
        <Text> </Text>
        <View style={{borderWidth: 3,
        borderRadius: 30,
        borderColor: 'black',
        }}>
          <Text style= {[styles.calcstyle]}>First Number</Text>
          <TextInput
            style={[styles.inputstyle]}
            keyboardType='numeric'
            onChangeText={(Number) => this.setState({FirstNumber: parseInt(Number)})}
          />
          <Text style= {[styles.calcstyle]}>Second Number</Text>
          <TextInput
            style={[styles.inputstyle]}
            keyboardType='numeric'
            onChangeText={(Number) => this.setState({SecondNumber: parseInt(Number)})}
          />
          <Text style= {[styles.calcstyle]}> Addition (+) </Text>
          <Text style= {[styles.calcstyle]}>{plus}</Text>
          <Text style= {[styles.calcstyle]}> Substraction (-) </Text>
          <Text style= {[styles.calcstyle]}>{this.state.FirstNumber-this.state.SecondNumber}</Text>
          <Text style= {[styles.calcstyle]}> Multiplication (*) </Text>
          <Text style= {[styles.calcstyle]}>{this.state.FirstNumber*this.state.SecondNumber}</Text>
          <Text style= {[styles.calcstyle]}> Division (/) </Text>
          <Text style= {[styles.calcstyle]}>{this.state.FirstNumber/this.state.SecondNumber}</Text>
        </View>
      </ScrollView>
    )
  }
}

class LVPage extends React.Component{
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['https://9gag.com/', 'http://pikabu.ru/']),
    };
  }
  render(){
    return(
      <ScrollView>
        <View>
          <Text style= {[styles.style]}>
            ListView
          </Text>
          <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text style={{ fontSize: 20,textAlign:'center'}} >{rowData}</Text>}
          />
          <Text style={{textAlign:'center',marginTop:10, fontSize: 20}}>Outdated &uArr;</Text>
          <Text style={{textAlign:'center', fontSize: 20}}> It takes too much code space and it is hard to make hyperlink with data from array.</Text>
          <Text style={{textAlign:'center', fontSize: 20}}>To use it, you must write data in constructor</Text>
          <Text style={{textAlign:'center', fontSize: 20}}> Better to use FlatList &dArr;</Text>
        </View>
        <View>
            <Text style= {[styles.style]}>
              FlatList
            </Text>
            <Text style= {{textAlign:'center', fontSize: 20}}>
              Some sites
            </Text>
            <FlatList
              data={[
                {key: 'https://facebook.github.io/react-native/'},
                {key: 'https://www.google.com/'},
                {key: 'https://9gag.com/'},
                {key: 'http://pikabu.ru/'},

              ]}
              renderItem={({item}) =>
              <Text style={{ fontSize: 20,textAlign:'center',textDecorationLine:'underline', textDecorationColor:'blue'}} onPress={() => Linking.openURL(item.key)}
              >{item.key}</Text>}
            />
            <Text style={{textAlign:'center',marginTop:10, fontSize: 20}}>To use it, you must write data in FlatList, it is easier.</Text>
        </View>
      </ScrollView>
    )
  }
}

class mfw extends React.Component{
  render(){
    return(
       <ScrollView >
        <Text style= {[styles.style]}>SegmentedControl </Text>
         <SegmentedControlIOS
           values={['To be', 'Not to be']}
           selectedIndex={0}
         />

         <Text style= {[styles.style]}>Slider </Text>
         <Slider />
         <Text style= {[styles.style]}>ActivityIndicator</Text>
         <ActivityIndicator
         color='pink'
         size='large'
         />
         <Text style= {[styles.style]}>Picker</Text>
         <Picker selectedValue={'js'}>
           <Picker.Item label="Java" value="java" />
           <Picker.Item label="HTML" value="html" />
           <Picker.Item label="JavaScript" value="js" />
           <Picker.Item label="PHP" value="php" />
           <Picker.Item label="VBA" value="vba" />
           <Picker.Item label="C++" value="C++" />
         </Picker>

       </ScrollView>

    )
  }
}
const styles = StyleSheet.create({
  style: {
    marginTop: 20, textAlign:'center', marginBottom:10,fontSize:25
  },

  calcstyle:{
    marginTop: 20, textAlign:'center', marginBottom:10
  },

  inputstyle:   {
    height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 20, width: 305, marginLeft: 35, paddingLeft: 10
  },
  bts: {
    backgroundColor:'green',
    paddingTop:30,
    justifyContent: 'center',
    alignItems:'center'
  }

});

AppRegistry.registerComponent('MyProject', () => MyProject);
