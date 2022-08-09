import {TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '@/Components/Header'
import Texts from '@/Components/Texts'
import { useStyles } from './styles'
import { useDispatch } from 'react-redux'
import { changeGraph } from '@/Store/Market'
const HeaderMarket = () => {
    const dispatch = useDispatch()
    const styles = useStyles()
    return (
        <Header title='Market'>
            <TouchableOpacity onPress={()=>{dispatch(changeGraph('MARKET_CAP'))}}>
                <Texts>
                    Market cap
                    <Texts style={styles.marketCap}> ($3,226,646,352.00)</Texts>
                </Texts>
            </TouchableOpacity>
        </Header>
    )
}

export default HeaderMarket