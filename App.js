import React, { useState, useRef } from 'react';
import { Alert, } from 'react-native';
import AppContext from './components/AppContext';
import { NavigationContainer } from "@react-navigation/native";
import StackContainer from './navigation/StackContainer';
import { responsiveScreenHeight, responsiveScreenWidth, responsiveScreenFontSize, } from 'react-native-responsive-dimensions';

export default function App() {

  const domain = "http://tails1101.cafe24.com/tour";
  const FIGMA_WINDOW_WIDTH = 360;
  const FIGMA_WINDOW_HEIGHT = 640;

  const [username, SetUsername] = useState(null);
  const [name, SetName] = useState(null);
  const [cart, SetCart] = useState([]);
  const dataId = useRef(-1);

  const widthPercentage = (width) => {
    const percentage = (width / FIGMA_WINDOW_WIDTH) * 100;
    return responsiveScreenWidth(percentage);
  }

  const heightPercentage = (height) => {
    const percentage = (height / FIGMA_WINDOW_HEIGHT) * 100;
    return responsiveScreenHeight(percentage);
  }

  const fontPercentage = (size) => {
    const percentage = size * 0.135;
    return responsiveScreenFontSize(percentage);
  }

  const addCart = (mid, name, price, imgurl) => {
    if(cart.length <= 0){
      dataId.current = 0;
    }
    else{
      dataId.current = cart[cart.length-1].key + 1;
    }

    const newItem = {
      mid,
      name,
      price,
      imgurl,
      key: dataId.current,
    };

    SetCart([newItem, ...cart]);
  };

  const deleteCart = (targetId) => {
    const newList = cart.filter((it) => it.key !== targetId);
    SetCart(newList);
  };

  const getItem = (targetId) => {
    for(var i=0; i<cart.length; i+=1){
      if(cart[i].key === targetId)
        return cart[i];
    }

    return null;
  };

  const getTotalPrice = () => {
    var sum = 0;
    cart.map((it) => { sum += it.price; });
    return sum;
  };

  const logout = () => {
    SetUsername(null);
    SetName(null);
    SetCart([]);
  }

  const showCommErrMsg = () => {
    Alert.alert('Error', '통신 중 오류가 발생하였습니다.', [
      {text: 'OK'}
    ]);
  }

  const usersettings = {
    domain,
    widthPercentage, heightPercentage, fontPercentage,
    
    username, SetUsername,
    name, SetName,
    logout,
    showCommErrMsg,

    cart, SetCart,
    addCart, deleteCart, getTotalPrice, getItem,
  };

  return (
    <AppContext.Provider value={usersettings}>
      <NavigationContainer>
        <StackContainer/>
      </NavigationContainer>
    </AppContext.Provider>
  );

}


  /* 전역변수 사용법
    import React, { useContext } from 'react';
    import AppContext from '../../components/AppContext';
    
    const myContext = useContext(AppContext);

    func
    {
      myContext.addCart('gogi', 15000, 1);  // include!
      myContext.deleteCart(<숫자아이디>);
      myContext.modifyCount(<숫자아이디>, myContext.cart[<숫자아이디>].count + 1);

      console.log(myContext.cart);  // include!
    }
  */