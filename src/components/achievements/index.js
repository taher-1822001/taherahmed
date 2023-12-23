import React from 'react'
import innowiz from '../../images/achievements/innowiz.jpg'
import IdeationDay from '../../images/achievements/IdeationDay.jpg'
import teckFiesta from '../../images/achievements/teckFiesta.jpg'
import InternalHackathon from '../../images/achievements/InternalHackathon.jpg'
class Achievements extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <>
            <div className="container" id="achievements">
                <div className='row justify-content-center'>
                    <div className='row mt-5'>
                        <h2>Achievements</h2>
                    </div>
                    <div className='col-lg-4 m-1 border rounded p-3 shadow'>
                        <a href={innowiz}><img src={innowiz} className="img-fluid shadow rounded" /></a>

                        <h4 className='mt-2' style={{textAlign:"left"}}>Innowiz 2k22</h4>
                        <p style={{textAlign:"left"}}>Won third price in <b>Innowiz</b> project expo event organized by Department of <b>Computer Science and Engineering</b> at <b>Lords Institute of Engineering and Technology</b></p>
                    </div>
                    <div className='col-lg-4 m-1 border rounded p-3 shadow'>
                        <a href={IdeationDay}><img src={IdeationDay} className="img-fluid shadow rounded" /></a>

                        <h4 className='mt-2' style={{textAlign:"left"}}>Ideation Day</h4>
                        <p style={{textAlign:"left"}}>Won First price in <b>Ideation Day</b> organized by <b>Lords ECell</b></p>
                    </div>
                    <div className='col-lg-4 m-1 border rounded p-3 shadow'>
                        <a href={InternalHackathon}><img src={InternalHackathon} className="img-fluid shadow rounded" /></a>

                        <h4 className='mt-2' style={{textAlign:"left"}}>Internal Hackathon</h4>
                        <p style={{textAlign:"left"}}>Won Internal Hackathon at <b>Lords Institute of Engineering and Technology</b> organized in the same day of <b>Innowiz</b> event</p>
                    </div>
                    <div className='col-lg-4 m-1 border rounded p-3 shadow'>
                        <a href={teckFiesta}><img src={teckFiesta} className="img-fluid shadow rounded" /></a>

                        <h4 className='mt-2' style={{textAlign:"left"}}>Teck Fiesta</h4>
                        <p style={{textAlign:"left"}}>Got appreciation price for doing coordination in event</p>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default Achievements;