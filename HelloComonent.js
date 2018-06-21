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
export default class HelloComonent extends Component{
    render(){
        return(
            <Text style={{fontSize:20,backgroundColor:'red'}}>Hello World!</Text>
        )
    }
}

/**
 * es5方式
 */
// const HelloComoment=React.creatClass({
//     render(){
//         return(
//             <Text style={{fontSize:20,backgroundColor:'red'}}>Hello World!</Text>
//         )
//     }
// })
//
// module.exports=HelloComoment

/*
 方式三，函数式不能使用this
  无状态，
 */
// function HelloComonent(props) {
//     return(
//             <Text style={{fontSize:20,backgroundColor:'red'}}>Hello.{props.name}!</Text>
//         )
// }
// module.exports=HelloComonent
