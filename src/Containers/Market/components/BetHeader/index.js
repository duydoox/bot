import { View, Text } from 'react-native'
import React from 'react'
import Icon from '@/Components/Icon'
import { useStyles } from './styles'

const BetHearder = ({text, onPress=()=>{}}) => {
    const styles = useStyles()
    return (
        <View style={styles.head}>
            <Text style={styles.Fonts.titleBet}>{text}</Text>
            <Icon name='marketIcon' height={25} width={25} 
            backgroundColor='#D7D8DA' 
            onPress={onPress}/>
        </View>
    )
}

export default BetHearder