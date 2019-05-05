import React from "react"
import Seo from "../components/seo"
import Container from "../components/container"
import Introduction from "../components/introduction"
import Passion from "../components/passion"
import Header from "../components/header"
import Footer from "../components/footer"

export default () => (
  <React.Fragment>
    <Seo />
    <Header />
    <Container>
      <Introduction />
      <Passion />
    </Container>
    <Container>
      <Footer />
    </Container>
  </React.Fragment>
)
