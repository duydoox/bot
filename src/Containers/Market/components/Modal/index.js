import { Modal, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { changeGraph } from '@/Store/Market'
import MarketCapGraph from '../MarketCapGraph'
import BetGraph from '../BetGraph'
import NoBetGraph from '../NoBetGraph'


const Modals = () => {
    const graph = useSelector(state => state.market.graph)
    const dispatch = useDispatch()
    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={graph === 'MARKET_CAP' ? true : false}
                onRequestClose={() => {
                    dispatch(changeGraph(null))
                }}
            >
                <MarketCapGraph />
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={graph === 'BET' ? true : false}
                onRequestClose={() => {
                    dispatch(changeGraph(null))
                }}
            >
                <BetGraph />
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={graph === 'NO_BET' ? true : false}
                onRequestClose={() => {
                    dispatch(changeGraph(null))
                }}
            >
                <NoBetGraph />
            </Modal>
        </View>
    )
}

export default React.memo(Modals)
