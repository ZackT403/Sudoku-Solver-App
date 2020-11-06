import React, { Component } from 'react'
import {View, Text} from 'react-native'
export default class HowTo extends Component {
    render() {
        return (
            <View>
               <Text style={textStyle}>Enter Board Below</Text>
            </View>
        )
    }
}
const textStyle = {
    fontSize: 30,
    textAlign: "center"
}
