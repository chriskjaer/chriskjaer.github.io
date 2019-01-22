import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import logo from '../images/chriskjaer-logo.svg'

const IndexPage = () => (
  <Layout>
    <SEO title="chriskjaer.dk" />

    <div className="flex flex-row-ns flex-column items-center ph4">
      <Image
        src={logo}
        className="w3 h3 mr0 mr4-ns shrink-0 mt4 mt0-ns order-2 order-1-ns"
      />

      <div className="bl-ns b--moon-gray pl0 pl4-ns order-1">
        <h1 className="palatino f3lh-title mb0">Chris Kjær Sørensen</h1>
        <p className="avenir lh-copy mt0 f6 f5-ns">
          Creative Developer, Software Engineer, Co-Founder of{' '}
          <a href="https://www.gaest.com" rel="Gaest.com">
            Gaest.com
          </a>
          .<br />I code stuff and make it pretty.
        </p>
      </div>
    </div>

    <div className="avenir nb6 mt5 mb6-ns f7">
      <a className="mr3" href="https://www.linkedin.com/in/chriskjaer/">
        LinkedIn
      </a>
      <a href="https://github.com/chriskjaer">Github</a>
    </div>
  </Layout>
)

const Image = ({ src, className }) => (
  <div
    style={{ backgroundImage: `url(${src})` }}
    className={'bg-center cover br-100 overflow-hidden ' + className}
  />
)

export default IndexPage
