import React from 'react';
import hc from '../../images/logos/Hc.jpg';
import es from '../../images/logos/es.png';
import fp from '../../images/logos/fp.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faBriefcase } from '@fortawesome/free-solid-svg-icons';

class Experience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderExperienceCard(logo, title, period, location, role, description) {
        return (
            <div className="col-lg-8 col-md-10 col-sm-12 mt-3">
                <div className='card shadow'>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-md-3 col-sm-4 text-center mb-2'>
                                <img src={logo} alt="logo" className='img-fluid' style={{ maxHeight: '100px' }} />
                            </div>
                            <div className='col-md-9 col-sm-8'>
                                <h4 className='card-title'>{title}</h4>
                                <hr />
                                <small style={{ display: "block", textAlign: "left" }} dangerouslySetInnerHTML={{ __html: period }}></small>
                                <small style={{ display: "block", textAlign: "left" }}>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-danger" /> {location} &nbsp;
                                    <FontAwesomeIcon icon={faBriefcase} className="text-success" /> {role}
                                </small>
                                <p className='card-text text-left'>{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
    render() {
        return (
            <>
                <div className="container mt-5" id='experience'>
                    <div className="row justify-content-center">
                        <div className='col-12 text-center'>
                            <h2>Experience</h2>
                        </div>

                        {this.renderExperienceCard(
                            hc, 
                            "Health Compass Private Limited (T-Hub Incubated Startup)", 
                            "<b>From:</b> 15/02/2023 &nbsp; <b>to:</b> 14/08/2023", 
                            "Gurgaon", 
                            "Remote",
                            "Managed React JS frontend and Django backend, enhancing app efficiency by 30%, transitioned backend from Spring Boot/Node.js to Django, boosting system performance by 45%."
                        )}
                        
                        {this.renderExperienceCard(
                            fp, 
                            "Foruppo", 
                            "<b>From:</b> 02/12/2022 &nbsp; <b>to:</b> 14/02/2023", 
                            "Banglore", 
                            "Remote",
                            "Oversaw project timelines and team communication as a program coordinator intern, improving project delivery efficiency by 15%, managed client interactions, aligning project goals with client needs, resulting in a 20% rise in client satisfaction."
                        )}
                        
                        {this.renderExperienceCard(
                            es, 
                            "Espark Technologies", 
                            "<b>From:</b> 15/03/2021 &nbsp; <b>to:</b> 15/05/2023", 
                            "Hyderabad", 
                            "On Site",
                            "Contributed to designing and developing embedded systems, resulting in a 20% reduction in prototype development time, aided in creating prototypes for new products, streamlining the innovation process by 25% for system improvements"
                        )}
                    </div>
                </div>
            </>
        )
    }
}

export default Experience;
