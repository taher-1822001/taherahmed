import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
class SkillsAndTools extends React.Component {
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
    }, 100); // Change this delay according to your requirement
  }

  render() {
    const { showContainer } = this.state;
    return (
      <>
        <div
          className={`container d-flex align-items-center justify-content-center mt-5 ${showContainer ? 'fade-in' : ''
            }`}
          id="skills"
        >
          <div className="row align-items-center justify-content-center">
            <h2>Skills And Tools</h2>
            <div className="col-lg-6 border shadow p-4 rounded m-1">
              <h2>Skills</h2>
              <div className="row">
                <div className="col rounded border shadow d-flex align-items-center m-2 p-2">
                  <img
                    src="https://skillicons.dev/icons?i=html&theme=dark&"
                    alt="html"
                    style={{ width: '30px', height: '30px', marginRight: '5px' }}
                  />
                  <span>HTML</span>
                </div>
                <div className="col rounded border shadow d-flex align-items-center m-2 p-2">
                  <img
                    src="https://skillicons.dev/icons?i=css&theme=dark&"
                    alt="html"
                    style={{ width: '30px', height: '30px', marginRight: '5px' }}
                  />
                  <span>CSS</span>
                </div>
                <div className="col rounded border shadow d-flex align-items-center m-2 p-2">
                  <img
                    src="https://skillicons.dev/icons?i=bootstrap&theme=dark&"
                    alt="html"
                    style={{ width: '30px', height: '30px', marginRight: '5px' }}
                  />
                  <span>Bootstrap</span>
                </div>
                <div className="col rounded border shadow d-flex align-items-center m-2 p-2">
                  <img
                    src="https://skillicons.dev/icons?i=javascript&theme=dark&"
                    alt="html"
                    style={{ width: '30px', height: '30px', marginRight: '5px' }}
                  />
                  <span>Javascript</span>
                </div>
                <div className="col rounded border shadow d-flex align-items-center m-2 p-2">
                  <img
                    src="https://skillicons.dev/icons?i=jquery&theme=dark&"
                    alt="html"
                    style={{ width: '30px', height: '30px', marginRight: '5px' }}
                  />
                  <span>Jquery</span>
                </div>
                <div className="col rounded border shadow d-flex align-items-center m-2 p-2">
                  <img
                    src="https://skillicons.dev/icons?i=sass&theme=dark&"
                    alt="html"
                    style={{ width: '30px', height: '30px', marginRight: '5px' }}
                  />
                  <span>SASS</span>
                </div>
                <div className="col rounded border shadow d-flex align-items-center m-2 p-2">
                  <img
                    src="https://skillicons.dev/icons?i=react&theme=light&"
                    alt="html"
                    style={{ width: '30px', height: '30px', marginRight: '5px' }}
                  />
                  <span>React</span>
                </div>
                <div className="col rounded border shadow d-flex align-items-center m-2 p-2">
                  <img
                    src="https://skillicons.dev/icons?i=express&theme=light&"
                    alt="html"
                    style={{ width: '30px', height: '30px', marginRight: '5px' }}
                  />
                  <span>Express</span>
                </div>
                <div className="col rounded border shadow d-flex align-items-center m-2 p-2">
                  <img
                    src="https://skillicons.dev/icons?i=nodejs&theme=light&"
                    alt="html"
                    style={{ width: '30px', height: '30px', marginRight: '5px' }}
                  />
                  <span>Node</span>
                </div>
                <div className="col rounded border shadow d-flex align-items-center m-2 p-2">
                  <img
                    src="https://skillicons.dev/icons?i=django&theme=light&"
                    alt="html"
                    style={{ width: '30px', height: '30px', marginRight: '5px' }}
                  />
                  <span>DRF</span>
                </div>
                <div className="col rounded border shadow d-flex align-items-center m-2 p-2">
                  <img
                    src="https://skillicons.dev/icons?i=mongodb&theme=light&"
                    alt="html"
                    style={{ width: '30px', height: '30px', marginRight: '5px' }}
                  />
                  <span>Mongo DB</span>
                </div>
                <div className="col rounded border shadow d-flex align-items-center m-2 p-2">
                  <img
                    src="https://skillicons.dev/icons?i=postgres&theme=light&"
                    alt="html"
                    style={{ width: '30px', height: '30px', marginRight: '5px' }}
                  />
                  <span>Postgres SQL</span>
                </div>
                <div className="col rounded border shadow d-flex align-items-center m-2 p-2">
                  <img
                    src="https://skillicons.dev/icons?i=python&theme=light&"
                    alt="html"
                    style={{ width: '30px', height: '30px', marginRight: '5px' }}
                  />
                  <span>Python</span>
                </div>
                <div className="col rounded border shadow d-flex align-items-center m-2 p-2">
                  <img
                    src="https://skillicons.dev/icons?i=java&theme=light&"
                    alt="html"
                    style={{ width: '30px', height: '30px', marginRight: '5px' }}
                  />
                  <span>Java</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 border rounded shadow p-4 m-1">
              <h2>Tools</h2>
              <div className="row">
                <div className="col rounded border shadow d-flex align-items-center m-2 p-2">
                  <img
                    src="https://skillicons.dev/icons?i=vscode&theme=light&"
                    alt="html"
                    style={{ width: '30px', height: '30px', marginRight: '5px' }}
                  />
                  <span>VS Code</span>
                </div>
                <div className="col rounded border shadow d-flex align-items-center m-2 p-2">
                  <img
                    src="https://skillicons.dev/icons?i=powershell&theme=light&"
                    alt="html"
                    style={{ width: '30px', height: '30px', marginRight: '5px' }}
                  />
                  <span>Powershell</span>
                </div>
                <div className="col rounded border shadow d-flex align-items-center m-2 p-2">
                  <img
                    src="https://skillicons.dev/icons?i=bash&theme=light&"
                    alt="html"
                    style={{ width: '30px', height: '30px', marginRight: '5px' }}
                  />
                  <span>Bash</span>
                </div>
                <div className="col rounded border shadow d-flex align-items-center m-2 p-2">
                  <img
                    src="https://skillicons.dev/icons?i=git&theme=light&"
                    alt="html"
                    style={{ width: '30px', height: '30px', marginRight: '5px' }}
                  />
                  <span>Git</span>
                </div>
                <div className="col rounded border shadow d-flex align-items-center m-2 p-2">
                  <img
                    src="https://skillicons.dev/icons?i=github&theme=light&"
                    alt="html"
                    style={{ width: '30px', height: '30px', marginRight: '5px' }}
                  />
                  <span>GitHub</span>
                </div>
                <div className="col rounded border shadow d-flex align-items-center m-2 p-2">
                  <img
                    src="https://skillicons.dev/icons?i=eclipse&theme=light&"
                    alt="html"
                    style={{ width: '30px', height: '30px', marginRight: '5px' }}
                  />
                  <span>Eclipse</span>
                </div>
                <div className="col rounded border shadow d-flex align-items-center m-2 p-2">
                  <img
                    src="https://skillicons.dev/icons?i=postman&theme=light&"
                    alt="html"
                    style={{ width: '30px', height: '30px', marginRight: '5px' }}
                  />
                  <span>Postman</span>
                </div>
              </div>
            </div>

           
            </div>
          </div>
        </>
        );
  }
}

        export default SkillsAndTools;
