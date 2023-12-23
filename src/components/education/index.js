import React from 'react'
import lords from '../../images/logos/lordslogo.png'
import stmarys from '../../images/logos/stmarys.png'
class Education extends React.Component{
    constructor(props){
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

    render(){
        const { showContainer } = this.state;
        return(
            <>
                  <div className={`container d-flex align-items-center justify-content-center mt-5 animate__animated animate__fadeIn `} id="education">
                   
                    <div className='row justify-content-center'>
                        <div className='col'>
                        <h2>Education</h2>
                        </div>

                        <div className='w-100'></div>
                        <div className="col-lg-8 col-xs-10 border mt-2 rounded shadow p-2">
                            <div className='row'>
                            <div className='col'>
                                <img src={lords}  alt="logo" style={{width:"80px", height:"92px",float:"right"}}  className='m-1 img-fluid'/>
                            </div>
                            <div className='col-9'>
                                <h4 style={{textAlign:"left"}} className='responsive-heading'>Lords Institute of Engineering and Technology</h4>
                                <small style={{display: "block", textAlign: "left"}}><b>From:</b>  21/09/2021 &nbsp; <b>to:</b> Current</small>
                                <hr />
                                <p style={{textAlign:"left"}}>Pursuing B.E in Information Technology</p>
                            </div>

                            </div>
                        </div>
                        <div className='w-100'></div>
                        <div className="col-lg-8 col-xs-10 border mt-2 rounded shadow p-2">
                            <div className='row'>
                            <div className='col'>
                                <img src={stmarys}   alt="logo" style={{width:"80px", height:"80px",float:"right"}} className=' img-fluid m-1'/>
                            </div>
                            <div className='col-9'>
                                <h4 style={{textAlign:"left"}} className='responsive-heading'>St. Mary's Engineering College</h4>
                                <small style={{display: "block", textAlign: "left"}}><b>From:</b>  30/05/2018 &nbsp; <b>to:</b> 24/08/2023</small>
                                <hr />
                                <p style={{textAlign:"left"}}>Successfully completed Diploma in Electronics and Communication Engineering, achieving a CGPA of 8.45.</p>
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