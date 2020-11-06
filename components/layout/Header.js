import React, { Component } from 'react'
import {View} from 'react-native'
import { Appbar } from 'react-native-paper';

export default class Header extends Component {
    render() {
        return (
            <View>
                <Appbar.Header>
                    <Appbar.Content title="Sudoku Solver"/>
                </Appbar.Header>
            </View>

        )
    }
}
