import React, { Component } from 'react'
import {View, Text} from 'react-native'
export default class Square extends Component {

    state = {
        greyedOutSquare: false
    }

    componentDidMount() {
        const box = [Math.floor(this.props.index[1] / 3), Math.floor(this.props.index[0] / 3)];
        const greyedOutBoxes = [[0, 1], [1, 0], [1, 2], [2, 1]]

        greyedOutBoxes.forEach(i => {
            if (box[0] === i[0] && box[1] === i[1]) {
                this.setState({ greyedOutSquare: true });
            }
        })
    }


    render() {
        return (
            <View style={this.props.selected ? squareStyle3 : this.state.greyedOutSquare ? squareStyle : squareStyle2}>
                    <Text style={squareTextStyle}>{this.props.square === 0 ? '' : this.props.square}</Text>
            </View>
        )
    }
}

const squareTextStyle = {
    fontSize: 24,
    fontWeight: "bold",
    fontStyle: "italic",
    textAlign: "center"
}
const squareStyle = {
    borderWidth:1,
    border: "solid",
    borderColor: "#999",
    width: 45,
    height: 40,
    float: "left",
    lineHeight: "34px",
    padding: 0,
    backgroundColor: '#e1e3e1'
}
const squareStyle2 = {
    borderWidth:1,
    border: "solid",
    borderColor: "#999",
    width: 45,
    height: 40,
    float: "left",
    lineHeight: "34px",
    padding: 0,
    backgroundColor: ''
}
const squareStyle3 = {
    borderWidth:1,
    border: "solid",
    borderColor: "#999",
    width: 45,
    height: 40,
    float: "left",
    lineHeight: "34px",
    padding: 0,
    backgroundColor: 'green'
}