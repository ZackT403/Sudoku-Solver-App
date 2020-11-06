import React, { Component } from 'react'
import Square from './Square'
import {View, TouchableWithoutFeedback, Text, TouchableOpacity} from 'react-native'
import { v4 as uuidv4 } from 'uuid';
import { Button } from 'react-native-elements';


export default class Board extends Component {
    state = {
        selected_square_row: undefined,
        selected_square_col_index: undefined
    }

    onPress = (index) =>{
        this.setState({
            selected_square_row: index[0],
            selected_square_col_index: index[1]
        })
    }

    handleNumberPress = (value) => {
        // If the key entered is valid, we change the value of the square in the boards state.
        if(this.state.selected_square_row !== undefined ){
            this.props.changeValueOnBoard(
                value, [this.state.selected_square_row, this.state.selected_square_col_index]
                )
        }
    }

    render() {
        const {board} = this.props
        return (
            <View>
               {board.map((row, row_index) => (
                    <View key={uuidv4()} style = {boardRow}>
                        {row.map((square, col_index) => (
                            <TouchableWithoutFeedback
                                key={uuidv4()}
                                onPress = {() => {this.onPress([row_index,col_index])}}
                             >
                                 <View>
                                    <Square
                                        square = {square}
                                        index = {[row_index, col_index]}
                                        key={uuidv4()}
                                        selected = {row_index === this.state.selected_square_row && col_index === this.state.selected_square_col_index}
                                    />
                                </View>    
                            </TouchableWithoutFeedback>
                        ))}
                    </View>
                ))}
                <View style={centerNumbers}>
                    <View  style = {numberRow}>
                        {[...Array(10).keys()].map(n => (
                                <TouchableOpacity key={uuidv4()}
                                  style = {numberBox}
                                  value={n}
                                  onPress = {() => {this.handleNumberPress(n)}}
                                >
                                    <Text style={textStyle}>{n}</Text>
                                </TouchableOpacity>
                        ))}     
                    </View>           
                </View>
            </View>    
        )
    }
}
const boardRow = {
    flexDirection:'row',
    flexWrap:'wrap',
    clear: "both",
}
const numberRow = {
    flexDirection:'row',
    flexWrap:'wrap',
    clear: "both",
}

const numberBox = {
    border: "solid",
    borderColor: "#999",
    paddingRight: 10,
    paddingLeft: 10

}



const textStyle = {
    fontSize: 37
}

const centerNumbers = {
    paddingTop: 10,
    justifyContent: "center",
    alignItems: "center"
}