import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TabMenu from './TabContainer';
import CurationList from './screens/CurationList';
import CurationInfo from './screens/CurationInfo';
import MenuList from './screens/MenuList';
import MenuInfo from './screens/MenuInfo';
import BucketList from './screens/BucketList';
import Login from './screens/Login';
import SignUp from './screens/SignUp';

const tabMenu = "TabMenu";
const curationList = "CurationList";
const curationInfo = "CurationInfo";
const menuList = "MenuList";
const menuInfo = "MenuInfo";
const bucketList = "BucketList";
const login = "Login";
const signup = "SignUp";

const Stack = createStackNavigator();

function StackContainer() {
  return (
      <Stack.Navigator >
        <Stack.Screen name={tabMenu} component={TabMenu} options={{headerShown: false}} />
        <Stack.Screen name={curationList} component={CurationList} options={{title: 'Curation Articles', headerTitleAlign: 'center',}} />
        <Stack.Screen name={curationInfo} component={CurationInfo} options={{title: 'Article Information', headerTitleAlign: 'center',}} />
        <Stack.Screen name={menuList} component={MenuList} options={{title: 'Menu List', headerTitleAlign: 'center',}} />
        <Stack.Screen name={menuInfo} component={MenuInfo} options={{title: 'Menu Information', headerTitleAlign: 'center',}} />
        <Stack.Screen name={bucketList} component={BucketList} options={{title: 'Selected Menu', headerTitleAlign: 'center',}} />
        <Stack.Screen name={login} component={Login} options={{title: 'Login', headerTitleAlign: 'center',}} />
        <Stack.Screen name={signup} component={SignUp} options={{title: 'Sign Up', headerTitleAlign: 'center',}} />
      </Stack.Navigator>
  );
}

export default StackContainer;