import React, { useState } from "react";
import { View, StyleSheet,Text,Alert,TextInput,ActivityIndicator,TouchableOpacity,Image,Button } from "react-native";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const toggleLoading = () => {
    setIsLoading(!isLoading);
  };
  return (
    <View style={styles.screen}>
      <Text style={styles.yourportal}>STUDENT PORTAL</Text> <br/>
      <Image style={styles.picture}
        source={require("./assets/pic.jpg")}/>
        <View style={styles.upperr}>
        <Image style={styles.log}
        source={require("./assets/log.png")}/>
        <Text style={styles.program}>Bsc in Software Engineering With Multimedia</Text>
        </View>
      <Text style={styles.name}> LEMAOANA</Text><br/>
      <Text style={styles.others}>LEJONE EDWARD</Text><br/>
      <Text style={styles.id}>901013625</Text><br/>
      <TextInput style={styles.input} placeholder="Seach" />
      <TouchableOpacity onPress={toggleLoading}>
        <View
          style={{
            ...styles.button,
            backgroundColor: isLoading ? "#4caf50" : "#8bc34a",
          }}
        />
        <Text style={styles.course}>Semester: Year 2 Sem 1 / Term: 2021-08 / Status: active </Text>
        <View style={styles.rectangle}>
        <Text style={styles.transcrip1}>
           <Text style={styles.course}>Module          Name                                                                                                                                 Credits<br/>
            <br/>
            </Text>
            <br/>
            BICP2112       C++ Programming----------------------------------------------------------------------------------A<br/>
            <br/>
            BICL2112       Calculus 11-------------------------------------------------------------------------------------------B<br/>
            <br/>
            BIMT2112       Multimedia Technology-----------------------------------------------------------------------------A<br/>
            <br/>
            BIDC2112       Data Communication and Networking-------------------------------------------------------------B<br/>
            <br/>
            BIWD2112       Principles of Web Desgn---------------------------------------------------------------------------A<br/>
            <br/>
            BIIT2112        Funtamentals of Internet Techonology--------------------------------------------------------------B<br/>
          </Text>
        </View>
        <Text style={styles.course}>Semester: Year 2 Sem 2 / Term: 2022-02 / Status: active </Text>
        <View style={styles.rectangle}>
        <Text style={styles.transcrip1}>
           <Text style={styles.course}>Module          Name                                                                                                                                 Credits<br/>
            <br/>
            </Text>
            <br/>
            BICP2112       C++ Programming II--------------------------------------------------------------------------------A<br/>
            <br/>
            BICL2114       JAVA Programming I---------------------------------------------------------------------------------B<br/>
            <br/>
            BIMT2212       Database System------------------------------------------------------------------------------------A<br/>
            <br/>
            BIDC223        Mobile Devivice Programming----------------------------------------------------------------------B<br/>
            <br/>
            BIWD2112       Probability & Statistics-----------------------------------------------------------------------------A<br/>
            <br/>
            BIIT2112       Software modelling & Analysiss--------------------------------------------------------------------B<br/>
          </Text>
        </View>

          <Button
        title="Wait for coming semester"
        color="#f194ff"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />            
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    flex: 1,
  },
  upperr:{
    flexDirection: "row",
    alignItems: 'center',

  },
  picture:{
    width: 100,
    height: 100,
    borderRadius: 60,
  },
  log:{
    width: 50,
    height: 50,
  },
  rectangle: {
    width: 350 * 2,
    height: 270,
    borderWidth: 3,
    borderColor: 'red',
    borderRightColor:'blue',
    borderLeftColor:'blue',
    marginTop: 5,
    backgroundColor: "grey",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderRadius: 10,
  },
  input: {
    width: 300,
    height: 40,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 15,
    fontSize: 16,
  },
  name:{
    fontSize:10,
    color:'black',
    fontWeight:'bold',
    alignItems: 'center',
    marginTop: 5,
},
others:{
  fontSize:10,
  color:'black',
  fontWeight:'bold',
  alignItems: 'center',
  marginTop: 5,
},
id:{
  fontSize:10,
  color:'black',
  fontWeight:'bold',
  lignItems: 'center',
  marginTop: 5,
},
program:{
  fontSize:25,
  color:'black',
  fontWeight:'bold',
  lignItems: 'center',
  marginTop: 5,
},
yourportal: {
  fontSize:25,
  color:'black',
  fontWeight:'bold',
  lignItems: 'center',
  marginTop: 5,
},
button: {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "left",
  width: 200,
  height: 70,
  borderWidth: 1,
  borderColor: "#666",
  borderRadius: 10,
  marginTop: 10,
  
},
buttonText: {
  color: "#fff",
  fontWeight: "bold",
  fontSize: 20
},
buttonContainer: {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "left",
  width: 700,
  height: 200,
  borderWidth: 1,
  borderColor: "#666",
  borderRadius: 10,
  marginTop: 10,
},
parent: {
  flex: 1,
  flexDirection: "row",
  justifyContent: "space-around",
},
course:{
  fontWeight:'bold',
  fontSize:14,
},

});

export default App;