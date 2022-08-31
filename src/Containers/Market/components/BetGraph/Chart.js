import { View, StyleSheet } from 'react-native'
import Charts from '@/Components/Charts'
import { VictoryStack, VictoryBar } from "victory-native";
import { format2degit, convertDate } from '@/Util'
import React from 'react'
import Texts from '@/Components/Texts';

const Chart = ({ dataJobGraph }) => {
    const tickFormatX = (x) => {
        // return x % 5 === 0 ? format2degit(x) + ` (${convertDate(date).slice(0, 5)})` : ''
        return x % 5 === 0 ? format2degit(x) + `` : ''
    }


    const ticksSize = ({ tick }) => (tick % 5 === 0 ? 4 : 0)
    return (
        <View>
            <Charts
                tickFormatX={tickFormatX}
                ticksSize={ticksSize}
                tickValues={[-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]}
            >
                <VictoryStack>
                    <VictoryBar
                        data={dataJobGraph.TURNON}
                        style={{ data: { fill: '#D19804', width: 4 } }}
                    />
                    <VictoryBar
                        data={dataJobGraph.TURNOFF}
                        style={{ data: { fill: '#D9D9D9', width: 4 } }}
                    />
                    <VictoryBar
                        data={dataJobGraph.RUNNING}
                        style={{ data: { fill: '#88B7E3', width: 4 } }}
                    />
                    <VictoryBar
                        data={dataJobGraph.LOSE}
                        style={{ data: { fill: '#ff4d4f', width: 4 } }}
                    />
                    <VictoryBar
                        data={dataJobGraph.WIN}
                        style={{ data: { fill: '#48c60a', width: 4 } }}
                    />
                </VictoryStack>
            </Charts>
            <View style={styles.legend}>
                <View style={styles.item}>
                    <View style={[styles.square, {backgroundColor: '#48c60a'}]}/>
                    <Texts> WIN</Texts>
                </View>

                <View style={styles.item}>
                    <View style={[styles.square, {backgroundColor: '#ff4d4f'}]}/>
                    <Texts> LOSE</Texts>
                </View>

                <View style={styles.item}>
                    <View style={[styles.square, {backgroundColor: '#88B7E3'}]}/>
                    <Texts> RUNNING</Texts>
                </View>

                <View style={styles.item}>
                    <View style={[styles.square, {backgroundColor: '#D9D9D9'}]}/>
                    <Texts> TURN OFF</Texts>
                </View>

                <View style={styles.item}>
                    <View style={[styles.square, {backgroundColor: '#D19804'}]}/>
                    <Texts> TURN ON</Texts>
                </View>
            </View>
        </View>
    )
}

export default React.memo(Chart)

const styles = StyleSheet.create({
    legend: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    square: {
        height: 10,
        width: 10,
    }
})