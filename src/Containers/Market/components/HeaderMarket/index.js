import { TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import Header from '@/Components/Header'
import Texts from '@/Components/Texts'
import { useStyles } from './styles'
import { useDispatch } from 'react-redux'
import { changeGraph } from '@/Store/Market'
import { useListMarketCapQuery } from '@/Services/modules/market'
import { convertCurrency } from '@/Util'

const HeaderMarket = () => {
    const dispatch = useDispatch()
    const styles = useStyles()
    const { data, error } = useListMarketCapQuery()
    useEffect(() => {
        if (error) {
            console.log(error, '---error')
        }
    }, [error])
    return (
        <Header title='Market'>
            <TouchableOpacity onPress={() => { dispatch(changeGraph('MARKET_CAP')) }}>
                <Texts>
                    Market cap&nbsp;
                    <Texts style={styles.marketCap}>
                        {data && convertCurrency(data.data[data.data.length - 1].marketCap)}
                    </Texts>
                </Texts>
            </TouchableOpacity>
        </Header>
    )
}

export default HeaderMarket