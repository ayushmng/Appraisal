import {StackNavigationProp} from '@react-navigation/stack';
import React, {FC} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/reducers';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {getUsers} from '../redux/user/userAction';
import {useEffect} from 'react';
import {UserCard} from '../components/UserCard';

interface Props {
  navigation: StackNavigationProp<any>;
}

export const Home: React.FC<Props> = ({navigation}) => {
  const categoryData = useSelector(
    (state: RootState) => state.userReducer.allUser,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (categoryData.length === 0) {
      dispatch(getUsers());
    }
    console.log('Category size: ', categoryData.length);
  });
  return (
    <View style={styles.container}>
      <FlatList
        data={categoryData}
        keyExtractor={(itemKey: any) => (
          <>{console.log('Key: ', itemKey?.id)} itemKey?.id</>
        )}
        renderItem={(itemData: any) => (
          <>
            <UserCard
              first_name={itemData.item?.first_name}
              last_name={itemData.item?.last_name}
              email={itemData.item?.email}
              avatar={itemData.item?.avatar}
            />
          </>
        )}
      />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 8,
  },
});
