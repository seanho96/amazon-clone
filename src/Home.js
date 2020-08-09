import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_FT_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB408004054_.jpg"
        alt=""
      />

      <div className="home__row">
        <Product
          id="12345"
          title="Roberts Radio REV-ISTREAM3MB Retro DAB/DAB+ FM Wireless Portable Digital Bluetooth Radio Alexa Voice Controlled Smart Speaker Revival iStream 3 - Midnight Blue  "
          price={194.03}
          rating={5}
          image="https://m.media-amazon.com/images/I/41c-LcBVt7L._AC_SY161_.jpg"
        />
        <Product
          id="09876"
          title="Tile Style Key Finder, Phone Finder, Anything Finder - Champagne"
          price={24.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/31ATbf96anL._AC_SY161_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="78912"
          title="Bang & Olufsen Beoplay M5 Wireless Speaker - Natural"
          price={459.93}
          rating={5}
          image="https://m.media-amazon.com/images/I/41nzZuMbzCL._AC_SY161_.jpg"
        />
        <Product
          id="54321"
          title="Dell XPS 15 7590 Laptop: Core i5-9300H, 256GB SSD, 8GB RAM, 15.6 Full HD IPS 500-nits Display, Backlit Keyboard"
          price={12.75}
          rating={5}
          image="https://m.media-amazon.com/images/I/91WgL3IbNIL._AC_UY218_.jpg"
        />
        <Product
          id="12464"
          title="Cloud Neon Light, Cute Neon Cloud Sign, Battery or USB Powered Night Light as Wall Decor for Kids Room, Bedroom, Festival, Party (Pink)"
          price={15.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/51MT4U3WrLL._AC_UL320_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="123456"
          title="Victrola Broadway Bluetooth Clock Radio with Analogue Display - White"
          price={79.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/51KFaYhYq9L._AC_SY161_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
