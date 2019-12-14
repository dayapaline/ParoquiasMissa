
import React, { Component } from 'react';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import { Image, StyleSheet, TouchableOpacity, Text, FlatList } from 'react-native';
import { Style } from './style'
import { Container, Header, Left, Right, Body, Title, Button, Icon, View, Fab, List, ListItem, Thumbnail, Badge, Content, Tab, Tabs, TabHeading, Card, CardItem } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';


export default class Main extends Component {
  state = {
    data: [
      { id: 0, full_name: 'Repo 1', src: require('./../../assets/Catedral-de-Nossa-Senhora-do-Rosário.jpg') },
      { id: 1, full_name: 'Repo 2', src: require('./../../assets/Catedral-de-Nossa-Senhora-do-Rosário.jpg') },
      { id: 2, full_name: 'Repo 3', src: require('./../../assets/Catedral-de-Nossa-Senhora-do-Rosário.jpg') },
      { id: 3, full_name: 'Repo 4', src: require('./../../assets/Catedral-de-Nossa-Senhora-do-Rosário.jpg') },
      { id: 4, full_name: 'Repo 5', src: require('./../../assets/Catedral-de-Nossa-Senhora-do-Rosário.jpg') },
      { id: 5, full_name: 'Repo 6', src: require('./../../assets/Catedral-de-Nossa-Senhora-do-Rosário.jpg') },
    ],
  };

  renderItem = ({ item }) => (
    
    <View style={Style.listItem}>
    <Image style={Style.imageThumbnail} source={item.src}/>
    <Text style={{alignSelf:'center'}}>{item.full_name}</Text>
  </View>

    
  );

  render() {
    return (
      <Container style={{ backgroundColor: '#cfd8dc' }}>
        <Header androidStatusBarColor="#546E7A" style={{ backgroundColor: "#34515e" }}>
          <TouchableOpacity >

            <Icon type="MaterialIcons" name="dehaze" size={30} style={{ paddingTop: 10, paddingLeft: 2, color: "#fff" }} />
          </TouchableOpacity>
          <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}></View>

          <View style={Style.viewText}>

            <TouchableOpacity >
              <Text style={Style.text} > Horários de Missa </Text>
            </TouchableOpacity>
          </View>

          <Icon type="MaterialIcons"
            name="search" size={30} style={{ paddingTop: 15, color: "#fff" }} />


        </Header >
        
          <FlatList
            style={{ marginTop: 30 }}
            contentContainerStyle={Style.list}
            numColumns={2}
            data={this.state.data}
            renderItem={this.renderItem}
            keyExtractor={item => item.id}
          />

      


        <Fab

          direction="up"
          style={{ backgroundColor: '#f9aa33', marginBottom: 10 }}
          position="bottomRight" >
          <Icon type="MaterialIcons" name="add" size={30} style={{ color: "#34515e" }} />
        </Fab>

      </Container>
    )
  }
}