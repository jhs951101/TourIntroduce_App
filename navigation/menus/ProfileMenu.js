import React, { useContext } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Alert, } from 'react-native';
import AppContext from '../../components/AppContext';

export default function ProfileMenu({ navigation }) {

  const myContext = useContext(AppContext);
  const commonstyles = require('../../styles/commonstyles');

  const logout = () => {
    Alert.alert('Confirm', '로그아웃 하시겠습니까?',
    [
      {
        text: 'Cancel',
      },
      {
        text: 'OK',
        onPress: () => myContext.logout()
      },
    ]);
  }

  const buttonStyle = () => {
    return ({
      paddingHorizontal: myContext.widthPercentage(15),
      paddingVertical: myContext.heightPercentage(15),
      borderBottomColor: '#E0E0E0',
      borderBottomWidth: 1,
      flexDirection: 'row',
    });
  }

  const textStyle = () => {
    return ({
      fontSize: myContext.fontPercentage(12),
      width: '50%',
    });
  }

  return (
      <View style={commonstyles.overall}>
        <View style={{flex: 1}} >
          <View style={{paddingHorizontal: myContext.widthPercentage(15), paddingVertical: myContext.heightPercentage(15),}} >
            <View style={{marginTop: myContext.heightPercentage(30),}} >
              <Image
                source={require("../../images/header/logo.png")}
              />
            </View>
            <View style={{marginTop: myContext.heightPercentage(10),}} >
              <View style={{borderBottomColor: '#E0E0E0', paddingVertical: myContext.heightPercentage(10),}} >
                <Text style={{fontSize: myContext.fontPercentage(14), fontWeight: 'bold',}} >
                  Profile
                </Text>
                {myContext.username !== null && 
                <Text style={{fontSize: myContext.fontPercentage(14),}} >
                  {myContext.name}님 환영합니다!
                </Text>}
              </View>
              <View style={{borderRadius: 10, backgroundColor: '#FFFFFF', elevation: 5,}} >

                {!myContext.username && 
                <TouchableOpacity
                  onPress={() => navigation.navigate("Login")}
                  style={buttonStyle()}
                >
                  <Text style={[textStyle(), {textAlign: 'left',},]} >
                    로그인
                  </Text>
                  <Text style={[textStyle(), {textAlign: 'right'},]} >
                    {">"}
                  </Text>
                </TouchableOpacity>}

                {myContext.username && 
                <TouchableOpacity
                  onPress={() => navigation.navigate("BucketList")}
                  style={buttonStyle()}
                >
                  <Text style={[textStyle(), {textAlign: 'left',},]} >
                    장바구니
                  </Text>
                  <Text style={[textStyle(), {textAlign: 'right'},]} >
                    {">"}
                  </Text>
                </TouchableOpacity>}
                
                {myContext.username && 
                <TouchableOpacity
                  onPress={logout}
                  style={buttonStyle()}
                >
                  <Text style={[textStyle(), {textAlign: 'left',},]} >
                    로그아웃
                  </Text>
                  <Text style={[textStyle(), {textAlign: 'right'},]} >
                    {">"}
                  </Text>
                </TouchableOpacity>}

              </View>
            </View>
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  
});