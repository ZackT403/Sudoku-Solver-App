import React, { Component } from 'react'
import {View, TouchableOpacity,Text} from 'react-native'
import Errors from "./Errors"
export default class SumbitBoard extends Component {
    state = {
        error:""
    }
    checkSolve = () =>{
        if(this.props.valid()){
            console.log("valid")
            this.props.solve()
            this.setState({error:""})
        }else{
            console.log("Not Valid")
            this.setState({error:"Board Is Not Valid"})
        }
    }

    render() {
        return (
            <View>
                <View style={buttonGroupStyle}>
                    <TouchableOpacity onPress={this.checkSolve} style={buttonStyle}> 
                        <Text style={buttonText}>Solve</Text>
                    </TouchableOpacity>

                    <View style={paddingStyle}>
                        <TouchableOpacity style={buttonStyle} onPress={this.props.clear}>
                            <Text style={buttonText}>Clear</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Errors error={this.state.error} />
            </View>    
        )
    }
}
const buttonGroupStyle = {
    paddingTop: 5,
    flexDirection:'row',
}
const paddingStyle = {
    paddingLeft:5
}
const buttonText = {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center"
}
const buttonStyle = {
    width: 160,
    height: 40,
    backgroundColor: "#6622f0",
    borderRadius: 8
}

