// @flow
import React, {PureComponent} from "react";
import {FlatList} from "react-native";
import TimerMixin from "react-timer-mixin";
import reactMixin from "react-mixin";
import {Container, Header, Footer, Body, Left, Right, Content, Title, Input, Text, List, Spinner} from "native-base";
import CustomerRow from "./CustomerRow/CustomerRow.js";
import {platform} from "../../styles/var/device.js";

type Props = {
  searchAction: (string) => {},
  searchReducerValue: string,
  getCustomersQueueAction: () => {},
  customersReducerValue: {
    queueRefreshTimeout: {},
    queue: [],
    queueLength: number,
    minutesToNextFree: number,
  },
  setQueueTimeoutRefreshAction: (timeout: {}) => {},
  clearQueueTimeoutRefreshAction: () => {},
  loadingReducer: boolean
};

class Customers extends PureComponent<Props> {
  setTimeout: (any, number) => {}
  clearTimeout: (timeout: {}) => {}

  componentDidMount() {
    this.props.getCustomersQueueAction();
    this.setRefreshTimeout();
  }

  componentWillUnmount() {
    if (this.props.customersReducerValue.queueRefreshTimeout) {
      this.clearTimeout(this.props.customersReducerValue.queueRefreshTimeout);
      this.props.clearQueueTimeoutRefreshAction();
    }
  }

  setRefreshTimeout = () => {
    if (!this.props.customersReducerValue.queueRefreshTimeout) {
      const newTimeout = this.setTimeout(() => {
        this.props.clearQueueTimeoutRefreshAction();
        this.props.getCustomersQueueAction();
        this.setRefreshTimeout();
      }, 30000)
      this.props.setQueueTimeoutRefreshAction(newTimeout)
    }
  }

  getKey = (item: {get: (string) => {}}, index: number) => item.get('currentPosition').toString()

  _renderCustomerItem = ({item, index}) => {
    return (
      <CustomerRow
        key={this.getKey(item, index)}
        search={this.props.searchReducerValue}
        data={item}
      />
    );
  };

  render() {
    const {searchAction, searchReducerValue, customersReducerValue: {queue, queueLength, minutesToNextFree}, loadingReducer} = this.props;
    return (
      <Container>
        <Header>
          {platform === 'ios' &&
          <Left></Left>
          }
          <Body>
          <Title>Customers</Title>
          </Body>
          <Right>
            {loadingReducer
              ? <Spinner />
              : <Text note>{queueLength != -1 ? `Queue | ${queueLength}` : ''}</Text>
            }
          </Right>
        </Header>
        <Content>
          <Input onChangeText={ (search) => searchAction(search) } placeholder={'Search'}></Input>
          <List>
            <FlatList
              initialNumToRender={10}
              extraData={searchReducerValue}
              data={queue}
              keyExtractor={this.getKey}
              getItemLayout={(data, index) => (
                { length: 80, offset: 80 * index, index }
              )}
              renderItem={this._renderCustomerItem}
            />
          </List>
        </Content>
        {(minutesToNextFree != -1) &&
        <Footer>
          <Text note>Next free : {minutesToNextFree} min</Text>
        </Footer>
        }
      </Container>
    );
  }
}

reactMixin(Customers.prototype, TimerMixin)

export default Customers