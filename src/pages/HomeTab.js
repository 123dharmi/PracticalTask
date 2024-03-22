import React from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import {connect, useSelector} from 'react-redux';
import {toggleFavorite} from '../Redux/actions/action';
import {Images} from '../assets';

const HomeTab = ({data, toggleFavorite}) => {
  const renderItem = ({item}) => (
    <View
      style={{
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <Image source={item.userImg} style={{height: 35, width: 35}} />

        <Text style={{fontSize: 20, fontWeight: '700', left: 10}}>
          {item.name}
        </Text>
      </View>
      <View style={{flex: 1, alignItems: 'flex-end'}}>
        <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
          <Image
            source={item.favorite ? Images.fillFlow : Images.blankFlow}
            style={{height: 25, width: 25}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={{flex: 1, backgroundColor: 'lightgrey'}}>
      <View style={Styles.subContainer}>
        <View style={Styles.imgVw}>
          <Image source={Images.flower} style={{height: 30, width: 30}} />
        </View>
      </View>
      <View style={{marginVertical: 10, marginHorizontal: 10}}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
};
const Styles = StyleSheet.create({
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
});

const mapStateToProps = state => ({
  data: state.data,
});

const mapDispatchToProps = {
  toggleFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeTab);


