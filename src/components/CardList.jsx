import React from 'react';
import Card from './Card';
import NachoLauren from '../assets/images/nacholauren.jpg';

var cardList = [
  {
    name:'Andrew Peterson',
    bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inciddunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: NachoLauren,
  },
  {
    name:'Anita Kemp',
    bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inciddunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: NachoLauren
  },
  {
    name:'Brendon Tse',
    bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inciddunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: NachoLauren
  },
  {
    name:'Carrie Schmid',
    bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inciddunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: NachoLauren
  },
  {
    name:'Christine Frank',
    bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inciddunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: NachoLauren
  },
  {
    name:'Christopher Burge',
    bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inciddunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: NachoLauren
  },
  {
    name:'Devin Cooley',
    bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inciddunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: NachoLauren
  },
  {
    name:'Erin Deuel',
    bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inciddunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: NachoLauren
  },
  {
    name:'Ethan Samuels-Ellingson',
    bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inciddunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: NachoLauren
  },
  {
    name:'Hailey Gaylor',
    bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inciddunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: NachoLauren
  },
  {
    name:'Jason Huels',
    bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inciddunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: NachoLauren
  },
  {
    name:'Jennifer Batara',
    bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inciddunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: NachoLauren
  },
  {
    name:'Joel Stockamp',
    bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inciddunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: NachoLauren
  },
  {
    name:'Kira Roberts',
    bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inciddunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: NachoLauren
  },
  {
    name:'Lauren Musante',
    bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inciddunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: NachoLauren
  },
  {
    name:'Loewy Malkovich',
    bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inciddunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: NachoLauren
  },
  {
    name:'Micah Zaayer',
    bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inciddunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: NachoLauren
  },
  {
    name:'Mike McShane',
    bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inciddunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: NachoLauren
  },
  {
    name:'Molly Stambaugh',
    bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inciddunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: NachoLauren
  },
  {
    name:'Neha Malhotra',
    bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inciddunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: NachoLauren
  },
  {
    name:'Nikhil Batta',
    bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inciddunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: NachoLauren
  },
  {
    name:'Rachael Bouissey',
    bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inciddunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: NachoLauren
  },
  {
    name:'Sofia Giordano',
    bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inciddunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: NachoLauren
  }
];

function CardList(){
  return(
    <div className='container'>
      <div className='row'>
        {cardList.map((card, index)=>
          <Card
            name={card.name}
            bio={card.bio}
            img={card.img}
            key={index}
          />
        )}
      </div>
    </div>
  );
}

export default CardList;