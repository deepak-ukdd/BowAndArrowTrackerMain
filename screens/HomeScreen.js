import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
  Button
} from 'react-native';

import AppHeader from '../components/AppHeader';
import db from '../config';
export default class HomeScreen extends Component {
constructor(){
  super();
  this.state={
    like:0,
    dislike:0,
    counter: 0, 
    counter1:0,

    timer:0,
      
    buttonColor: "blue",
    buttonColor2:"orange"
  }
}



 componentDidMount() {
    setInterval(this.incrementTimer,1000);
  }

incrementTimer = () => {
   this.setState({ timer: this.state.timer + 1 });
}

  incrementCounter100 = () => {
    this.setState({ counter: this.state.counter + 100 });
  }


  incrementCounter50 = () => {
    this.setState({ counter: this.state.counter + 50 });
  }


  incrementCounter25 = () => {
    this.setState({ counter: this.state.counter + 25 });
  }


  incrementCounter10 = () => {
    this.setState({ counter: this.state.counter + 10 });
  }


   incrementCounter1100 = () => {
    this.setState({ counter1: this.state.counter1 + 100 });
  }


  incrementCounter150 = () => {
    this.setState({ counter1: this.state.counter1 + 50 });
  }


  incrementCounter125 = () => {
    this.setState({ counter1: this.state.counter1 + 25 });
  }


  incrementCounter110 = () => {
    this.setState({ counter1: this.state.counter1 + 10 });
  }


  resetCounter = () =>{

 this.setState({ counter: this.state.counter100 = 0 });
this.setState({ counter: this.state.counter1 = 0 });
  }

  changeColor = ()=>{
   var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    this.setState({ buttonColor: color });
  }
   changeColor2 = ()=>{
   var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    this.setState({ buttonColor2: color });
  }
  
likeCount=()=>{
  this.setState({like: this.state.like + 1});
}
dislikeCount=()=>{
  this.setState({dislike: this.state.dislike + 1});
}
  render() {
    return (
      <View>
        <AppHeader />
        <View>
        
          <View style={styles.buttonsContainer}>
          
           <Button title= <Text style = {{
          fontSize:50
        }}> <b>Player 1</b> </Text>
        color={this.state.buttonColor} onPress={this.changeColor}/>
        <Text style={{ marginTop: 50, marginLeft: 170 ,fontSize:'50',width:100}}>
        </Text>
     


<TouchableOpacity
            style={{
              width: 300,
              height: 60,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 25,
              backgroundColor:"#FF0000"  ,
            }}
             onPress={this.incrementCounter100}
            color ={this.buttonColor}
            >
            <Text> 100 points </Text>
          </TouchableOpacity> 



<TouchableOpacity
            style={{
              width: 300,
              height: 60,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 25,
              backgroundColor:"#FFA500"  ,
            }}
             onPress={this.incrementCounter50}
            color ={this.buttonColor}
            >
            <Text> 50 points </Text>
          </TouchableOpacity>



<TouchableOpacity
            style={{
              width: 300,
              height: 60,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 25,
              backgroundColor:"lightblue"  ,
            }}
             onPress={this.incrementCounter25}
            color ={this.buttonColor}
            >
            <Text> 25 points </Text>
          </TouchableOpacity>


<TouchableOpacity
            style={{
              width: 300,
              height: 60,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 25,
              backgroundColor:"lightgreen"  ,
            }}
             onPress={this.incrementCounter10}
            color ={this.buttonColor}
            >
            <Text> 10 points </Text>
          </TouchableOpacity>
        



 <Text style = {{
  textAlign:'center',
  fontSize:15,
}}><b>========points:{this.state.counter}========</b></Text> 
  <Text style={{ marginTop: 50, marginLeft: 170 ,fontSize:'50',width:100}}>
        </Text>

        <Button title= <Text style = {{
fontSize:50
        }}> <b>Player 2</b></Text>
         color={this.state.buttonColor2} onPress={this.changeColor2}/>
        <Text style={{ marginTop: 50, marginLeft: 170 }}>
          
        </Text>


<TouchableOpacity
            style={{
              width: 300,
              height: 60,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 25,
              backgroundColor:"red"  ,
            }}
             onPress={this.incrementCounter1100}
            color ={this.buttonColor}
            >
            <Text> 100 points </Text>
          </TouchableOpacity>



<TouchableOpacity
            style={{
              width: 300,
              height: 60,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 25,
              backgroundColor:"orange"  ,
            }}
             onPress={this.incrementCounter150}
            color ={this.buttonColor}
            >
            <Text> 50 points </Text>
          </TouchableOpacity>


<TouchableOpacity
            style={{
              width: 300,
              height: 60,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 25,
              backgroundColor:"lightblue"  ,
            }}
             onPress={this.incrementCounter125}
            color ={this.buttonColor}
            >
            <Text> 25 points </Text>
          </TouchableOpacity>


<TouchableOpacity
            style={{
              width: 300,
              height: 60,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 25,
              backgroundColor:"lightgreen"  ,
            }}
             onPress={this.incrementCounter110}
            color ={this.buttonColor}
            >
            <Text> 10 points </Text>
          </TouchableOpacity>



<Text style = {{
  textAlign:'center',
  fontSize:15,
   justifyContent: 'center',
  alignItems: 'center',

}}><b>========points:{this.state.counter1}=======</b></Text> 

  <Text style={{ marginTop: 50, marginLeft: 170 ,fontSize:'50',width:100}}>
        </Text>

  <Button title=<b>Reset</b> color="gray" onPress={this.resetCounter}/>
          


         <Text style={{marginTop:50,
        textAlign: 'center',
        fontSize: 30 ,
        backgroundColor: '#',
        textDecorationStyle: 'crypto',
       
        
        
        
        
        }}><b>         WHO WON          </b></Text>

<p>
        <TouchableOpacity
            style={{
              width: 300,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
              backgroundColor:"green" ,
            }}
            onPress={() => this.props.navigation.navigate('NewsScreen')}>
           
            <Text> player1</Text>
          </TouchableOpacity> 

</p>
<TouchableOpacity
            style={{
              width: 300,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
              backgroundColor:"green" ,
            }}
             onPress={() => this.props.navigation.navigate('JokeScreen')}>
            
            <Text> player2</Text>
          </TouchableOpacity> 



            
          </View>
          <View style={styles.ratingContainer}>
            <Text style={{ textAlign: 'center', margin:5 }}>Rate us</Text>
            <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",padding:20}}>
             <Text>{this.state.like}</Text>
             <Text>{this.state.dislike}</Text>
             </View>
              </View>
              <View style={styles.parent}>
            <TouchableOpacity               style={styles.buttons}
onPress ={this.likeCount}>
                         <Text>Like</Text>

            </TouchableOpacity>
            <TouchableOpacity  style={styles.buttons} onPress ={this.dislikeCount}>
                                       <Text>Dislike</Text>

            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    margin: 10,
    width: 200,
    height: 50,
  },
   ratingContainer: {
        marginLeft: 50,
marginRight: 50,

  },
    
  parent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around"},
});
