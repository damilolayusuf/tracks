import React, {useContext} from 'react';
import {View, StyleSheet, Text, ActivityIndicator} from 'react-native';
import MapView, {Polyline} from 'react-native-maps';
import {Context as LocationContext} from '../context/LocationContext';


const Map = ()=>{
    const {state: {currentLocation}} = useContext(LocationContext)

  if( !currentLocation){
       return <ActivityIndicator size = "large" style = {{marginTop: 200}}/>
   } 
 console.log(currentLocation.coords)
 //console.log(state);



    return (
            <MapView 
                style = {styles.map}
                initialRegion={{
                    ...currentLocation.coords,
                   // longitude: -75.649830,
                    //latitude: 45.374670,
                    latitudeDelta: 0.01,
                    longitudeDelta:0.01
                
                }}
                region = {{
                    ...currentLocation.coords,
                   //longitude: -75.649830,
                    //latitude: 45.374670,
                    latitudeDelta: 0.01,
                    longitudeDelta:0.01
                }}
            >
            
            </MapView>
    )
};

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default Map;