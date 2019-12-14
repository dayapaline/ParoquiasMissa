import styled from 'styled-components/native';
import { Right } from 'native-base';
import { Dimensions, StyleSheet } from 'react-native'

const {width, height } = Dimensions.get('window')

export const Style = {
  container: {
    flex: 1,
    flexDirection: 'column',
  },

  container: {
    flex: 1,
    flexDirection: 'column',
  },

   viewButtonSwipe:{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#10B372',
   },

   ImageSections: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 8,
    justifyContent: 'center'
  },

  avatar: {
    borderRadius: 75,
    borderWidth:3,
    width: 150,
    height: 150,
  },

  btnParentSection: {
    alignSelf:'flex-start',
    marginTop:120,
    color:'#4CB1F7'
  },
  flatStyle:{
   
    
  },
  separatorStyle: {
    height: 10,
    backgroundColor: '#F0F0F7',
  },
  textName:{},
  textDetalhe:{


  },
  separatorViewStyle: {
    flex: 1,
    backgroundColor: '#FFF',
  },

  iconStyle: {
		padding: 15,
    flex: 1,
    fontSize:30,
		color: '#fff',
		marginTop: 20,
		textAlign: 'center',

  },
  viewText:{
    justifyContent:'center',
    flexDirection:'row',
    flex: 1,
    
  },
  lineStyle:{
    borderWidth: 2,
    borderColor:'#546E7A',
    height: height,
    textAlign: 'center',
    marginHorizontal :360,
   
},
circle: { 
    width: 20,
     height: 20, 
     borderRadius: 20/2, 
     marginHorizontal:360,
    
     backgroundColor: 'red' ,
    },

  text:{
    color:'#FFF',
    fontSize:20,
    paddingTop:15
  },
  viewStyleForText: {
    
    width: width-40,
    color:'#FFF',
    
    fontSize:20,
   
   
   
  },
  triangle: { 
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid', borderLeftWidth: 50,
    borderRightWidth: 50, borderBottomWidth: 100,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'red' 
},
list: {
  paddingHorizontal: 10,
  paddingVertical: 10
},

listItem: {
  flexDirection:"column",
  backgroundColor: '#EEE',
  marginTop: 20,
  padding: 10,
},
imageThumbnail: {
  
  resizeMode:'contain',
  margin: 5,
  marginRight: 5,
 flex:1,
  height: 100,
},

}
