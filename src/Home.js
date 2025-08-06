import photo_opt from './assets/IMG_2686.jpg'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <section className="intro">
        <div className="intro-text">
          <h1 className="intro-title animate-slideup">Hello there!</h1>
          <p style={{textAlign: 'justify', width: '100%'}}>
              What you will find here is a niche assortment of some projects I've created
              in my free time. I have a large interest in a variety of technologies and
              dive into things that interest me during those moments in time.<br />
          </p>
          <p> <em>Website is still work in progress 🔧</em></p>
          <Link to="/projects" className="btn-primary">View My Work</Link>
        </div>
        <div className="intro-images">
          <img src={photo_opt}/>
        </div>
      </section>
    </div>
  );
};

export default Home;
