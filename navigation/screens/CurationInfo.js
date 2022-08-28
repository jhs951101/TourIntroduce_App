import React, {useContext} from 'react';
import { StyleSheet, View, ScrollView, Text, Image, } from 'react-native';
import AppContext from '../../components/AppContext';

export default function CurationInfo({ navigation }) {

    const myContext = useContext(AppContext);
    const commonstyles = require('../../styles/commonstyles');

    const viewStyle = () => {
        return ({
            marginTop: myContext.heightPercentage(20),
        });
    }

    const textStyle = () => {
        return ({
            fontSize: myContext.fontPercentage(14),
        });
    }

    const imageStyle = () => {
        return ({
            width: '100%',
            height: myContext.heightPercentage(248),
            borderRadius: 15,
        });
    }

    return (
        <ScrollView showsHorizontalScrollIndicator={false} style={commonstyles.overall}>
            <View style={{paddingHorizontal: myContext.widthPercentage(15), paddingVertical: myContext.heightPercentage(15),}} >
                <View>
                    <Text style={{fontSize: myContext.fontPercentage(18), fontWeight: "bold", textAlign: 'left'}} >
                        동서양의 만남, 소시지 찌개
                    </Text>
                </View>
                <View style={viewStyle()} >
                    <Image
                        style={imageStyle()}
                        source={require("../../images/contents/info/item1.png")}
                    />
                </View>
                <View style={viewStyle()} >
                    <Text style={textStyle()} >
                        소세지 찌개는 맛있는 음식이지만 6.25 전쟁이 낳은 음식으로 한국 역사의 비극적인 부분을 말해주고 있습니다.
                        최초의 소시지 찌개는 6.25전쟁 중 미군기지 근처에서 만들어졌다고 합니다.
                        군부대에서 소세지, 햄, 구운 콩을 사다가 김치를 넣어 한국의 맛을 냈습니다.
                        라면사리를 자주 끓이는 라면으로 다양한 재료로 든든한 한 끼 식사는 물론, 캐주얼한 음료 한 잔과도 찰떡 궁합입니다.
                    </Text>
                </View>
                <View style={viewStyle()} >
                    <Image
                        style={imageStyle()}
                        source={require("../../images/contents/info/item2.png")}
                    />
                </View>
                <View style={viewStyle()} >
                    <Text style={textStyle()} >
                        김치와 고춧가루가 소시지의 느끼함을 잡아주고 야채가 더해져 다른 반찬이 필요 없는 든든한 한끼가 됩니다.
                        여기에 소주 한 잔을 곁들이면 완벽한 식사가 됩니다.
                    </Text>
                </View>
                <View style={viewStyle()} >
                    <Text style={textStyle()} >
                        한국인들은 종종 "시원하다!"라고 말합니다.
                        말 그대로 "정말 상쾌합니다!"라는 뜻입니다.
                        뜨거운 국물을 마실 때, 그러나 그것은 종종 많은 외국인 방문객들에게 당혹스럽습니다.
                        이 표현은 한국의 독특한 요리 문화를 보여줍니다.
                        뜨거운 수프를 홀짝이면 뜨거운 액체가 목구멍을 타고 내려가는 짜릿한 감각을 느끼며, 마치 무언가를 씻는 것과 같은 느낌입니다.
                        그래서 한국인들은 이 느낌을 상쾌하다고 표현합니다.
                    </Text>
                </View>
                <View style={viewStyle()} >
                    <Image
                        style={imageStyle()}
                        source={require("../../images/contents/info/item3.png")}
                    />
                </View>
                <View style={viewStyle()} >
                    <Text style={textStyle()} >
                        외국인 방문객들은 이 뜨거운 국물 요리의 매운 맛에 처음에 놀랄 것입니다.
                        그러나 한 모금 마신 후, 당신은 같은 "상쾌한" 감각을 느끼는 자신을 발견하게 될 것입니다.
                        이 놀라운 순간에 소주를 마시십시오.
                        그러면 국물이 많은 한국 요리에 빠지게 될 것입니다.
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({

})