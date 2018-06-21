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
import EIComponent,{name,age,sum} from './EIComponent'
import PropsTest from './PropsTest'
import StateTest from './StateTest'
export default class LifecycleComonent extends Component{
    constructor(props){
        super(props)
        console.log('--constructor--')
        this.state={
            result:''
        }
    }

    componentWillMount() {

    }
    render(){
        // const params={name:"小张",age:18,sex:"女"}
        return(
            <View>
            {/*<Text style={{fontSize:20,backgroundColor:'red'}}>名字:{name}</Text>*/}
            {/*<Text style={{fontSize:20,backgroundColor:'red'}}>年龄:{age}</Text>*/}
            {/*<Text style={{fontSize:20,backgroundColor:'red'}}*/}
                  {/*onPress={()=>{*/}
                      {/*this.setState({result:sum(2,3)})*/}
                  {/*}}*/}
            {/*>2+3={this.state.result}</Text>*/}
            {/*<PropsTest {...params}/>*/}
                <StateTest/>
            </View>
        )
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps,nextState) {
        return true
    }
}

