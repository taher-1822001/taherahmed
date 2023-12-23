import React from 'react'
import webDesign from '../../images/certificates/responsiveWebDesign.png'
import javascript from '../../images/certificates/javascript.png'
import frontend from '../../images/certificates/frontEnd.png'
import backend from '../../images/certificates/backend.png'
import database from '../../images/certificates/database.png'
import python from '../../images/certificates/python.png'
import java from '../../images/certificates/java.png'
class Certificates extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <>
            <div className="container-fluid  mt-5 justify-content-center align-items-center" id="certificate">

                <div className='row justify-content-center'>
                    <div className='col'>
                        <h2>Certifications</h2>
                    </div>
                    <div className='w-100'></div>
                    <div className="col-lg-4  m-1 p-3 shadow rounded border">
                        <a href={webDesign} target='__blank'><img src={webDesign} alt="certificate" className=' border img-fluid shadow'/></a>
                        <a href="https://www.freecodecamp.org/certification/fccbba60f73-45b1-40f1-bfee-dd221294f3f7/responsive-web-design" target="_blank"><h4 className='mt-1 mb-0'>Responsive Web Design</h4></a>
                    </div>
                    <div className="col-lg-4 m-1 p-3 shadow rounded border">
                        <a href={javascript} target='__blank'><img src={javascript} alt="certificate" className=' border img-fluid shadow'/></a>
                        <a href="https://www.freecodecamp.org/certification/fccbba60f73-45b1-40f1-bfee-dd221294f3f7/javascript-algorithms-and-data-structures" target='_blank'><h4 className='mt-1 mb-0'>Javascript Algorithms and Data Structures</h4></a>
                    </div>
                    <div className="col-lg-4 m-1 p-3 shadow rounded border">
                        <a href={frontend} target='__blank'><img src={frontend} alt="certificate" className=' border img-fluid shadow'/></a>
                        <a href="https://www.freecodecamp.org/certification/fccbba60f73-45b1-40f1-bfee-dd221294f3f7/front-end-development-libraries" target='_blank'><h4 className='mt-1 mb-0'>Front End Development Libraries</h4></a>
                    </div>
                    <div className="col-lg-4 m-1 p-3 shadow rounded border">
                        <a href={backend} target='__blank'><img src={backend} alt="certificate" className=' border img-fluid shadow'/></a>
                        <a href="https://www.freecodecamp.org/certification/fccbba60f73-45b1-40f1-bfee-dd221294f3f7/back-end-development-and-apis" target='blank'><h4 className='mt-1 mb-0'>Backend Development and APIs</h4></a>
                    </div>
                    <div className="col-lg-4 m-1 p-3 shadow rounded border">
                        <a href={database} target='__blank'><img src={database} alt="certificate" className=' border img-fluid shadow'/></a>
                        <a href="https://www.freecodecamp.org/certification/fccbba60f73-45b1-40f1-bfee-dd221294f3f7/relational-database-v8" target='_blank'><h4 className='mt-1 mb-0'>Relational Database</h4></a>
                    </div>
                    <div className="col-lg-4 m-1 p-3 shadow rounded border">
                        <a href={python} target='__blank'><img src={python} alt="certificate" className=' border img-fluid shadow'/></a>
                        <a href="https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzIzIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvdGh1bWJfMzM2OTU2NV8xNjQ5MTY3NDA2LnBuZyIsInVzZXJuYW1lIjoiVGFoZXIgQWhtZWQifQ&utm_source=shared-certificate&utm_medium=app_lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Fcertificates.simplicdn.net%2Fshare%2Fthumb_3369565_1649167406.png&_branch_match_id=1212445138926841772&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1s%2Fzcy00DTSz8HVNAgCOVNotIwAAAA%3D%3D" target='_blank'><h4 className='mt-1 mb-0'>Python</h4></a>
                    </div>
                    <div className="col-lg-4 m-1 p-3 shadow rounded border">
                        <a href={java} target='__blank'><img src={java} alt="certificate" className=' border img-fluid w-100 shadow'/></a>
                        <a href="https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI2OTQiLCJjZXJ0aWZpY2F0ZV91cmwiOiJodHRwczpcL1wvY2VydGlmaWNhdGVzLnNpbXBsaWNkbi5uZXRcL3NoYXJlXC90aHVtYl8zNDEzMjMzXzE2NTEwMDQ0MTkucG5nIiwidXNlcm5hbWUiOiJUYWhlciBBaG1lZCJ9&utm_source=shared-certificate&utm_medium=app_lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Fcertificates.simplicdn.net%2Fshare%2Fthumb_3413233_1651004419.png&_branch_match_id=1212445138926841772&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1g80L8ypCsyy9HVNAgAdsGv%2FIwAAAA%3D%3D" target='_blank'><h4 className='mt-1 mb-0'>Java</h4></a>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default Certificates;