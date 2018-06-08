import React from 'react';
const footerStyle ={
  position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
    backgroundColor: '#006666',
    color: 'white',
    textAlign: 'center'
}
class Footer extends React.Component {
  render(){
    return(
      <center><div style={footerStyle}><h4>Author: Juan Emmanuel Diaz 2018 ®</h4></div></center>
    )
  }
}
export default Footer
