/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import PropTypes from 'prop-types'
/**
 * es6的方式，推荐使用
 */
export default class PropsTest extends Component{
    static defaultProps={
        name:'小红',
        age:16
    }
    static propTypes={
        name:PropTypes.string,
        age:PropTypes.number,
        sex:PropTypes.string.isRequired,
    }
    render(){
        return(
            <View>
            <Text style={{fontSize:20,backgroundColor:'red'}}>Hello,{this.props.name}</Text>
            <Text style={{fontSize:20,backgroundColor:'red'}}>Hello,{this.props.age}</Text>
            <Text style={{fontSize:20,backgroundColor:'red'}}>Hello,{this.props.sex}</Text>
            </View>
                )
    }
}


