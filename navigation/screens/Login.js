import React, { useState, useContext, } from 'react';
import { StyleSheet, Image, Text, TextInput, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert, } from 'react-native';
import AppContext from '../../components/AppContext';
import axios from 'axios';

export default function Login({ navigation }) {

  const [username, SetUsername] = useState('');
  const [password, SetPassword] = useState('');

  const myContext = useContext(AppContext);
  const commonstyles = require('../../styles/commonstyles');
  const popupstyles = require('../../styles/popupstyles');
  const formstyles = require('../../styles/formstyles');

  const login = () => {
    if(!username){
      Alert.alert('Error', '아이디를 입력하십시오.', [
        {text: 'OK'}
      ]);
    }
    else if(!password){
      Alert.alert('Error', '비밀번호를 입력하십시오.', [
        {text: 'OK'}
      ]);
    }
    else{
      axios.post(myContext.domain + '/login.php', {
        username, password
      }, {
        headers: { "Content-Type": 'application/json'}
      })
        .then(function (response) {
            if(response.data.success){
              const un = response.data.username;
              const name = response.data.name;

              axios.post(myContext.domain + '/getbucket.php', {
                username: un,
              }, {
                headers: { "Content-Type": 'application/json'}
              })
                .then(function (response) {
                  if(response.data.success){
                    myContext.SetUsername(un);
                    myContext.SetName(name);
                    myContext.SetCart(response.data.bucket);

                    Alert.alert('Message', name + '님 환영합니다!', [
                      {text: 'OK'}
                    ]);
                    navigation.goBack();
                  }
                  else{
                    myContext.showCommErrMsg();
                  }
                })
                .catch(function (error) {
                  console.log('Error: ' + error);
                  myContext.showCommErrMsg();
                });
            }
            else{
              if(response.data.errmsg === 'noUsername'){
                Alert.alert('Error', '존재하지 않는 아이디입니다.', [
                  {text: 'OK'}
                ]);
              }
              else if(response.data.errmsg === 'incorrectPassword'){
                Alert.alert('Error', '비밀번호가 일치하지 않습니다.', [
                  {text: 'OK'}
                ]);
              }
              else{
                myContext.showCommErrMsg();
              }
            }
        })
        .catch(function (error) {
            console.log('Error: ' + error);
            myContext.showCommErrMsg();
        });
    }
  }

  const textStyle = () => {
    return ({
      paddingHorizontal: myContext.widthPercentage(5),
      paddingVertical: myContext.heightPercentage(5),
      fontSize: myContext.fontPercentage(15),
      height: myContext.heightPercentage(30),
      width: myContext.widthPercentage(70),
    });
  }

  const textInputStyle = () => {
    return ({
      paddingHorizontal: myContext.widthPercentage(5),
      paddingVertical: myContext.heightPercentage(5),
      fontSize: myContext.fontPercentage(15),
      height: myContext.heightPercentage(30),
      width: myContext.widthPercentage(200),
    });
  }

  const buttonStyle = () => {
    return ({
      paddingHorizontal: myContext.widthPercentage(8),
      paddingVertical: myContext.heightPercentage(8),
      marginHorizontal: myContext.widthPercentage(5),
      marginVertical: myContext.heightPercentage(5),
      width: myContext.widthPercentage(120),
    });
  }

  const buttonTextStyle = () => {
    return ({
      fontSize: myContext.fontPercentage(15),
    });
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={[commonstyles.overall, commonstyles.overall_center]} >
        <View style={[{paddingHorizontal: myContext.widthPercentage(15), paddingVertical: myContext.heightPercentage(15),}, commonstyles.overall_center_inner]} >
          <View>
            <Image
              source={require("../../images/header/logo.png")}
            />
          </View>
          <View style={{marginTop: myContext.heightPercentage(15),}} >
            <View style={{marginTop: myContext.heightPercentage(10), flexDirection: 'row',}} >
              <Text style={[formstyles.text, textStyle(),]} >
                아이디:
              </Text>
              <TextInput
                placeholder={"아이디를 입력하십시오"}
                value={username}
                onChangeText={SetUsername}
                style={[formstyles.input, textInputStyle(),]}
              />
            </View>
            <View style={{marginTop: myContext.heightPercentage(10), flexDirection: 'row',}} >
              <Text style={[formstyles.text, textStyle(),]} >
                비밀번호:
              </Text>
              <TextInput
                placeholder={"비밀번호를 입력하십시오"}
                value={password}
                onChangeText={SetPassword}
                style={[formstyles.input, textInputStyle(),]}
                secureTextEntry={true}
              />
            </View>
          </View>
          <View style={{marginTop: myContext.heightPercentage(20), flexDirection: 'row',}} >
            <TouchableOpacity
              onPress={() => navigation.navigate("SignUp")}
              style={[popupstyles.noButton, buttonStyle(),]}
            >
              <Text style={[popupstyles.noBtn_text, buttonTextStyle(),]} >
                회원가입
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={login}
              style={[popupstyles.yesButton, buttonStyle(),]}
            >
              <Text style={[popupstyles.yesBtn_text, buttonTextStyle(),]} >
                로그인
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );  
}

const styles = StyleSheet.create({

});