import React from 'react';
const headerStyles={
  color:'#37535B',
  background: '#009999 url(banner6.png) no-repeat center left',
  fontFamily: "Arial Narrow",
  textTransform: 'uppercase',
  letterSpacing: '4px',
  margin:'7px auto',
  padding:'15px',
  mozBoxShadow: '0 1px 3px rgba(0,0,0,0.5)',
  webkitBoxShadow: '0 1px 3px rgba(0,0,0,0.5)',
  mozBorderRadius: '15px',
  webkitBorderRadius: '15px',
  paddingLeft:'190px'
}
class Header extends React.Component {

  render(){
    return(
      <center><div style={headerStyles}><h1>Welcome to TP Nodejs - Reactjs</h1></div></center>
    )
  }
}
export default Header
