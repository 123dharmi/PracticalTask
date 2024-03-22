import React from 'react';
import {View, FlatList, Text, Image, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Images} from '../assets';

const FavouriteTab = ({favorites}) => {
  const renderItem = ({item}) => (
    <View style={styles.container}>
      <View style={styles.rendersubContainer}>
        <Image source={item.userImg} style={{height: 35, width: 35}} />

        <Text style={styles.txt}>{item.name}</Text>
      </View>
      <View style={{flex: 1, alignItems: 'flex-end'}}>
        <Image source={Images.fillFlow} style={{height: 25, width: 25}} />
      </View>
    </View>
  );

  return (
    <View style={{flex: 1, backgroundColor: 'lightgrey'}}>
      <View style={styles.subContainer}>
        <View style={styles.imgVw}>
          <Image source={Images.flower} style={{height: 30, width: 30}} />
        </View>
      </View>
      <View style={{marginVertical: 10, marginHorizontal: 10}}>
        <FlatList
          data={favorites}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  subContainer: {
    height: 60,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgVw: {
    alignItems: 'center',

    height: 40,
    aspectRatio: 1,
    backgroundColor: 'white',
    borderRadius: 100,
    justifyContent: 'center',
  },
  rendersubContainer: {flex: 1, flexDirection: 'row', alignItems: 'center'},
  txt: {fontSize: 20, fontWeight: '700', left: 10},
});
const mapStateToProps = state => ({
  favorites: state.favorites,
});

export default connect(mapStateToProps)(FavouriteTab);
