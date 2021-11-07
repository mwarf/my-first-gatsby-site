// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Footing from '../components/footer'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <h1>Welcome to my Gatsby site!</h1>
      <Link to ="/about">About</Link>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <Footing></Footing>
    </main>
  )
}

// Step 3: Export your component
export default IndexPage