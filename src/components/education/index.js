import React from 'react';
import lords from '../../images/logos/lordslogo.png';
import stmarys from '../../images/logos/stmarys.png';

class Education extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showContainer: false,
        };
    }

    componentDidMount() {
        // Trigger animation after component mount
        setTimeout(() => {
            this.setState({ showContainer: true });
        }, 100);
    }

    render() {
        const { showContainer } = this.state;
        return (
            <>
                <div className={`container mt-5 ${showContainer ? 'animate__animated animate__fadeIn' : ''}`} id="education">

                    <div className='row justify-content-center '>
                        <div className='col-12 text-center'>
                            <h2>Education</h2>
                        </div>

                        <div className="col-lg-8 col-md-10 col-sm-12 mt-3">
                            <div className='card shadow'>
                                <div className='card-body'>
                                    <div className='row'>
                                        <div className='col-md-3 col-sm-4 text-center mb-2'>
                                            <img src={lords} alt="Lords Institute" className='img-fluid' style={{ maxHeight: '100px' }} />
                                        </div>
                                        <div className='col-md-9 col-sm-8'>
                                            <h4 className='card-title'>Lords Institute of Engineering and Technology</h4>
                                            <hr />
                                                <small><b>From:</b> 21/09/2021 <b>to:</b> Current</small>
                                            <p className='card-text text-left'>
                                                Pursuing B.E in Information Technology<br />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8 col-md-10 col-sm-12 mt-3">
                            <div className='card shadow'>
                                <div className='card-body'>
                                    <div className='row'>
                                        <div className='col-md-3 col-sm-4 text-center mb-2'>
                                            <img src={stmarys} alt="St. Mary's" className='img-fluid' style={{ maxHeight: '100px' }} />
                                        </div>
                                        <div className='col-md-9 col-sm-8'>
                                            <h4 className='card-title'>St. Mary's Engineering College</h4>
                                            <hr />
                                                <small><b>From:</b> 30/05/2018 <b>to:</b> 24/08/2021</small>
                                            <p className='card-text text-left'>
                                                Completed Diploma in Electronics and Communication Engineering, CGPA: 8.45<br />
                                            </p>
                                        </div>
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

export default Education;
