import React from 'react'



const logos = [
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    // Add more logos here
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
  ];
  
  const LogosSection = () => (
    <div className="logos-section">
      <div className="logos-container">
        {logos.map((logo, index) => (
          <a key={index} href={logo.link} target="_blank" rel="noopener noreferrer">
            <img src={logo.src} alt="Logo" className="logo-image" />
          </a>
        ))}
      </div>
    </div>
  );



const brands = () => {
  return (
    <section>
    <div className="label">
    <p className="FIND-YOUR-PERFECT brand">
      <span className="text-wrapper">BROWSE BY</span>
      <span className="span">&nbsp;</span>
      <span className="text-wrapper-2">BRANDS</span>
    </p>
  </div>

        <LogosSection />

  </section> 
  )
}

export default brands;