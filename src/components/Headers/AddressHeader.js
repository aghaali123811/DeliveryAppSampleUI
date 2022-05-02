import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../common/Colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';

export default function AddressHeader(props) {
  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <Entypo
          name="location-pin"
          color={Colors.red}
          size={22}
          style={styles.icon}
        />
        <Text style={styles.address}>{props.address}</Text>
      </View>
      <FontAwesome5
        name="user-circle"
        size={22}
        color={Colors.black}
        style={styles.icon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 40,
    justifyContent: 'space-between',
  },
  flex: {
    flexDirection: 'row',
  },
  icon: {
    alignSelf: 'center',
  },
  address: {
    color: Colors.black,
    fontSize: 12,
    fontFamily: 'Poppins',
    alignSelf: 'center',
  },
});
