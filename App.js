//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, ButtonProps, Image } from 'react-native';
import { Carousel } from './components/Carousel';
import image from './assets/images/paisaje_1.png';
//import img2 from './assets/images/2.jpg';
//import img3 from './assets/images/3.jpg';
//import img4 from './assets/images/4.jpg';

export default function App() {
  return (
    <View style={styles.container}>
      <Carousel>
            <Image style={styles.images} source={image}/>
      </Carousel>
      {/*<Text style={styles.title}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Image style={styles.images}/>
      <Button style={styles.button1}>Next</Button>
      <Button style={styles.button2}>Next</Button>
      <Carousel/>

        <Titulo>Productos Destacados</Titulo>
        <Slideshow controles={true}>
          <Slide>
            <a href="https://www.falconmaters.com">
              <img src={img1} alt=""/>
            </a>
            <TextoSlide>
              <p>15% descuento en productos Apple</p>
            </TextoSlide>
          </Slide>
          <Slide>
            <a href="https://www.falconmaters.com">
              <img src={img2} alt=""/>
            </a>
            <TextoSlide>
              <p>15% descuento en productos Apple</p>
            </TextoSlide>
          </Slide>
          <Slide>
            <a href="https://www.falconmaters.com">
              <img src={img3} alt=""/>
            </a>
            <TextoSlide>
              <p>15% descuento en productos Apple</p>
            </TextoSlide>
          </Slide>
          <Slide>
            <a href="https://www.falconmaters.com">
              <img src={img4} alt=""/>
            </a>
            <TextoSlide>
              <p>15% descuento en productos Apple</p>
            </TextoSlide>
          </Slide>
        </Slideshow>

        <Titulo>Productos Destacados</Titulo>
        <Slideshow controles={true} autoplay={true} velocidad="3000" intervalo="5000">
          <Slide>
            <a href="https://www.falconmaters.com">
              <img src={img1} alt=""/>
            </a>
            <TextoSlide colorFondo="navy">
              <p>15% descuento en productos Apple</p>
            </TextoSlide>
          </Slide>
          <Slide>
            <a href="https://www.falconmaters.com">
              <img src={img2} alt=""/>
            </a>
            <TextoSlide>
              <p>15% descuento en productos Apple</p>
            </TextoSlide>
          </Slide>
        </Slideshow>*/}


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#292929',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff'
  },
  images:{
    height: 200,
    width: '100%',
  },
  button1: {
    marginTop: 10,
    backgroundColor: 'lightgreen'
  },
  button2: {
    marginTop: 10,
    backgroundColor: 'lightgreen'
  }
});
