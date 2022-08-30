import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Market from '@/Containers/Market'
import Limit from '@/Containers/Limit'
import Setting from '@/Containers/Setting'
import User from '@/Containers/User'
import TabBar from '../Containers/TabBar'
import { useSelector } from 'react-redux'
import Header from '@/Components/Header'
import { View } from 'react-native'

const Tab = createBottomTabNavigator()


// @refresh reset
const MainNavigator = () => {
  // const page = useSelector(state => state.auth.page)
  return (
    <View style={{flex: 1}}>
      <Tab.Navigator initialRouteName={'Market'} tabBar={prop => <TabBar {...prop} />}>
        <Tab.Screen
          name="Market"
          component={Market}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Limit"
          component={Limit}
          // component={Market}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Setting"
          component={Setting}
          options={{
            header: () => <Header title='Setting' />
          }}
        />
        <Tab.Screen
          name="User"
          component={User}
          options={{
            headerShown: false
          }}
        />
      </Tab.Navigator >
    </View>
  )
}

export default MainNavigator