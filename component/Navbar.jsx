import React, { Component } from 'react'
import '../css/navbar.css'
import { FaFacebook, FaInstagram, FaBars, FaTwitter } from 'react-icons/fa'
import NavToggle from './NavToggle'
import {Link} from 'react-router-dom'

class Navbar extends Component {
    state = {
        social: [
            {
                id: 1,
                url: 'https://www.twitter.com',
                icon: <FaTwitter />
            },
            {
                id: 2,
                url: 'https://www.facebook.com',
                icon: <FaFacebook />
            },
            {
                id: 3,
                url: 'https://www.instagram.com',
                icon: <FaInstagram />
            }
        ],

        menu: [
            {
                id:1,
                url:'/',
                text:'coconut'
            },
            {
                id:2,
                url:'/banana',
                text:'banana'
            },
            {
                id:3,
                url:'/mango',
                text:'mango'
            }
        ],
        showLinks:false,
    }

    showContainer = ()=>{
        let className = this.state.showLinks ? 'links-container on' : 'links-container'
        return className
    }

    handleToggle=()=>{
        this.setState({showLinks:!this.state.showLinks})
    }

    render() {
        return (
            <nav> 
                <div className="nav-center">
                    {/*logo*/}
                    <div className="nav-header">
                        <h1 className="logo">Logo</h1>
                        <NavToggle 
                            toggle={this.handleToggle}
                        />
                    </div>
                    {/* navigation */}
                    <div className={this.showContainer()}>
                        <ul className="links">
                            {
                                this.state.menu.map(item=>{
                                    let {id, url, text} = item
                                    return(
                                        <li key={id}>
                                            <Link to={url}>{text}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    {/* socia-icons */}
                    <ul className="social-icons">
                        {
                            this.state.social.map(item => {
                                let { id, url, icon } = item
                                return (
                                    <li key={id}>
                                        <a href={url}>{icon}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar