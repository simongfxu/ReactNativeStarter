import React, { Component } from 'react'
import { Text, Button } from 'react-native'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react/native'
import {Container, Header, Body, Content, Icon, Left, Right, Title, List, ListItem} from 'native-base'

@inject('homeStore')
@observer
export default class UserScreen extends Component {
  static propTypes = {
    homeStore: PropTypes.object,
    navigation: PropTypes.object
  }

  viewDetail = item => {
    let {homeStore, navigation} = this.props
    homeStore.select(item.id)
    navigation.push('Detail')
  }

  render () {
    const { homeStore } = this.props
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon
                active
                name="menu"
              />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Text>Items count: {homeStore.items.length}</Text>
          <Button onPress={() => homeStore.push()} title="Add One Item" />
          <List>
            {
              homeStore.items.map(item => {
                return (
                  <ListItem
                    key={item.id}
                    onPress={() => this.viewDetail(item)}
                  >
                    <Text>{item.id}</Text>
                  </ListItem>
                )
              })
            }
          </List>
        </Content>
      </Container>
    )
  }
}
