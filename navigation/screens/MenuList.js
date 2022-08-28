import React, { useContext } from 'react';
import { StyleSheet, View, Text, Image, ImageBackground, FlatList, TouchableOpacity } from 'react-native';
import AppContext from '../../components/AppContext';

export default function MenuList({ route, navigation }) {

  const myContext = useContext(AppContext);
  const commonstyles = require('../../styles/commonstyles');
  const {
    name,
    score,
    scorecount,
    time,
    phone,
    address,
    imgurl,
    menus,
  } = route.params;

  const itemStyle = () => {
    return ({
      paddingHorizontal: myContext.widthPercentage(8),
      paddingVertical: myContext.heightPercentage(8),
    });
  }

  return (
      <View style={commonstyles.overall}>
          
          <Image
            style={{width: '100%', height: myContext.heightPercentage(198),}}
            source={{uri: (imgurl == null && myContext.domain + '/images/defaultimage.png') || (!(imgurl == null) && imgurl)}}
          />
          <View style={{paddingHorizontal: myContext.widthPercentage(15), paddingVertical: myContext.heightPercentage(15),}} >
              <View style={{marginTop: myContext.heightPercentage(-45), paddingHorizontal: myContext.widthPercentage(10), paddingVertical: myContext.heightPercentage(10), backgroundColor: '#FFFFFF', borderRadius: 10, elevation: 5}} >
                  <View>
                    <Text style={{width: '100%', fontWeight: 'bold', fontSize: myContext.fontPercentage(22)}}>
                      {name}
                    </Text>
                  </View>
                  <View style={{marginTop: myContext.heightPercentage(5), flexDirection: 'row',}} >
                    <Text style={{marginRight: myContext.widthPercentage(5), fontSize: myContext.fontPercentage(12), color: '#FBCB23'}}>
                      {score >= 1 && "★"}{!(score >= 1) && "☆"}
                      {score >= 2 && "★"}{!(score >= 2) && "☆"}
                      {score >= 3 && "★"}{!(score >= 3) && "☆"}
                      {score >= 4 && "★"}{!(score >= 4) && "☆"}
                      {score >= 5 && "★"}{!(score >= 5) && "☆"}
                    </Text>
                    <Text style={{fontSize: myContext.fontPercentage(12), color: '#FBCB23'}}>
                      ({scorecount})
                    </Text>
                  </View>
                  <View style={{marginTop: myContext.heightPercentage(20), flexDirection: 'row',}} >
                    <Image
                      source={require("../../images/food/res/ophouricon.png")}
                      style={{marginRight: myContext.widthPercentage(8)}} />
                    <Text style={{width: '100%', fontSize: myContext.fontPercentage(12)}}>
                      {time}
                    </Text>
                  </View>
                  <View style={{marginTop: myContext.heightPercentage(5), flexDirection: 'row',}} >
                    <Image
                      source={require("../../images/food/res/phoneicon.png")}
                      style={{marginRight: myContext.widthPercentage(8)}} />
                    <Text style={{width: '100%', fontSize: myContext.fontPercentage(12)}}>
                      {phone}
                    </Text>
                  </View>
                  <View style={{marginTop: myContext.heightPercentage(5), flexDirection: 'row',}} >
                    <Image
                      source={require("../../images/food/res/mapicon.png")}
                      style={{marginRight: myContext.widthPercentage(8)}} />
                    <Text style={{width: '100%', fontSize: myContext.fontPercentage(12)}}>
                      {address}
                    </Text>
                  </View>
              </View>
              <View style={{marginTop: myContext.heightPercentage(10)}} >
                  <FlatList
                      style={{height: myContext.heightPercentage(230)}}
                      data={menus}
                      renderItem={({item}) => {
                          return (
                              <View
                                  style={{flexDirection:'row', marginBottom: myContext.heightPercentage(10), alignItems: 'center', borderWidth: 1, borderColor: '#E4E4E4', borderRadius: 10}}
                              >
                                  <View style={[itemStyle(), {width: '45%',},]} >
                                      <ImageBackground
                                          style={{width: '100%', height: myContext.heightPercentage(102), borderRadius: 10, alignItems: 'flex-end',}}
                                          source={{uri: (item.imgurl == null && myContext.domain + '/images/menu/defaultimage1.png') || (!(item.imgurl == null) && item.imgurl)}}
                                      >
                                        { item.importance >= 1 &&
                                        <Image
                                          source={require("../../images/food/menu/staricon1.png")}
                                          style={{marginRight: myContext.widthPercentage(10),}}
                                        />}
                                      </ImageBackground>
                                  </View>
                                  <View style={[itemStyle(), {width: '55%',},]} >
                                      <Text style={{marginTop: myContext.heightPercentage(5), fontWeight: 'bold', fontSize: myContext.fontPercentage(14)}} >
                                        {item.name}
                                      </Text>
                                      <View style={{flexDirection:'row', marginTop: myContext.heightPercentage(15),}} >
                                          <View style={{width: '70%', textAlign: 'left',}} >
                                            <Text style={{fontSize: myContext.fontPercentage(14), fontWeight: 'bold', color: '#4364BE'}}>
                                              ₩{item.price}
                                            </Text>
                                          </View>
                                          <View style={{width: '30%', textAlign: 'right',}} >
                                              <TouchableOpacity
                                                  onPress={() => navigation.navigate('MenuInfo', {
                                                    id: item.id,
                                                    name: item.name,
                                                    price: item.price,
                                                    importance: item.importance,
                                                    explanation: item.explanation,
                                                    imgurl: item.imgurl,
                                                  })}
                                                  style={{
                                                    paddingHorizontal: myContext.widthPercentage(3),
                                                    paddingVertical: myContext.heightPercentage(3),
                                                    borderRadius: 20,
                                                    backgroundColor: "#4364BE",
                                                  }} >
                                                  <Text style={{color: "#FFFFFF", alignSelf: "center", fontSize: myContext.fontPercentage(12)}} >
                                                    보기
                                                  </Text>
                                              </TouchableOpacity>
                                          </View>
                                      </View>
                                  </View>
                              </View>
                          )
                      }}
                  />
              </View>
          </View>
      </View>
  );
}

const styles = StyleSheet.create({

})