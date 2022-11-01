import React from 'react';
import { Button, Linking, ScrollView, StyleSheet, Image, Text, View, TextInput} from 'react-native';
import Navigator from './Routes/screenstack';

export default function App() {
  return (  
    <ScrollView bounces={false}> 
      <View style = {styles.container}>
      
        <View style = {styles.topbar}>
          <Button title = 'Home Page'  onPress={()=>{Linking.openURL('hd fittps://qmind.ca/')}}></Button>
          <Button title = 'FaceBook'  onPress={()=>{Linking.openURL('https://www.facebook.com/QuMIND/')}}></Button>
        </View> 

        <TextInput
        style={styles.input}
        placeholder='Search'
        />

        <Image
          style={styles.image}
          source={require('./assets/Qmind.png')}
          resizeMode='stretch'
        />
        <Text style = {styles.text}> QMind</Text>

        <View style = {styles.writingbox}>
          <Text style = {styles.text2}> 
            QMIND is Canada’s largest undergraduate AI 
            and machine learning organization with over 200 members and a portfolio 
            that includes 30+ client-facing consulting teams, a published AI research 
            wing, an extensive full-year educational program, a first of its kind 
            incubator program, and a 300 delegate conference held annually in Toronto, ON.
          </Text>
        </View>

        <Text style = {styles.text2}> 
        QMIND focuses heavily on the production of computer-based models that use neural 
        networks to automate or develop unique solutions to real-world problems. Breeding 
        a culture of permanence and dedication, emphasizing low turnover rates amongst 
        its members, and having a deliberate approach to growth ensures that QMIND will 
        continue to flourish in future years.
        </Text>

        <Text style = {styles.text3}>
          225 hired members
        </Text>

        <Text style = {styles.text2}>
        Since its creation in 2018, QMIND has increased from hiring 35 members to 
        225 members—more than a six-fold increase in just two and a half years!
        </Text>

        <View style = {styles.botbar}>
          <Text style = {styles.text4}>
            Follow us
          </Text>

          <View style = {styles.button}>
              <Button title = 'LinkedIn'  onPress={()=>{Linking.openURL('https://www.linkedin.com/school/qumind')}}></Button>
          </View>

          <View style = {styles.button}>
            <Button title = 'Instagram'  onPress={()=>{Linking.openURL('https://www.instagram.com/qmind.ai/?hl=en')}}></Button>
          </View>

          <View style = {styles.button}>
            <Button title = 'Youtube'  onPress={()=>{Linking.openURL('https://www.youtube.com/channel/UC69LsGj99FSN8cdP_Igs0XA')}}></Button>
          </View>

        </View>

      </View>

    </ScrollView> 
  );
}

const styles = StyleSheet.create({
  button:{
    height: 40,
    width: 100,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  container:{
    fill: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
  },
  topbar: {
    height: 80,
    alignSelf: 'stretch',
    flexDirection: 'row',
    backgroundColor: 'black',
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
  },
  botbar: {
    height: 200,
    alignSelf: 'stretch',
    flexDirection: 'column',
    backgroundColor: 'gray',
    alignItems: 'center',
  },
  writingbox:{
    height: 195,
    alignSelf: 'stretch',
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 5,
  },
  text:{
    color: 'black',
    fontSize: 50,
    fontStyle: 'italic',
    marginTop: 20,
  },
  text2:{
    color: 'black',
    fontSize: 15,
    fontStyle: 'italic',
    margin: 20,
  },
  text3:{
    color: 'black',
    fontSize: 30,
    fontStyle: 'bold',
    marginTop: 2,
  },
  text4:{
    color: 'white',
    fontSize: 15,
    fontStyle: 'italic',
  },
  image: {
    width: 200,
    height: 300,
    marginTop: 30,
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
  },
});
