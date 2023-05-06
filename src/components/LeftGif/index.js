import * as React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import styles from './styles.module.css'
import frontImg from '../../assets/images/front.png'
import { CheckCircle } from 'react-bootstrap-icons';
import gifVideo from "../../assets/gifs/gif-1.gif"

export default function App() {
  const alignCenter = { display: 'flex', alignItems: 'center' }
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);
  return (
    <div>
      <div className={styles.background} />

      <Parallax style={{ overflow: scrollPosition < 2415 ? 'hidden' : "auto" }} pages={4}>
        <ParallaxLayer speed={3} offset={-0.5} sticky={{ start: 0.5, end: 4 }} style={{
          ...alignCenter,
          alignItems: 'end',
          justifyContent: 'center',
          zIndex: 10,
          bottom: "-1px"
        }}>
          <div>
            <img style={{ marginBottom: "-2px" }} src={frontImg} width="200" alt="frontImg" />
          </div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 0, end: 3 }} style={{
          ...alignCenter, alignItems: "center",
          justifyContent: "center",
          marginLeft: "auto",
          width: "50%"
        }}>
          <div className={`${styles.card} ${styles.listClass} ${styles.parallax}`}>
            <ul>
              <li>
                <CheckCircle color='#f89901' size="38" />
                Certified Ingredients
              </li>
              <li>
                <CheckCircle color='#f89901' size="38" />
                Built By Science
              </li>
              <li>
                <CheckCircle color='#f89901' size="38" />
                Clinically Tested
              </li>
            </ul>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} sticky={{ start: 2, end: 3 }} speed={1.5} style={{
          ...alignCenter, alignItems: "center",
          justifyContent: "center",
          marginRight: "auto",
          background: "white",
          width: "50%"
        }}>
          <div style={{ height: "100%", width: "100%" }}>
            <img src={gifVideo} style={{ objectFit: "cover", width: '100%', height: "100%" }} alt="gif" />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}
