import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
var Dimensions = require('Dimensions');
var { width, height, scale } = Dimensions.get('window');

class BodyText extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.appbar}>
                    <View>
                        <Text style={styles.appbarTitle}>
                            MEMOT
                        </Text>
                    </View>
                </View>

                <View style={styles.memoList}>
                    <View style={styles.memoListItem}>
                        <Text style={styles.memoTitle}>講座のアイテム</Text>
                        <Text style={styles.memoDate}>2017/11/15</Text>
                    </View>

                    <View style={styles.memoListItem}>
                        <Text style={styles.memoTitle}>講座のアイテム</Text>
                        <Text style={styles.memoDate}>2017/11/15</Text>
                    </View>

                    <View style={styles.memoListItem}>
                        <Text style={styles.memoTitle}>講座のアイテム</Text>
                        <Text style={styles.memoDate}>2017/11/15</Text>
                    </View>

                    <View style={styles.memoListItem}>
                        <Text style={styles.memoTitle}>講座</Text>
                        <Text style={styles.memoDate}>2017/11/15</Text>
                    </View>

                    <View style={styles.memoListItem}>
                        <Text style={styles.memoTitle}>講座のアイテム</Text>
                        <Text style={styles.memoDate}>2017/11/15</Text>
                    </View>
                </View>

                <View style={styles.memoAddButton}>
                    <Text style={styles.memoAddButtonTitle}>+</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        left: 0,
        right: 0,
        backgroundColor: '#fffdf6',
        // alignItems: 'stretch',
        justifyContent: 'center',
        paddingTop: 70,
        width: width
    },
    appbar: {
        position: 'absolute',
        top: 20,
        left: 0,
        right: 0,
        height: 50,
        alignItems: 'stretch',
        // paddingTop: 30,
        // paddingLeft: 0,
        // paddingRight: 0,
        // marginLeft: 0,
        // marginRight: 0,
        backgroundColor: '#265366',
        justifyContent: 'center',
        alignItems: 'center'
    },
    appbarTitle: {
        color: 'white'
    },
    memoList: {
        width: '100%',
        flex: 1
    },
    memoAddButton: {
        position: 'absolute',
        bottom: 32,
        right: 32,
        width: 48,
        height: 48,
        backgroundColor: '#e31686',
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.9,
        shadowRadius: 3
    },
    memoAddButtonTitle: {
        fontSize: 32,
        lineHeight: 32,
        color: '#fff'
    },

    memoListItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        backgroundColor: 'white'
    },
    memoTitle: {
        fontSize: 18,
        marginBottom: 4
    },
    memoDate: {
        fontSize: 12,
        color: '#a2a2a2'
    },
});

export default BodyText;