import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const classImages = {
    1: { src: '/images/1.gif', width: 250, height: 250, position: 'absolute', bottom: '32%', left: '42%'},
    2: { src: '/images/2.gif', width: 340, height: 340, position: 'absolute', bottom: '12%', left: '32%' },
    4: { src: '/images/4.gif', width: 350, height: 350, position: 'absolute', bottom: '-6%', left: '36%' },
    8: { src: '/images/8.gif', width: 350, height: 350, position: 'absolute',bottom: '4%', left: '25%' },
    16: { src: '/images/16.gif', width: 340, height: 340, position: 'absolute',bottom: '9%', left: '15%' },
    32: { src: '/images/32.gif', width: 340, height: 340, position: 'absolute',bottom: '-6%', left: '5%' },
  };

  const classFilters = {
    1: 'Dewdrop',
    2: 'Tulip',
    4: 'Poppy',
    8: 'Marigold',
    16: 'Acorn',
    32: 'Clover'
  };

  const [input, setInput] = useState("");

  const getImage = () => {
    const selectedImageKeys = Object.keys(classFilters).filter(
      key => (input & parseInt(key)) > 0
    );

    return selectedImageKeys.map(key => {
      const selectedImage = classImages[key];
      return (
        <div key={key} className={styles.imageContainer} style={{ ...selectedImage }}>
          <Image src={selectedImage.src} alt={`Image for input ${key}`} width={selectedImage.width} height={selectedImage.height} />
        </div>
      );
    });
  };

  return (
    <>
      <Head>
        <title>Petalbud</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      
      <div className={`${styles.main}`}>

        <main>

          <Header/>

          <input 
            id="input"
            className={`${styles.bitmask}`}
            type="text"
            placeholder="Make the shy Petalbuds appear"
            value={input}
            onChange={event => setInput(event.target.value)}
          />

          {getImage()}

          <div className={`${styles.classFiltersStyle}`}>
            <table>
              <tbody>
                {Object.keys(classFilters).map(item => (
                  <tr key={item}>
                    <td>{item}</td>
                    <td>{classFilters[item]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
        </main>
        
        <Footer/>
        
      </div>
    </>
  );
}

