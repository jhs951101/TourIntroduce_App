import React, { useContext, } from 'react';
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity, Alert, } from 'react-native';
import AppContext from '../../components/AppContext';
import axios from 'axios';

export default function BucketList({ navigation }) {

  const myContext = useContext(AppContext);
  const commonstyles = require('../../styles/commonstyles');

  const deleteCart = (mid, key) => {
    axios.post(myContext.domain + '/deletebucket.php', {
      username: myContext.username,
      menuid: mid,
    }, {
      headers: {"Content-Type": 'application/json'}
    })
      .then(function (response) {
          if(response.data.success){
            myContext.deleteCart(key);
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

  const viewStyle = () => {
    return ({
      paddingHorizontal: myContext.widthPercentage(10),
      paddingVertical: myContext.heightPercentage(10),
    });
  }

  return (
    <View style={commonstyles.overall}>
      
      <View style={[{paddingHorizontal: myContext.widthPercentage(15), paddingVertical: myContext.heightPercentage(15),}, {flex: 1}]} >
        <View style={{borderBottomColor: '#E0E0E0', borderBottomWidth: 1}} ></View>
        <View >
          <FlatList
              style={{height: myContext.heightPercentage(450)}}
              data={myContext.cart}
              renderItem={({item}) => {
                  return (
                    <View>
                      <View
                          style={{flexDirection:'row', marginBottom: myContext.heightPercentage(10), alignItems: 'center',}}
                      >
                          <View style={[viewStyle(), {width: '35%',},]} >
                              <Image
                                  style={{width: '100%', height: myContext.heightPercentage(80), borderRadius: 10}}
                                  source={{uri: (item.imgurl == null && myContext.domain + '/images/menu/defaultimage1.png') || (!(item.imgurl == null) && item.imgurl)}}
                              />
                          </View>
                          <View style={[viewStyle(), {width: '65%',},]} >
                              <View style={{width: '100%', marginTop: myContext.heightPercentage(5), flexDirection: 'row'}} >
                                <View style={{width: '80%',}}>
                                  <Text style={{fontWeight: 'bold', textAlign: 'left', fontSize: myContext.fontPercentage(14),}} >
                                    {item.name}
                                  </Text>
                                </View>
                                <View style={{width: '20%'}}>
                                  <TouchableOpacity
                                    onPress={() => 
                                      Alert.alert('Confirm', '정말로 삭제하시겠습니까?',
                                      [
                                        {
                                          text: 'Cancel',
                                        },
                                        {
                                          text: 'OK',
                                          onPress: () => deleteCart(item.mid, item.key)
                                        },
                                      ])
                                    }
                                    style={{marginRight: myContext.widthPercentage(10)}} >
                                    <Text style={{fontSize: myContext.fontPercentage(14), textAlign: 'right', color: '#707276'}} >
                                      X
                                    </Text>
                                  </TouchableOpacity>
                                </View>
                              </View>
                              <View style={{flexDirection:'row', marginTop: myContext.heightPercentage(20),}} >
                                <Text style={{fontSize: myContext.fontPercentage(16), fontWeight: 'bold', color: '#4364BE'}}>
                                  ￦{item.price}
                                </Text>
                              </View>
                          </View>
                      </View>
                      <View style={{borderBottomColor: '#E0E0E0', borderBottomWidth: 1}} ></View>
                    </View>
                  )
              }}
          />
        </View>
      </View>

      <View style={{backgroundColor: '#3A65C5',}} >
        <View style={{alignItems: 'center', marginBottom: 10, marginTop: 10,}} >
            <View style={{flexDirection: 'row',}} >
              <Text style={{fontSize: myContext.fontPercentage(15), color: '#FFFFFF',}}>
                총
              </Text>
              <Text style={{fontSize: myContext.fontPercentage(20), fontWeight: 'bold', color: '#FFFFFF',}}>
                {" "}
                ￦{myContext.getTotalPrice()}
              </Text>
            </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    
});