import React from 'react'
import profile from '../../images/profile/profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showContainer: false,
        }
    }
    componentDidMount() {
        // Trigger animation after component mount
        setTimeout(() => {
            this.setState({ showContainer: true });
        }, 100); // Change this delay according to your requirement
    }

    render() {
        const { showContainer } = this.state;
        return (
            <>
                <div className={`container d-flex align-items-center justify-content-center animate__animated animate__fadeIn `} id="about">

                    <div className='row'>
                        <div className='col'>
                            <h2 >About Me</h2>
                        </div>
                        <div className='w-100'></div>
                        <div className='col-lg-3 m-3'>
                            <img src={profile} alt="profile" style={{ width: "200px", height: "200px", borderRadius: "50%" }} />
                        </div>

                        <div className='col-lg-7  p-3 border shadow rounded' style={{ textAlign: "left" }}>
                            <div className='row'>
                                <div className='col-lg-5'>
                                Hi there! 👋 I'm Taher Ahmed, a passionate and detail-oriented Certified Full Stack Developer with a keen eye for crafting robust and scalable web applications. <br />
                                With a solid foundation in both frontend and backend development, I've honed my skills in a variety of technologies, frameworks, and programming languages.
                                </div>

                                <div className='col-lg-5 mt-4 align-items-center justify-content-center'>
                                    <label htmlFor='frontend'>Front End</label>
                                    <div class="progress" id="frontend">
                                        <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "90%" }}></div>
                                    </div>

                                    <label htmlFor='backend'>Back End</label>
                                    <div class="progress" id="backend">
                                        <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}></div>
                                    </div>

                                    <label htmlFor="database">Database</label>
                                    <div class="progress" id="database">
                                        <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "85%" }}></div>
                                    </div>
                                </div>


                            </div>
                        </div>
                       
                    </div>
                    
                    
                </div>

            </>
        )
    }
}

export default About;