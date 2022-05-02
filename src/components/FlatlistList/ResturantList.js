import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Colors from '../../common/Colors';

export default function ResturantList(props) {
  const {item} = props;
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={require('../../assets/food.png')} style={styles.img} />
      </View>
      <View style={{marginLeft: 10}}>
        <Text style={styles.resturantName}>{item.resturantName}</Text>
        <Text style={styles.location}>{item.location}</Text>
        <View style={styles.row}>
          <Entypo name="star" color={Colors.black} style={styles.lowCon} />
          <Text style={styles.rating}>{item.rating}</Text>
          <Text style={styles.area}>{item.area}</Text>
        </View>
      </View>

      <View style={styles.offContainer}>
        <Text style={styles.off}>{item.off}</Text>
      </View>
      <Text style={styles.mins}>{item.mins}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 6,
    elevation: 5,
    marginTop: 15,
  },
  imgContainer: {
    width: 45,
    height: 45,
    backgroundColor: Colors.royalYellow,
    borderRadius: 4,
    alignSelf: 'center',
    marginLeft: 10,
  },
  img: {
    width: 40,
    height: 40,
    alignSelf: 'center',
    marginTop: 3,
  },
  resturantName: {
    fontWeight: 'bold',
    color: Colors.black,
    fontSize: 13,
    marginTop: 10,
  },
  location: {
    fontSize: 11,
    fontWeight: '500',
    color: Colors.black,
    marginTop: 2,
  },
  row: {
    flexDirection: 'row',
    marginTop: 3,
  },
  lowCon: {
    alignSelf: 'center',
    marginLeft: 2,
  },
  rating: {
    fontSize: 10,
    fontWeight: '500',
    color: Colors.black,
  },
  area: {
    fontSize: 10,
    fontWeight: '500',
    color: Colors.black,
    marginLeft: 10,
  },
  offContainer: {
    minWidth: 10,
    height: 25,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 7,
    backgroundColor: Colors.orange,
    position: 'absolute',
    right: 0,
  },
  off: {
    color: Colors.white,
    fontWeight: '900',
    fontSize: 11,
    paddingHorizontal: 5,
    marginTop: 4,
  },
  mins: {
    color: Colors.black,
    fontSize: 11,
    position: 'absolute',
    bottom: 13,
    right: 10,
  },
});
