import * as React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import SimpleButton from '../../components/Button/SimpleButton';
import styles from './styles';

function Address(props) {
  const [officeNo, setOfficeNo] = React.useState('');
  const [city, setCity] = React.useState('');
  const [pincode, setPinCode] = React.useState('');
  const [addres, setAddress] = React.useState('');
  return (
    <>
      <View style={styles.container}>
        <View style={styles.mapContainer}></View>

        <View style={styles.addressContainer}>
          <View style={styles.notificationContainer}>
            <Text style={styles.notificationTitle}>
              Location Permission is off
            </Text>
            <Text style={styles.txt}>
              Please allow nirvana access to your location to find restaurants
              near you
            </Text>
            <TouchableOpacity style={styles.grantContainer}>
              <Text style={styles.grant}>GRANT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Add Delivery Address :</Text>
            <Text style={styles.required}>All fields are required</Text>
          </View>

          <Text style={styles.label}>Apt./ Office No</Text>
          <TextInput
            placeholder={'Apt. / Office No.'}
            value={officeNo}
            onChangeText={e => setOfficeNo(e)}
            style={styles.input}
          />

          <View style={styles.row}>
            <View>
              <Text style={styles.label}>City</Text>
              <TextInput
                placeholder={'City'}
                value={city}
                onChangeText={e => setCity(e)}
                style={styles.input1}
              />
            </View>
            <View style={{marginLeft: 20}}>
              <Text style={styles.label}>Pincode</Text>
              <TextInput
                placeholder={'Pincode'}
                value={pincode}
                onChangeText={e => setPinCode(e)}
                style={styles.input1}
              />
            </View>
          </View>

          <Text style={styles.label}>Address</Text>
          <TextInput
            placeholder={'Address'}
            value={addres}
            onChangeText={e => setAddress(e)}
            style={styles.input}
          />

          <SimpleButton
            title="Save & Continue"
            onPress={() => props.navigation.navigate('Home')}
          />
        </View>
      </View>
    </>
  );
}

export default Address;
