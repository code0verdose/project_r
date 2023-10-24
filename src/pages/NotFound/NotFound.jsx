import React from 'react'
import { Layout } from '../../layout/Layout'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <Layout>
      <h1>404 Not found</h1>
      <Link to='/'>GO HOME</Link>
    </Layout>
  )
}
