/** @format */
import React from 'react'
import { AppRegistry } from 'react-native'

import Header from './src/components/Header'

const App = () => {
  return <Header headerText="Almbsssums" />
}

AppRegistry.registerComponent('albums', () => App)
