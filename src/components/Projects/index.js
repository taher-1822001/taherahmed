import React from 'react'

import mark from '../../images/projects/markdownpreviewer.png'
import twist from '../../images/projects/twistcontactmanager.png'
class Projects extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <>
            <div className="container" id='projects'>
                <div className='row justify-content-center'>
                    <div className='row mt-5'>
                        <h2>Recent Projects</h2>
                    </div>
                    <div className='col-lg-4 m-1 border rounded p-3 shadow'>
                        <a href={twist}><img src={twist} className="img-fluid shadow rounded" /></a>

                        <a href="#" ><h4 className='mt-2'>Twist Contact Manager (Full Stack)</h4></a>
                        
                    </div>
                    <div className='col-lg-4 m-1 border rounded p-3 shadow'>
                        <a href={mark}><img src={mark} className="img-fluid shadow rounded" /></a>

                        <a href="#"><h4 className='mt-2' >Markdown Previewer</h4></a>
                     
                    </div>
                   
                </div>
            </div>
            </>
        )
    }
}

export default Projects;