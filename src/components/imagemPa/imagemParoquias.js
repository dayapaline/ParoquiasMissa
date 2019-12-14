import React, {Component} from 'react';
import { Style } from './style';
import { Card, CardItem} from 'native-base';
import {Text, View, Image, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class imagemParoquias extends Component {
  render(){
    return(
      <View style={Style.card}>
        <Card>
          <CardItem cardBody>
            <Image style={{height: 150, width: null, flex: 1}} source={this.props.item.src}/>
          </CardItem>
          <Text style={Style.produtos}>{this.props.item.full_name}</Text>
          <TouchableOpacity style={Style.button}>
            <Text style={Style.buttonText}>Comprar</Text>
          </TouchableOpacity>
        </Card>
      </View>
    );
  }
}
