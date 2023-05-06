import * as React from 'react'
import styles from './styles.module.css'

export default function Landing() {

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
      <div className={`${styles.circle} ${scrollPosition > 199 ? styles.circleAnimate : ''}`} />
      <div className={styles.imgContainer}>
        <div className={`${styles.bodyClass} ${scrollPosition > 199 ? styles.bodyAnimate : ''}`}>
          <div>
            <p className='display-2' style={{ fontWeight: 600 }}>
              Buy Best Weight Gain Pills &amp; Syrup
            </p>
            <p class="lead">We offer a variety of products to help you gain weight</p>
          </div>
          <button className={styles.buttonClass}>
            Shop Now
          </button>
        </div>
        <div
          className={`
            ${styles.landingImg}
            ${scrollPosition > 199 ? styles.landingAnimate : ''}
          `}
          style={{ display: scrollPosition > 1583 ? "none" : "" }}
        />
      </div>
    </div>
  )
}
