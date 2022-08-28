import React, { useContext, } from 'react';
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import AppContext from '../../components/AppContext';


export default function CurationList({ navigation }) {

    const myContext = useContext(AppContext);
    const commonstyles = require('../../styles/commonstyles');

    return (
        <View style={commonstyles.overall}>
            
            <Image
                style={{width: '100%', height: myContext.heightPercentage(180),}}
                source={require("../../images/contents/list/banner.png")}
            />
            <View style={{paddingHorizontal: myContext.widthPercentage(15), paddingVertical: myContext.heightPercentage(15),}} >
                <View style={{marginTop: myContext.heightPercentage(-45), paddingHorizontal: myContext.widthPercentage(10), paddingVertical: myContext.heightPercentage(10), backgroundColor: '#FFFFFF', borderRadius: 10, elevation: 5}} >
                    <Text style={{width: '100%', textAlign: 'center', fontWeight: 'bold', fontSize: myContext.fontPercentage(22)}}>
                        소주와 함께 따뜻한 국물 요리를 즐겨보세요!
                    </Text>
                </View>
                <View style={{marginTop: myContext.heightPercentage(10)}} >
                    <FlatList
                        style={{height: myContext.heightPercentage(300)}}
                        data={[
                            {key: 0,
                            name: '동서양의 만남, 소시지 찌개',
                            imgpath: require("../../images/contents/list/item1.png")},
                            {key: 1,
                            name: '강한 소주는 이제 그만! 달콤한 과일맛 소주와 꼬치!',
                            imgpath: require("../../images/contents/list/item2.png")},
                            {key: 2,
                            name: '스트레스 해소 No.1 소주와 삼겹살&삼겹구이 갈비!',
                            imgpath: require("../../images/contents/list/item3.png")},
                        ]}
                        renderItem={({item}) => {
                            return (
                                <View>
                                    <View
                                        style={{flexDirection:'row', marginTop: myContext.heightPercentage(10), marginBottom: myContext.heightPercentage(10), alignItems: 'center',}}
                                    >
                                        <View style={{width: '35%', paddingHorizontal: myContext.widthPercentage(10), paddingVertical: myContext.heightPercentage(10)}} >
                                            <Image
                                                style={{width: '100%', height: myContext.heightPercentage(102), borderRadius: 10,}}
                                                source={item.imgpath}
                                            />
                                        </View>
                                        <View style={{width: '65%', paddingHorizontal: myContext.widthPercentage(10), paddingVertical: myContext.heightPercentage(10)}} >
                                            <Text style={{marginTop: myContext.heightPercentage(5), fontSize: myContext.fontPercentage(15), fontWeight: 'bold'}} >
                                                {item.name}
                                            </Text>
                                            <View style={{flexDirection:'row', marginTop: myContext.heightPercentage(15)}} >
                                                <View style={{width: '70%', textAlign: 'left',}} ></View>
                                                <View style={{width: '30%', textAlign: 'right',}} >
                                                    <TouchableOpacity
                                                        onPress={() => navigation.navigate('CurationInfo')}
                                                        style={{
                                                            paddingHorizontal: myContext.widthPercentage(3),
                                                            paddingVertical: myContext.heightPercentage(3),
                                                            borderRadius: 20,
                                                            borderColor: "#4364BE",
                                                            borderWidth: 1,
                                                        }} >
                                                        <Text style={{color: "#4364BE", alignSelf: "center", fontSize: myContext.fontPercentage(12),}} >
                                                            view →
                                                        </Text>
                                                    </TouchableOpacity>
                                                </View>
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
        </View>
    );
}

const styles = StyleSheet.create({

})