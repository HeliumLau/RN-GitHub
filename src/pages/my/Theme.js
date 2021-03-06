import React, { PureComponent } from 'react';
import {
	StyleSheet,
	View,
	Text,
	ScrollView,
	TouchableOpacity,
    Platform,
    TouchableHighlight,
    Dimensions,
    FlatList,
} from 'react-native';
import ThemeCard from '../../components/ThemeCard';
import { ThemeColors, Palette } from '../../api/themes';
const screenW = Dimensions.get('window').width;
const cols = 3;
const cellWH = 100;
const vMargin = (screenW - cellWH * cols) / (cols + 1);
const hMargin = 25;

export default class Tag extends PureComponent {
    static navigationOptions = ({ navigation }) => {
		return {
			title: "主题设置",
			headerStyle: {
				backgroundColor: '#2196F3',
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
				fontWeight: 'bold',
			},
			headerRight: (
				<TouchableOpacity onPress={navigation.getParam('save')}>
					<Text style={{color: '#FFF'}}>保存</Text>
				</TouchableOpacity>
			)
		};
    };
    handleSelect = (key) => {
        console.log(key);
    }
    renderRow = ({item}) => {
        return <ThemeCard data={item} onSelect={this.handleSelect} />;
    };
    
    _keyExtractor = (item, index) => item.title;
    
    render() {
        const dataSource = Object.keys(Palette).map(key => {
            return {
                title: key,
                data: Palette[key]
            }
        })
        return(
            <View style={styles.container}>
                <FlatList
                    keyExtractor={this._keyExtractor}
                    data={dataSource}
                    renderItem={this.renderRow}
                />   
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        // borderRadius: 3,
        // shadowColor: 'gray',
        // shadowOffset: {width: 2, height: 2},
        // shadowOpacity: 0.5,
        // shadowRadius: 2,
        // padding: 3
    },
    wrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        flex: 1,
    },
    themeItem: {
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        width: cellWH,
        height: cellWH,
        marginLeft: vMargin,
        marginTop: hMargin
    },
    themeText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16,
    }
});