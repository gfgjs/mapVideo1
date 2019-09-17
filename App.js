/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, WebView, Image} from 'react-native';

const images = {
    act: require('./src/png/act.png'),
    store: require('./src/png/store.png'),
    search: require('./src/png/search.png'),
    quest: require('./src/png/quest.png'),
    manboard: require('./src/png/manboard.png'),
    man: require('./src/png/man.png'),
    i1: require('./src/png/i1.png'),
    quiteview: require('./src/png/quiteview.png'),
    social: require('./src/png/social.png'),
    pstn: require('./src/png/pstn.png'),
    dtitle: require('./src/png/dtitle.png'),
    stark: require('./src/png/stark.png'),
}

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <WebView source={{uri: 'https://m.amap.com'}}/>
                <View style={styles.head}>
                    <View style={{height: '100%', width: '45%', ...styles.flexCenter}}>
                        <Image source={images.manboard}/>
                        <Image source={images.man} style={{position: 'absolute', left: 10}}/>
                        <Text style={{position: 'absolute', left: 70, top: 40}}>123456</Text>
                    </View>
                    <View style={{
                        height: '100%',
                        width: '55%',
                        ...styles.flexCenter
                    }}>
                        <Image source={images.act}/>
                        <Image source={images.store}/>
                        <Image source={images.search}/>
                        <Image source={images.quest}/>
                    </View>
                </View>
                <View style={styles.foot}>
                    <View style={{width:'80%',height:'100%',...styles.flexCenter}}>
                        <Image source={images.i1}/>
                        <Image source={images.quiteview}/>
                        <Image source={images.social}/>
                    </View>
                </View>
                <View style={styles.rightBars}>
                    <Image source={images.pstn}/>
                    <Image source={images.dtitle}/>
                    <Image source={images.stark}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    },
    flexCenter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    head: {
        height: 80,
        flexDirection: 'row',
        position: 'absolute',
        // backgroundColor: 'transparent'
    },
    foot: {
        height: 100,
        width: '100%',
        position: 'absolute',
        bottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    rightBars:{
        height: 150,
        width: 40,
        position: 'absolute',
        bottom: 150,
        right:20,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    headImage: {
        width: 100,
        height: 100
    }
});
