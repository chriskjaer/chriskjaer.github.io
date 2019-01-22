import React from 'react'
import PropTypes from 'prop-types'
import 'tachyons'
import './layout.css'

const Layout = ({ children }) => (
  <div className="flex flex-column items-center justify-center min-vh-100">
    {children}
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
