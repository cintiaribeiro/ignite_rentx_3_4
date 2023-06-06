import React from 'react'

import { BackButton } from '../../components/BackButton'
import { ImageSlider } from '../../components/ImageSlider'
import { Accessory } from '../../components/Accessory'
import { Button } from '../../components/Button'

import SpeedSvg from '../../assets/speed.svg' 
import AccelerationSvg from '../../assets/acceleration.svg' 
import ForceSvg from '../../assets/force.svg' 
import GasolineSvg from '../../assets/gasoline.svg' 
import ExchangeSvg from '../../assets/exchange.svg' 
import PeopleSvg from '../../assets/people.svg' 

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Descriptions,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Accessories,
  Footer
} from './styles'



export function CarDetails() {
 return (
  <Container>
    <Header>
      <BackButton onPress={()=>{}}/>
    </Header>
    <CarImages>
      <ImageSlider imagesUrl={["https://www.fridachiptuning.cz/fotky62869/fotos/_vyr_101_audi-rs5--1.png"]}/>
    </CarImages>
    <Content>
      <Details>
        <Descriptions>
          <Brand>Lamborghini</Brand>
          <Name>Huracan</Name>
        </Descriptions>
        <Rent>
          <Period>Ao dia</Period>
          <Price>R$ 580</Price>
        </Rent>
      </Details>
      <Accessories>
        <Accessory name="380km" icon={SpeedSvg}/>
        <Accessory name="2.3s" icon={AccelerationSvg}/>
        <Accessory name="800 HP" icon={ForceSvg}/>
        <Accessory name="Gasolina" icon={GasolineSvg}/>
        <Accessory name="Auto" icon={ExchangeSvg}/>
        <Accessory name="2 pessoas" icon={PeopleSvg}/>
      </Accessories>
      <About>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type 
      specimen book
      </About>
    </Content>
    <Footer>
      <Button title='Confirmar'/>
    </Footer>
  </Container>
 )
}