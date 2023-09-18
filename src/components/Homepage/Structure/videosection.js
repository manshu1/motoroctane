const logos = [
  { src: 'https://img.youtube.com/vi/sQXD_EfgWD0/maxresdefault.jpg', link: '../../../Images/video_car.png', title: 'HONDA ELEVATE SUV FEATURES', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard' },
  { src: 'https://img.youtube.com/vi/sQXD_EfgWD0/maxresdefault.jpg', link: '../../../Images/video_car.png', title: 'HONDA ELEVATE SUV FEATURES', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard' },
  { src: 'https://img.youtube.com/vi/sQXD_EfgWD0/maxresdefault.jpg', link: '../../../Images/video_car.png', title: 'HONDA ELEVATE SUV FEATURES', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard' },
  { src: 'https://img.youtube.com/vi/sQXD_EfgWD0/maxresdefault.jpg', link: '../../../Images/video_car.png', title: 'HONDA ELEVATE SUV FEATURES', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard' },
  { src: 'https://img.youtube.com/vi/sQXD_EfgWD0/maxresdefault.jpg', link: '../../../Images/video_car.png', title: 'HONDA ELEVATE SUV FEATURES', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard' },
  { src: 'https://img.youtube.com/vi/sQXD_EfgWD0/maxresdefault.jpg', link: '../../../Images/video_car.png', title: 'HONDA ELEVATE SUV FEATURES', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard' },
  { src: 'https://img.youtube.com/vi/sQXD_EfgWD0/maxresdefault.jpg', link: '../../../Images/video_car.png', title: 'HONDA ELEVATE SUV FEATURES', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard' },
  { src: 'https://img.youtube.com/vi/sQXD_EfgWD0/maxresdefault.jpg', link: '../../../Images/video_car.png', title: 'HONDA ELEVATE SUV FEATURES', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard' },
  
];

const VideoSection = () => {
  return (
    <div className=''>
      <section className='video-section d-flex align-item-center justify-content-center'>
        
            {logos.map((logo, index) => (
              <div key={index} className="main-video-section">
                <a href={logo.link} target="_blank" rel="noopener noreferrer">
                  <img src={logo.src} alt="Logo" className="" />
                </a>
                <div className="video-details">
                  <div className="video-title">{logo.title}</div>
                  <p className="video-dec">{logo.description}</p>
                </div>
              </div>
            ))}
          
      </section>
    </div>
  );
};

const Video = () => {
  return (
    <section>
      <VideoSection />
    </section>
  );
};

export default Video;
