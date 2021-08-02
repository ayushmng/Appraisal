import React, {FC, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppStack} from './appstack';

export const MainNavigation: FC = () => {
  return (
    <NavigationContainer>
      <AppStack />
      {/* {user !== null ? <AppStack /> : <AuthStack />} */}
    </NavigationContainer>
  );
};
