import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Market from '@/Containers/Market'
import Limit from '@/Containers/Limit'
import Setting from '@/Containers/Setting'
import User from '@/Containers/User'
import TabBar from '../Containers/TabBar'
import { useSelector } from 'react-redux'
const Tab = createBottomTabNavigator()


// @refresh reset
const MainNavigator = () => {
  const page = useSelector(state => state.auth.page)
  return (
    <Tab.Navigator initialRouteName={page ? page : 'Market'} tabBar={prop => <TabBar {...prop}/>}>
      <Tab.Screen
        name="Market"
        component={Market}
      />
      <Tab.Screen
        name="Limit"
        component={Limit}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
      />
      <Tab.Screen
        name="User"
        component={User}
      />
    </Tab.Navigator >
  )
}

export default MainNavigator