import React, { useContext, } from 'react';
import { Image, } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppContext from '../components/AppContext';

import ResMenu from './menus/ResMenu';
import ContentsMenu from './menus/ContentsMenu';
import ProfileMenu from './menus/ProfileMenu';

const resMenu = "Restaurants";
const contentsMenu = "Contents";
const profileMenu = "Profile";

const Tab = createBottomTabNavigator();

function TabContainer() {

  const myContext = useContext(AppContext);

  return (
      <Tab.Navigator
        initialRouteName={resMenu}
        screenOptions={
          ({ route }) => ({
          tabBarIcon: ({ focused, }) => {
            let imgName;
            let rn = route.name;

            if (rn === resMenu) {
              imgName = focused ? require('../images/menuicons/res_focus.png') : require('../images/menuicons/res.png');
            }
            else if (rn === contentsMenu) {
              imgName = focused ? require('../images/menuicons/contents_focus.png') : require('../images/menuicons/contents.png');
            }
            else if (rn === profileMenu) {
              imgName = focused ? require('../images/menuicons/profile_focus.png') : require('../images/menuicons/profile.png');
            }
            
            return <Image source={imgName}/>;
          },
        })}

        tabBarOptions={{
          activeTintColor: '#4464BF',
          inactiveTintColor: '#BBBBBB',
          activeBackgroundColor: '#FFFFFF',
          inactiveBackgroundColor: '#FFFFFF',
          labelStyle: { padding: 2, fontSize: myContext.fontPercentage(10), },
        }} >

        <Tab.Screen name={resMenu} component={ResMenu}
          options={{headerShown: false}} />
        <Tab.Screen name={contentsMenu} component={ContentsMenu}
          options={{headerShown: false}} />
        <Tab.Screen name={profileMenu} component={ProfileMenu}
          options={{headerShown: false}} />
      </Tab.Navigator>
  );
}

export default TabContainer;