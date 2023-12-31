//import liraries
import {Home2} from 'iconsax-react-native';

import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {AppColors} from '../../theme/appColors';
import {getProductList} from '../../store/actions/homeActions';
// create a component
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductList({})), [];
  });

  return (
    <View style={styles.container}>
      <Text style={{color: AppColors.RED}}>Home</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

//make this component available to the app
export default Home;
