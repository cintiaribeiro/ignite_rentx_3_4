import React from 'react'
import { StatusBar } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import Logo from '../../assets/logo.svg'

import { Car } from '../../components/Car'

import {
 Container, 
 Header,
 HeaderContent,
 TotalCars,
 CarList
} from './styles'

export function Home() {
  const carDataOne = {
    brand: "Audi",
    name: "RS 5 Caupé",
    rent:{
      period: "Ao dia",
      price: "150",
    },
    thumbnail: "https://mediaservice.audi.com/media/live/50900/fly1400x601n1/8wc/2023.png?wid=850"
  }

 return (
  <Container>
    <StatusBar
      barStyle='light-content'
      translucent
      backgroundColor='transparent'
    />
    <Header>
      <HeaderContent>
        <Logo 
          width={RFValue(108)}
          height={RFValue(12)}
        />
        <TotalCars> Total de 12 carros</TotalCars>
      </HeaderContent>
    </Header>
    <CarList
      data={[1,2,3,5,6,7,8]}
      keyExtractor={item => String(item)}
      renderItem={({item})=> <Car data={ carDataOne }/>}
    />
  </Container>   
 )
}