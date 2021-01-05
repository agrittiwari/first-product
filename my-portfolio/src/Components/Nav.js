import React from 'react'
  import {Fragment} from 'react'
const Nav = () => {
    return (
        <Fragment>
        <div >
            <li style={Navbar}>
                <ul>Projects</ul>
                <ul>Members</ul>
                <ul>Make your Portfolio</ul>
            </li>
        </div>
                          </Fragment>
    )
}

const Navbar = {
  display: 'flex',
  float: 'right',
  listStyleType: "none",
  paddingRight: 20,
  fontSize: 30,
  zIndex: 1,
  width: '100%',
}



export default Nav

