import React, { Component } from 'react'
import {View, Text, Button} from 'react-native'
import Board from "./Board"
import SubmitBoard from "./SumbitBoard"
class Sudoku extends Component {
    constructor(props) {
        super(props);
        this.state = {
            board: [
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0]
            ]
        }
    }


    solve = () => {
        const blank = this.findBlank()
        if(!blank){
            return true
        }
        const row = blank[0]
        const col = blank[1]
        for(let i = 1; i<= 9; i++){
            if(this.isValid(blank, i)){
                this.changeBoard(i, [row,col])
                if (this.solve()){
                    return true
                }
                this.changeBoard(0, [row,col])
            }
        }
        //alert("Board is invalid")
        return false
    }
    changeBoard = (n, index) => {
        const board = this.state.board
        board[index[0]][index[1]] = n 
        this.setState({board: board})
    }
    isValid = (pos,num) =>{
        for (let i = 0; i < 9; i++) {
            if (this.state.board[pos[0]][i] === num && pos[1] !== i){
                return false
            }
            if (this.state.board[i][pos[1]] === num && pos[0] !== i){
                 return false
            }
        }
        const box_x = Math.floor(pos[1] / 3);
        const box_y = Math.floor(pos[0] / 3);


        for (let i = box_y * 3; i < box_y * 3 + 3; i++) {
            for (let j = box_x * 3; j < box_x * 3 + 3; j++) {
                if (this.state.board[i][j] === num && (pos[0] !== i || pos[1] !== j)){
                     return false
                }
            }
        }
        return true;
    }
    findBlank = () =>{
        for (let i = 0; i < 9; i++) {
            for (let a = 0; a < 9; a++) {
                if (this.state.board[i][a] === 0){ 
                    return [i, a]
                }
            }
        }
        return false;
    }

    boardValid = () => {
        for (let i = 0; i < 9; i++) {
            for (let a = 0; a < 9; a++) {
                if (this.state.board[i][a] !== 0 && !this.isValid([i,a],this.state.board[i][a])){ 
                    console.log("here2")
                    return false
                }
            }
        }
        console.log("Here")
        return true

    }

    changeValueOnBoard(new_value, index) {
        let new_board = this.state.board;
        new_board[index[0]][index[1]]= parseInt(new_value);

        this.setState({board: new_board});
    }

    clear = () => {
        this.setState({
        board: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]})
    }

    render() {
        return (
            <View style={boardPos}>
                <Text>
                    {this.columnIsValid}
                </Text>
                <Board
                    board={this.state.board}
                    changeValueOnBoard = {(new_value,index) => this.changeValueOnBoard(new_value,index)}
                />
                <SubmitBoard solve = {this.solve} valid = {this.boardValid} clear = {this.clear}/>
            

            </View>
        );
    }
}
const boardPos = {
    paddingTop: 20,
    justifyContent: "center",
    alignItems: "center"
}
export default Sudoku