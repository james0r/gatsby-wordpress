import React, { useState } from 'react'
// import { graphql } from 'gatsby'
// import parse from 'html-react-parser'
// import { GatsbyImage } from 'gatsby-plugin-image'
import '../scss/all.scss'

// Get Wordpress posts
// Change limit to set max number of posts returned from query

const IndexPage = (props) => {
  const [submittedMessage, setSubmittedMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const submitHandler = (event) => {
    event.preventDefault()
    var data = event.target
    setIsLoading(true)

    fetch(data.getAttribute('action'), {
      method: data.getAttribute('method'),
      body: new FormData(data),
    })
      .then((res) => res.json())
      .then(function (data) {
        setSubmittedMessage(data.message)
        setIsLoading(false)
      })
  }

  // Replace with relevant keywords for your site (for SEO)
  return (
    <section className="hero is-info is-fullheight landing-page-section">
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item" href="www.google.com">
                <img
                  src="https://bulma.io/images/bulma-type-white.png"
                  alt="Logo"
                ></img>
              </a>
              <span className="navbar-burger burger" data-target="navbarMenu">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenu" className="navbar-menu">
              <div className="navbar-end">
                <span className="navbar-item">
                  <a
                    className="button is-white is-outlined"
                    href="www.google.com"
                  >
                    <span className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="white"
                        className="bi bi-house-door-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
                      </svg>
                    </span>
                    <span>Home</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-8 is-offset-2">
            <h1 className="title">Coming Soon</h1>
            <h2 className="subtitle">
              $this is the best software platform for running an internet
              business. We handle billions of dollars every year for
              forward-thinking businesses around the world.
            </h2>

            {submittedMessage === '' && (
              <form
                id="email-capture-form"
                action="https://gatsby-wordpress.jamesauble.com/wp-json/contact-form-7/v1/contact-forms/56/feedback"
                method="POST"
                onSubmit={(e) => submitHandler(e)}
              >
                <div className="box">
                  <div className="field is-grouped">
                    <p className="control is-expanded">
                      <input
                        className="input"
                        type="text"
                        placeholder="Enter your email"
                        name="your-email"
                      ></input>
                    </p>
                    <p className="control">
                      <button
                        type="submit"
                        value="Notify Me"
                        className={`button is-info ${isLoading ? 'is-loading' : ''}`}
                      ></button>
                    </p>
                  </div>
                </div>
              </form>
            )}

            {submittedMessage !== '' && (
              <div className="box">{submittedMessage}</div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default IndexPage
