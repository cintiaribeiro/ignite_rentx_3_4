import React from 'react'

import GasolineSvg from '../../assets/gasoline.svg'

import {
  Container,
  Details,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  CarImage,
  
} from './styles'
interface CarData {
  brand: string;
  name: string;
  rent:{
    period: string;
    price: string
  },
  thumbnail: string;
}
interface Props {
  data: CarData;
}

export function Car({data}: Props) {
 return (
  <Container>
    <Details>
      <Brand>{data.brand}</Brand>
      <Name>{data.name}</Name>

      <About>
        <Rent>
          <Period>{data.rent.period}</Period>
          <Price>{`R$ ${data.rent.period}`}</Price>
        </Rent>
        <Type>
          <GasolineSvg/>
        </Type>
      </About>
    </Details>    
    <CarImage 
      source={{ uri:data.thumbnail }} 
      resizeMode='contain'
    />
  </Container>
 )
}

// 'https://mediaservice.audi.com/media/live/50900/fly1400x601n1/8wc/2023.png?wid=850'