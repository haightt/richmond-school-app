import React, { useState } from 'react';
import { View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';

import Colors from './constants/Colors';
import RichmondNavigator from './navigation/RichmondNavigator';
import { enableScreens } from 'react-native-screens';
import staffReducer from './store/reducers/staff';



enableScreens();

const rootReducer = combineReducers({
  staff: staffReducer
});


const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};


export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  };

  return (
    <Provider store={store}>
    <View style={{ flex: 1, backgroundColor: Colors.primary }}>
      <RichmondNavigator />
    </View>
    </Provider>
  );


};




