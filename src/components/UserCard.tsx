import React, {useState, useEffect} from 'react';
import Colors from '../components/Colors';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  SafeAreaView,
  Image,
} from 'react-native';
import {Card} from 'react-native-paper';

interface UserCardProps {
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}

const width = Dimensions.get('window').width - 16;

export function UserCard({
  first_name,
  last_name,
  email,
  avatar,
}: UserCardProps) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Card style={CardStyles.cardOutlet}>
        <View style={CardStyles.layoutStyle}>
          <Image
            style={CardStyles.imageStyle}
            source={{
              uri: avatar,
            }}
          />
          <View style={CardStyles.textStyle}>
            <Text
              style={CardStyles.myText}>{`${first_name} ${last_name}`}</Text>
            <Text style={CardStyles.myText}>{email}</Text>
          </View>
        </View>
      </Card>
    </SafeAreaView>
  );
}

const rad = 80;
export const CardStyles = StyleSheet.create({
  cardOutlet: {
    height: 140,
    width: width,
    borderRadius: 10,
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 16,
    elevation: 4,
    backgroundColor: Colors.GREY_2,
    flexDirection: 'row',
  },
  imageStyle: {
    width: rad,
    height: rad,
    borderRadius: rad / 2,
    margin: 4,
    padding: 12,
  },
  textStyle: {
    marginTop: 24,
    marginLeft: 16,
  },
  myText: {
    fontSize: 16,
  },
  layoutStyle: {
    flexDirection: 'row',
    padding: 8,
    // marginTop: 8,
    alignContent: 'center',
  },
});
