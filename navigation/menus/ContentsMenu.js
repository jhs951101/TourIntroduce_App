import React, { useContext } from 'react';
import { StyleSheet, View, Text, FlatList, ImageBackground, TouchableOpacity, 
    TouchableWithoutFeedback, Keyboard } from 'react-native';
import AppContext from '../../components/AppContext';


export default function ContentsMenu({ navigation }) {

    const myContext = useContext(AppContext);
    const commonstyles = require('../../styles/commonstyles');

    return (
            <View style={commonstyles.overall}>
                <View>
                    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                        <ImageBackground
                            style={{width: '100%', height: myContext.heightPercentage(240), justifyContent: 'flex-end',}}
                            source={require("../../images/contents/banner.png")}
                        >
                            <View style={{marginVertical: myContext.heightPercentage(20), marginHorizontal: myContext.widthPercentage(20)}} >
                                <Text style={{fontSize: myContext.fontPercentage(32), color: '#FFFFFF', fontWeight: 'bold',}} >
                                    BUNSIK,{"\n"}
                                    Korean Snacks
                                </Text>
                            </View>
                        </ImageBackground>
                    </TouchableWithoutFeedback>
                </View>
                <View style={{paddingHorizontal: myContext.widthPercentage(15), paddingVertical: myContext.heightPercentage(15),}} >
                    <View>
                        <Text style={{fontSize: myContext.fontPercentage(12),}} >
                            <Text style={{fontWeight: 'bold',}} >2</Text> articles
                        </Text>
                    </View>
                    <View style={{marginTop: myContext.widthPercentage(10),}} >
                        <FlatList
                            style={{height: myContext.heightPercentage(280)}}
                            data={[
                                {key: 0,
                                contents1: '소주와 함께 따뜻한 국물 요리를 즐겨보세요!',
                                contents2: '서울의 여름 더위를 이기는 최고의 방법',
                                imgpath1: require("../../images/contents/item1.png"), imgpath2: require("../../images/contents/item2.png"),},
                            ]}
                            renderItem={({item}) => {
                                return (
                                    <View style={{flexDirection:'row', marginBottom: myContext.heightPercentage(20)}} >
                                            <TouchableOpacity
                                                onPress={() => navigation.navigate('CurationList')}
                                                style={{flexDirection:'row', marginRight: myContext.widthPercentage(16),}}
                                            >
                                                <ImageBackground
                                                    style={{width: myContext.widthPercentage(156), height: myContext.heightPercentage(190), justifyContent: 'flex-end'}}
                                                    source={item.imgpath1}
                                                >
                                                    <View style={{marginVertical: myContext.heightPercentage(10), marginHorizontal: myContext.widthPercentage(10)}} >
                                                        <Text style={{fontSize: myContext.fontPercentage(14), color: '#FFFFFF', fontWeight: 'bold',}} >
                                                            {item.contents1}
                                                        </Text>
                                                    </View>
                                                </ImageBackground>
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                                onPress={() => navigation.navigate('CurationList')}
                                                style={{flexDirection:'row', marginRight: myContext.widthPercentage(16),}}
                                            >
                                                <ImageBackground
                                                    style={{width: myContext.widthPercentage(156), height: myContext.heightPercentage(190), justifyContent: 'flex-end'}}
                                                    source={item.imgpath2}
                                                >
                                                    <View style={{marginVertical: myContext.heightPercentage(10), marginHorizontal: myContext.widthPercentage(10)}} >
                                                        <Text style={{fontSize: myContext.fontPercentage(14), color: '#FFFFFF', fontWeight: 'bold',}} >
                                                            {item.contents2}
                                                        </Text>
                                                    </View>
                                                </ImageBackground>
                                            </TouchableOpacity>
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