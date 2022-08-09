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
import MarketCapGraph from '@/Containers/Market/components/MarketCapGraph'
import BetGraph from '@/Containers/Market/components/BetGraph'
import NoBetGraph from '@/Containers/Market/components/NoBetGraph'
const Tab = createBottomTabNavigator()


// @refresh reset
const MainNavigator = () => {
  const page = useSelector(state => state.auth.page)
  const graph = useSelector(state=>state.market.graph)
  return (
    <View style={{flex: 1}}>
      <Tab.Navigator initialRouteName={page ? page : 'Market'} tabBar={prop => <TabBar {...prop} />}>
        <Tab.Screen
          name="Market"
          component={Market}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Limit"
          // component={Limit}
          component={Market}
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
      
      {
        graph === 'MARKET_CAP' ? 
        <MarketCapGraph/> :
        graph === 'BET' ?
        <BetGraph/> :
        graph === 'NO_BET'?
        <NoBetGraph/>:
        <></>
      }
    </View>
  )
}

export default MainNavigator