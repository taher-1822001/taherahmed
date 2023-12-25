import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let date = new Date();
    let currentYear = date.getFullYear(); // Get the current year

    return (
      <footer className="background" style={{ textAlign: "center"}}>
        <div className='container-fluid p-2'>
          <p>&copy; {currentYear} designed and developed by Taher Ahmed</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
