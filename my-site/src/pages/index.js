import React from "react"

import Layout from "../components/layout"

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
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </Layout>
)

export default IndexPage
