import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import github from '../images/github-icon.svg'
import logo from '../images/logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
      menuItems: props.data.allWpMenuItem.nodes?.map((item) => {
        return item
      }),
      numbers: [1,2,3,4,5]
    }
  }

  toggleHamburger() {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              role="menuitem"
              tabIndex={0}
              onKeyPress={() => this.toggleHamburger()}
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              {this.state.menuItems.map((item, index) => {
                return (
                  <Link className="navbar-item" to={item.url} key={index}>
                    {item.label}
                  </Link>
                )
              })}
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/james0r/gatsby-wordpress"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default function MyNavbar(props) {
  return (
    <StaticQuery
      query={graphql`
        query MenuQuery {
          # if there was more than one user, this would need to be filtered
          allWpMenuItem(filter: {menu: {node: {locations: {eq: GATSBY_HEADER_MENU}}}}) {
            nodes {
              label
              url
              title
            }
          }
        }
      `}
      render={data => <Navbar data={data} {...props} />}
    />
  )
}