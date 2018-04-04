import React, { Component } from 'react'
import { Text, Button } from 'react-native'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react/native'
import {Container, Header, Body, Content, Icon, Left, Right, Title} from 'native-base'

@inject('userStore')
@observer
export default class UserScreen extends Component {
  static propTypes = {
    userStore: PropTypes.object,
    navigation: PropTypes.object
  }

  render () {
    const { userStore } = this.props
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
            <Title>Detail</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Text>Hi, {userStore.username}!</Text>
          <Button onPress={() => userStore.changeUsername('Warren Buffett')} title="Change My Username" />
          <Button onPress={() => this.props.navigation.navigate('Home')} title="Go Home" />
        </Content>
      </Container>
    )
  }
}
