import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, } from 'react-native';
import AppContext from '../../components/AppContext';
import axios from 'axios';

export default function ResMenu({ navigation }) {

    const [resList, SetResList] = useState([]);
    const myContext = useContext(AppContext);

    const commonstyles = require('../../styles/commonstyles');

    const addMenuAndMove = (name, score, scorecount, time, phone, address, imgurl) => {
        axios.get(myContext.domain + '/getmenu.php' + '?name=' + name)
        .then(function (response) {
            if(response.data.success){
                var menus = response.data.menus;
                var count = response.data.count;

                for(var i=0; i<count; i+=1){
                    menus[i].key = i;
                }

                navigation.navigate("MenuList", {
                    name,
                    score,
                    scorecount,
                    time,
                    phone,
                    address,
                    imgurl,
                    menus,
                });
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

    const initialize = () => {
        var useUrl = myContext.domain + '/getrestaurants.php';
        axios.get(useUrl)
            .then(function (response) {
                SetResList(response.data.restaurants);
            })
            .catch(function (error) {
                SetResList([]);
            });
    }

    useEffect(() => {
        initialize();
    }, []);
    
        return (
            <View style={commonstyles.overall}>
                <View style={{paddingHorizontal: myContext.widthPercentage(15), paddingVertical: myContext.heightPercentage(15),}} >
                    <View style={{flexDirection:'row', marginTop: myContext.heightPercentage(10)}} >
                        <Image
                            source={require("../../images/header/logo.png")}
                        />
                    </View>
                </View>
                <View style={{marginTop: myContext.heightPercentage(3), borderBottomColor: '#E0E0E0', borderBottomWidth: 1}} ></View>
                <View style={{paddingHorizontal: myContext.widthPercentage(15), paddingVertical: myContext.heightPercentage(15),}} >
                    <View style={{flexDirection:'row', }} >
                        <Text style={{fontWeight: 'bold', fontSize: myContext.fontPercentage(12)}} >
                            {resList.length}{" "}
                        </Text>
                        <Text style={{fontSize: myContext.fontPercentage(12)}} >
                            articles
                        </Text>
                    </View>
                    <View style={{marginTop: myContext.heightPercentage(10),}} >
                        <FlatList
                            style={{height: myContext.heightPercentage(470)}}
                            data={resList}
                            renderItem={({item}) => {
                                return (
                                    <TouchableOpacity
                                        onPress={() => addMenuAndMove(
                                            item.name,
                                            item.avg,
                                            item.cnt,
                                            item.time,
                                            item.phone,
                                            item.address,
                                            item.imgurl,
                                        )}
                                        style={{flexDirection:'row', marginBottom: myContext.heightPercentage(10), alignItems: 'center', borderWidth: 1, borderColor: '#E4E4E4', borderRadius: 10}}
                                    >
                                        <View style={{width: '35%', paddingHorizontal: myContext.widthPercentage(5), paddingVertical: myContext.heightPercentage(5)}} >
                                            <Image
                                                style={{width: '100%', height: myContext.heightPercentage(90), borderRadius: 10,}}
                                                source={{uri: (item.imgurl == null && myContext.domain + '/images/defaultimage.png') || (!(item.imgurl == null) && item.imgurl)}}
                                            />
                                        </View>
                                        <View style={{width: '65%', paddingHorizontal: myContext.widthPercentage(10), paddingVertical: myContext.heightPercentage(10)}} >
                                            <Text style={{marginTop: myContext.heightPercentage(5), fontWeight: 'bold', fontSize: myContext.fontPercentage(14)}} >
                                                {item.name}
                                            </Text>
                                            <View style={{flexDirection:'row', marginTop: myContext.heightPercentage(12)}} >
                                                <Text style={{color: '#EFAF46', textAlign: 'left', fontSize: myContext.fontPercentage(12),}} >
                                                    {item.avg >= 1 && "★"}{!(item.avg >= 1) && "☆"}
                                                    {item.avg >= 2 && "★"}{!(item.avg >= 2) && "☆"}
                                                    {item.avg >= 3 && "★"}{!(item.avg >= 3) && "☆"}
                                                    {item.avg >= 4 && "★"}{!(item.avg >= 4) && "☆"}
                                                    {item.avg >= 5 && "★"}{!(item.avg >= 5) && "☆"}
                                                    {" "}
                                                    ({item.cnt})
                                                </Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )
                            }}
                        />
                    </View>
                </View>
            </View>
        );
}

const styles = StyleSheet.create({

});