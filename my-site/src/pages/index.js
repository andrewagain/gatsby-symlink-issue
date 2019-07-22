import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

// symlinked code that relies on babel plugin
// this does NOT work. comment out these two lines to get the build to work
import testFunction from "common/testFunction"
testFunction()

// test optional chaining babel plugin on the code within project root
// This does not cause any problems:
const x = { a: "1" }
console.log(`x.a:${x?.a} x.b.c:${x?.b?.c}`)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
