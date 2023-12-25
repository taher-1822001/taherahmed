import React from 'react';
import profile from '../../images/profile/profile.png';
import github from '../../images/logos/github.png';
import linkedin from '../../images/logos/linkedin.png';
import instagram from '../../images/logos/instagram.png';
import facebook from '../../images/logos/facebook.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../components/footer';
import Header from '../../components/Header';
import whatsapp from '../../images/logos/whatsapp.webp';
import gmail from '../../images/logos/gmail.png';
import AnimatedBackground from '../animatedBackground';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showContainer: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showContainer: true });
    }, 100);
  }

  downloadResume = () => {
    const resumePath = process.env.PUBLIC_URL + '/taher_ahmed.pdf';
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Taher_Ahmed_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  render() {
    const { showContainer } = this.state;
    return (
      <>
        <Header />
        <div className={`container-fluid d-flex align-items-center mt-5 mb-4 justify-content-center vh-98`} id="home">
          <div className="row justify-content-center align-items-center">
            <div className='col mb-3 mt-5'>
             <center>
             <img src={profile} alt="profile" style={{ width: "200px", height: "200px", borderRadius: "50%" }} />
             </center>
            </div>
            <div className='w-100'></div>
            <div className="col text-center">
              <h3 className='mb-3'>Taher Ahmed</h3>
              <p className="line-1 anim-typewriter mb-4">I'm a certified Full stack Developer</p>
              <div className='my-4'>
                <a href='https://wa.me/7995918360' target='_blank'><img className='img img-fluid m-2 mt-1 animate__animated animate__bounce' src={whatsapp} alt="whatsapp" style={{ width: "38px", height: "38px" }} /></a>
                <a href='https://github.com/taher-1822001' target='_blank'><img className='img img-fluid m-2 mt-1 animate__animated animate__bounce' src={github} alt="github" style={{ width: "30px", height: "30px" }} /></a>
                <a href='https://www.linkedin.com/in/taher1822001' target='_blank'><img className='img img-fluid m-2 mt-1 animate__animated animate__bounce' src={linkedin} alt="linkedin" style={{ width: "30px", height: "30px" }} /></a>
                <a href='https://www.instagram.com/taher1822001' target='_blank'><img className='img img-fluid m-2 mt-1 animate__animated animate__bounce' src={instagram} alt="insta" style={{ width: "30px", height: "30px" }} /></a>
                <a href='https://www.facebook.com/taher1822001' target='_blank'><img className='img img-fluid m-2 mt-1 animate__animated animate__bounce' src={facebook} alt="facebook" style={{ width: "30px", height: "30px" }} /></a>
                <a href='mailto:work.taherahmed@gmail.com' target='_blank'><img className='img img-fluid m-2 mt-1 animate__animated animate__bounce' src={gmail} alt="gmail" style={{ width: "36px", height: "30px" }} /></a>
              </div>
              <button className='btn btn-primary mt-4' onClick={this.downloadResume}>Download Resume</button>
              <div className='mt-4'>
                <a href="#about">
                  <button className='btn down m-0'>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default Home;
