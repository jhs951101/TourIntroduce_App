import React, { useState, useContext, } from 'react';
import { StyleSheet, Image, Text, TextInput, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert, } from 'react-native';
import AppContext from '../../components/AppContext';
import axios from 'axios';

export default function SignUp({ navigation }) {

  const [username, SetUsername] = useState('');
  const [password, SetPassword] = useState('');
  const [name, SetName] = useState('');

  const myContext = useContext(AppContext);
  const commonstyles = require('../../styles/commonstyles');
  const popupstyles = require('../../styles/popupstyles');
  const formstyles = require('../../styles/formstyles');

  const signup = () => {
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
    else if(!name){
      Alert.alert('Error', '이름을 입력하십시오.', [
        {text: 'OK'}
      ]);
    }
    else{
      axios.post(myContext.domain + '/signup.php', {
        username, password, name
      }, {
        headers: { "Content-Type": 'application/json'}
      })
        .then(function (response) {
            if(response.data.success){
              Alert.alert('Message', '정상적으로 가입 되었습니다!', [
                {text: 'OK'}
              ]);
              navigation.goBack();
            }
            else{
              if(response.data.errmsg === 'duplicateId'){
                Alert.alert('Error', '이미 존재하는 아이디입니다.', [
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
            <View style={{marginTop: myContext.heightPercentage(10), flexDirection: 'row',}} >
              <Text style={[formstyles.text, textStyle(),]} >
                이름:
              </Text>
              <TextInput
                value={name}
                onChangeText={SetName}
                placeholder={"이름을 입력하십시오"}
                style={[formstyles.input, textInputStyle(),]}
              />
            </View>
          </View>
          <View style={{marginTop: myContext.heightPercentage(20),}} >
            <TouchableOpacity
              onPress={signup}
              style={[popupstyles.yesButton, buttonStyle(),]}
            >
              <Text style={[popupstyles.yesBtn_text, buttonTextStyle(),]} >
                회원가입
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