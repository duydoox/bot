import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Texts from '../Texts';
import { useTheme } from '@/Hooks'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useDispatch } from 'react-redux';
import { changeDate } from '@/Store/Market';

const DatePickers = ({date, ...other}) => {
    const { Images, Colors } = useTheme()
    const [isVisible, setIsVisible] = useState(false)
    const dispatch = useDispatch()

    return (
        < View style={{
            flexDirection: 'row',
            marginTop: 10,
            borderWidth: 1,
            borderColor: Colors.inputBorder,
            borderRadius: 4,
            height: 35,
            paddingHorizontal: 4,
            alignItems: 'center',
            justifyContent: 'space-between'
        }
        }
        >
            <DateTimePickerModal
                isVisible={isVisible}
                mode='date'
                date={new Date(date)}
                onConfirm={(date) => {
                    setIsVisible(false)
                    dispatch(changeDate(new Date(date).toISOString().slice(0, 10)))
                }}
                onCancel={() => {
                    setIsVisible(false)
                }}
            />
            <Texts>{date}</Texts>
            <TouchableOpacity onPress={() => { setIsVisible(true) }}>
                <Image source={Images.datePicker} resizeMode='contain' style={{ height: 18, width: 18 }} />
            </TouchableOpacity>
        </View >
    )
}

export default DatePickers

const styles = StyleSheet.create({})