
import styles from '../styles/Home.module.css'
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap'
import Link from 'next/link'
import { IoRocketOutline } from 'react-icons/io5'
import Carousel from 'react-bootstrap/Carousel';
import HeroBanner from './components/landingpage/HeroBanner';
import Trending from './components/landingpage/Trending';
import Creator from './components/landingpage/Creator';
import Hightlight from './components/landingpage/Hightlight';
import Categories from './components/landingpage/Categories';
import Discover from './components/landingpage/Discover';

export default function Home({games,categories}) {
  return (
    <>
    
    <HeroBanner/>
    <Trending/>
    <Creator games= {games}/>
    <Categories categories={categories}/>
    <Discover/>

    </>
  )
}

export const getStaticProps = async (ctx) => {
 

  const res = await fetch("http://localhost:3002/creator");
  const repon = await fetch("http://localhost:3002/categori")
  const dataCategori = await repon.json();

  const data = await res.json();


  return {
    props: {
      games: data,
      categories:dataCategori,
    },
    
  };
  
};



