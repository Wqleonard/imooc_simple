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


/**
 * es6的方式，推荐使用
 */
const name='小明'
const age='18'
const sum=(a,b)=>{
    return a+b;
}
export {name,age,sum}

export default class EIComponent extends Component{
    render(){
        return(
            <Text style={{fontSize:20,backgroundColor:'red'}}>Hello World!</Text>
        )
    }
}


