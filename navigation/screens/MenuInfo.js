import React, { useContext } from 'react';
import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import AppContext from '../../components/AppContext';
import axios from 'axios';

export default function MenuInfo({ route, navigation }) {

  const myContext = useContext(AppContext);
  const commonstyles = require('../../styles/commonstyles');
  const {
    id,
    name,
    price,
    importance,
    explanation,
    imgurl,
  } = route.params;

  const addCart = () => {
    if(myContext.username){
      var exist = false;

      for(var i=0; i<myContext.cart.length; i+=1){
        if(myContext.cart[i].mid == id){
          exist = true;
          break;
        }
      }

      if(exist){
        Alert.alert('Error', '이미 장바구니에 추가되었습니다.', [
          {text: 'OK'}
        ]);
      }
      else{
        axios.post(myContext.domain + '/addbucket.php', {
          username: myContext.username,
          menuid: id,
        }, {
          headers: {"Content-Type": 'application/json'}
        })
          .then(function (response) {
              if(response.data.success){
                myContext.addCart(id, name, price, imgurl);

                Alert.alert('Confirm', '장바구니로 이동하시겠습니까?',
                [
                  {
                    text: 'Cancel',
                  },
                  {
                    text: 'OK',
                    onPress: () => navigation.navigate('BucketList')
                  },
                ]);
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
    }
    else{
      Alert.alert('Confirm', '로그인이 필요합니다. 로그인 페이지로 이동하시겠습니까?',
      [
        {
          text: 'Cancel',
        },
        {
          text: 'OK',
          onPress: () => navigation.navigate('Login')
        },
      ]);
    }
  }

  return (
      <View style={commonstyles.overall}>
          <ImageBackground
            style={{width: '100%', height: myContext.heightPercentage(268), justifyContent: 'flex-end',}}
            source={{uri: (imgurl == null && myContext.domain + '/images/menu/defaultimage1.png') || (!(imgurl == null) && imgurl)}}
          >
            <View style={{marginVertical: myContext.heightPercentage(20), marginHorizontal: myContext.widthPercentage(20), }} >
                <View style={{flexDirection: 'row'}} >
                  {importance >= 1 &&
                  <Image
                    source={require("../../images/food/menu/staricon2.png")}
                  />}
                  <Text style={{marginLeft: myContext.widthPercentage(10), fontSize: myContext.fontPercentage(22), color: '#FFFFFF', fontWeight: 'bold',}} >
                    {name}
                  </Text>
                </View>
            </View>
          </ImageBackground>
          <View style={[{paddingHorizontal: myContext.widthPercentage(15), paddingVertical: myContext.heightPercentage(15), flex: 1}]} >
              <View >
                <Text style={{width: '100%', fontSize: myContext.fontPercentage(12)}}>
                    {explanation}
                </Text>
              </View>
          </View>

          <View style={{backgroundColor: '#FFFFFF',}} >
            <View style={{marginBottom: myContext.heightPercentage(25), marginTop: myContext.heightPercentage(20),}} >
              <View style={{width: '100%', alignItems: 'flex-end'}} >
                <View style={{flexDirection: 'row', marginRight: myContext.widthPercentage(20),}} >
                  <Text style={[styles.price, {fontSize: myContext.fontPercentage(18),}]} >Price{"  "}</Text>
                  <Text style={[styles.price, {fontSize: myContext.fontPercentage(18), fontWeight: 'bold',}]} >₩{price}</Text>
                </View>
              </View>
              <View style={{alignItems: 'center', marginTop: myContext.heightPercentage(15),}} >
                <TouchableOpacity
                  onPress={addCart}
                  style={{
                    width: '90%',
                    backgroundColor: "#3A65C5",
                    borderRadius: 30,
                    paddingHorizontal: myContext.widthPercentage(10),
                    paddingVertical: myContext.heightPercentage(10),
                  }}
                >
                  <Text style={{
                    fontSize: myContext.fontPercentage(16),
                    color: "#FFFFFF",
                    alignSelf: "center",
                  }} >
                    장바구니에 추가
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
      </View>
  );
}

const styles = StyleSheet.create({
    price: {
      color: '#3A65C5',
      textAlign: 'right',
    }
})