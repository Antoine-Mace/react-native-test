// @flow

import React, { PureComponent } from 'react';
import { ListItem, Body, Left, Right, Text, Thumbnail } from 'native-base';
import CustomerClass from '../../../classes/customerClass.js'
import { avatarPlaceholder } from '../../../assets/index.js'
import styles from '../../../styles/main.js'

type Props = {
  search: string,
  data: CustomerClass
}

export default class CustomerRow extends PureComponent<Props> {

 filterSearch = (name: string): boolean => {
    const sanetizeString = (str) => str.toString().replace(/\s/g,'').toLowerCase()
    if (!this.props.search)
      return true;
    if (name && sanetizeString(name).search(sanetizeString(this.props.search)) !== -1)
      return true
    return false
  }

  render() {
    const { get } = this.props.data;
    const avatarUri = get('avatarUri');

    if (!this.filterSearch(get('name'))) {
      return null;
    }
    return (
      <ListItem avatar style={styles.ListItem}>
        <Left>
          <Thumbnail source={avatarUri ? { uri: avatarUri  } : avatarPlaceholder} />
        </Left>
        <Body>
          <Text>{get('name') || ' '}</Text>
          <Text note>{get('emailAddress') || ' '}</Text>
        </Body>
        <Right>
          <Text note>{get('currentPosition') || ' '}</Text>
        </Right>
      </ListItem>
    );
  }
}