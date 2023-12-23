import React from 'react'
import hc from '../../images/logos/Hc.jpg'
import es from '../../images/logos/es.png'
import fp from '../../images/logos/fp.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faBriefcase } from '@fortawesome/free-solid-svg-icons';

class Experience extends React.Component{
    constructor(props){
        super(props);
        this.state ={

        }
    }
    render(){
        return(
            <>
            <div className="container mt-5 justify-content-center align-items-center" id='experience'>
                <div className="row justify-content-center">
                    <div className='col'>
                        <h2>Experience</h2>
                    </div>
                    <div className="w-100"></div>
                    <div className="col-lg-8 col-xs-10 border mt-2 rounded shadow p-2">
                            <div className='row'>
                            <div className='col'>
                                <img src={hc}  alt="logo" style={{width:"80px", height:"80px",float:"right"}}  className='m-1 img-fluid'/>
                            </div>
                            <div className='col-9'>
                                <h4 style={{textAlign:"left"}} className='responsive-heading'>Health Compass Private Limited</h4>
                                <small style={{display: "block", textAlign: "left"}}><b>From:</b>  15/02/2023 &nbsp; <b>to:</b> 14/08/2023</small>
                                <small style={{display: "block", textAlign: "left"}}>  <span className="text-danger"><FontAwesomeIcon icon={faMapMarkerAlt} /></span> Gurgaon &nbsp;   <span className="text-success"><FontAwesomeIcon icon={faBriefcase} /></span> Remote</small>
                                <hr />
                                <p style={{textAlign:"left"}}>Managed React JS frontend and Django backend, enhancing app efficiency by 30%.<br />
Transitioned backend from Spring Boot/Node.js to Django Rest Framework, boosting system performance by 45%.
</p>
                            </div>

                            </div>
                        </div>
                    <div className="w-100"></div>
                    <div className="col-lg-8 col-xs-10 border mt-2 rounded shadow p-2">
                            <div className='row'>
                            <div className='col'>
                                <img src={fp}  alt="logo" style={{width:"80px", height:"80px",float:"right"}}  className='m-1 img-fluid'/>
                            </div>
                            <div className='col-9'>
                                <h4 style={{textAlign:"left"}} className='responsive-heading'>Foruppo</h4>
                                <small style={{display: "block", textAlign: "left"}}><b>From:</b>  02/12/2022 &nbsp; <b>to:</b> 14/02/2023</small>
                                <small style={{display: "block", textAlign: "left"}}>  <span className="text-danger"><FontAwesomeIcon icon={faMapMarkerAlt} /></span> Banglore &nbsp;   <span className="text-success"><FontAwesomeIcon icon={faBriefcase} /></span> Remote</small>
                                <hr />
                                <p style={{textAlign:"left"}}>Oversaw project timelines and team communication as a program coordinator intern, improving project delivery efficiency by 15%.
<br />	Managed client interactions, aligning project goals with client needs, resulting in a 20% rise in client satisfaction.
</p>
                            </div>

                            </div>
                        </div>
                    <div className="w-100"></div>
                    <div className="col-lg-8 col-xs-10 border mt-2 rounded shadow p-2">
                            <div className='row'>
                            <div className='col'>
                                <img src={es}  alt="logo" style={{width:"80px", height:"80px",float:"right"}}  className='m-1 img-fluid'/>
                            </div>
                            <div className='col-9'>
                                <h4 style={{textAlign:"left"}} className='responsive-heading'>Espark Technologies</h4>
                                <small style={{display: "block", textAlign: "left"}}><b>From:</b>  15/03/2021 &nbsp; <b>to:</b> 15/05/2023</small>
                                <small style={{display: "block", textAlign: "left"}}>  <span className="text-danger"><FontAwesomeIcon icon={faMapMarkerAlt} /></span> Hyderabad &nbsp;   <span className="text-success"><FontAwesomeIcon icon={faBriefcase} /></span> On Site</small>
                                
                                <hr />
                                <p style={{textAlign:"left"}}>Contributed to designing and developing embedded systems, resulting in a 20% reduction in prototype development time.
<br />Aided in creating prototypes for new products, streamlining the innovation process by 25% for system improvements.
</p>
                            </div>

                            </div>
                        </div>


                </div>
            </div>
            
            </>
        )
    }
}

export default Experience;