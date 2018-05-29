import React, { PureComponent } from 'react';
import {StyleProvider, Root, View} from 'native-base'

import CustomersContainer from '../../containers/Customers/CustomersContainer.js';
import getTheme from "../../native-base-theme/components/index.js";
import theme from "../../native-base-theme/variables/platform.js"
import styles from "../../styles/main.js"

export default class App extends PureComponent {
  render() {
    return (
      <StyleProvider style={getTheme(theme)}>
        <View style={styles.view}>
          <Root>
            <CustomersContainer />
          </Root>
        </View>
      </StyleProvider>
    );
  }
}