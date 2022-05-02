import {Platform, StyleSheet, I18nManager} from 'react-native';
import Colors from '../../common/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    color: Colors.white,
    height: '100%',
  },
  innerContainer: {
    padding: 15,
  },
  flatlist: {
    marginTop: 20,
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  label: {
    fontWeight: '700',
    fontSize: 18,
    color: Colors.black,
    alignSelf: 'center',
  },
  txt: {
    fontWeight: '500',
    color: Colors.black,
    fontSize: 13,
    alignSelf: 'center',
  },
  popularFoodContainer: {
    width: '97%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    height: 45,
    borderRadius: 8,
    borderColor: Colors.black,
    elevation: 5,
    backgroundColor: Colors.white,
    marginTop: 15,
  },
  popularRow: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  img: {
    borderRadius: 50,
    marginLeft: 8,
  },
  marginLeft: {
    marginLeft: 10,
  },
  row: {
    flexDirection: 'row',
  },
  name: {
    fontWeight: '500',
    fontSize: 12,
    color: Colors.black,
    alignSelf: 'center',
  },
  starIcon: {
    alignSelf: 'center',
    marginLeft: 3,
  },
  rating: {
    fontWeight: '500',
    fontSize: 9,
    color: Colors.black,
    alignSelf: 'center',
  },
  place: {
    fontWeight: '500',
    fontSize: 9,
    color: Colors.black,
  },
  rightContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  arrowIcon: {
    paddingHorizontal: 5,
  },
});
