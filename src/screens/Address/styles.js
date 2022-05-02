import {Platform, StyleSheet, I18nManager} from 'react-native';
import Colors from '../../common/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    width: '100%',
    height: '100%',
  },
  notificationContainer: {
    width: '100%',
    height: 60,
    backgroundColor: Colors.royalYellow,
    elevation: 5,
    paddingLeft: 10,
  },
  notificationTitle: {
    fontSize: 13,
    fontWeight: '900',
    color: Colors.black,
    marginTop: 5,
  },
  txt: {
    fontSize: 12,
    width: '80%',
    color: Colors.black,
  },
  grantContainer: {
    width: 55,
    height: 25,
    backgroundColor: Colors.black,
    borderRadius: 10,
    position: 'absolute',
    right: 10,
    bottom: 20,
  },
  grant: {
    fontSize: 10,
    fontWeight: 'bold',
    color: Colors.white,
    alignSelf: 'center',
    marginTop: 5,
  },
  headingContainer: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 10,
  },
  heading: {
    fontSize: 13,
    fontWeight: '900',
    color: Colors.black,
    marginTop: 5,
  },
  required: {
    fontSize: 9,
    color: '#838383',
    marginTop: 5,
    marginLeft: 20,
    alignSelf: 'center',
  },
  label: {
    marginLeft: 15,
    fontSize: 12,
    marginTop: 8,
    color: Colors.black,
  },
  input: {
    width: '80%',
    height: 35,
    backgroundColor: '#F2F2F2',
    borderColor: Colors.black,
    borderWidth: 1,
    borderRadius: 6,
    paddingLeft: 15,
    marginLeft: 15,
    marginTop: 5,
  },
  input1: {
    width: 130,
    height: 35,
    backgroundColor: '#F2F2F2',
    borderColor: Colors.black,
    borderWidth: 1,
    borderRadius: 6,
    paddingLeft: 15,
    marginLeft: 15,
    marginTop: 5,
  },
  row:{flexDirection: 'row'},
  mapContainer:{height: '45%'},
  addressContainer:{height: '55%'}
});
