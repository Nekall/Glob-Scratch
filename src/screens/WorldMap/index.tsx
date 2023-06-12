import React from 'react';
import {View} from 'react-native';
import {SvgXml} from 'react-native-svg';

const WorldMap = () => {
  return (
    <View>
      <SvgXml
        xml={require('../../assets/world.svg')}
        width="100%"
        height="100%"
      />
    </View>
  );
};

export default WorldMap;

// import React, {useEffect, useState} from 'react';
// import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
// import Geolocation from '@react-native-community/geolocation';

// const WorldMap = ({navigation}: any) => {
//   const [geoLocationPerm, setGeoLocationPerm] = useState<any>({
//     authorized: false,
//     error: null,
//   });

//   useEffect(() => {
//     Geolocation.requestAuthorization(
//       () => {
//         setGeoLocationPerm({authorized: true, error: null});
//       },
//       (error: any) => {
//         console.log(error);
//         switch (error) {
//           case error.PERMISSION_DENIED === 1:
//             setGeoLocationPerm({
//               authorized: false,
//               error: 'Permission refusée',
//             });
//             break;
//           case error.POSITION_UNAVAILABLE === 2:
//             setGeoLocationPerm({
//               authorized: false,
//               error: 'Position indisponible',
//             });
//             break;
//           case error.TIMEOUT === 3:
//             setGeoLocationPerm({
//               authorized: false,
//               error: 'Temps de réponse dépassé',
//             });
//             break;
//           default:
//             setGeoLocationPerm({authorized: false, error: 'Erreur inconnue'});
//         }
//       },
//     );
//   }, []);

//   useEffect(() => {
//     Geolocation.getCurrentPosition(
//       (position: any) => {
//         console.log(position);
//       },
//       (error: any) => {
//         console.log(error);
//       },
//       {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
//     );
//   }, []);

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate('Profil')}>
//         <Text style={styles.textButton}>Profil</Text>
//       </TouchableOpacity>
//       <Text>WorldMap</Text>
//       <Text>
//         Géolocalisation :{' '}
//         {geoLocationPerm.authorized
//           ? 'Geolocalisation activée'
//           : geoLocationPerm.error}
//       </Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 16,
//   },
//   button: {
//     backgroundColor: '#CBA365',
//     padding: 10,
//     borderTopLeftRadius: 15,
//     borderBottomLeftRadius: 15,
//     position: 'absolute',
//     top: 10,
//     right: 0,
//   },
//   textButton: {
//     color: '#141311',
//     fontSize: 18,
//   },
// });

// export default WorldMap;
