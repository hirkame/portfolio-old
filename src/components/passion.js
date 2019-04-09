import React from "react"
import Container from "./container.js"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

export default () => (
  <StaticQuery
    query={query}
    render={data => (
      <Container className="row">
        <div className="container">
          <div className="nine columns">
            <p>
              After my first trip to African countries, I have been to 7 African
              countries so far. (Kenya, Tanzania, Uganda, Rwanda, Burundi, Ghana
              and Egypt) Every single trip is unforgettable and priceless memory
              for me, though I sometimes got troubles.
            </p>
            <p>
              Currently, I am engaged in building developer ecosystem in Africa.
            </p>
            <p>
              Software industry in Africa is growing rapidly. However, the major
              concern is a lack of talents. Because of the inequal access to
              proper education and poor governance, there are very few software
              professionals in labor market and if there are, many software
              developers emigrate to Europe or the US.
            </p>
            <p>
              One possible solution is to provide enough opportunities to
              massive young people and grow tech ecosystem in Africa. By doing
              so, we could make a sustainable model to produce software
              professionals in Africa and facilitate tech ecosystem in Africa.
            </p>
          </div>
          <Img
            className="three columns"
            fluid={data.file.childImageSharp.fluid}
            alt="map"
          />
        </div>
      </Container>
    )}
  />
)

const query = graphql`
  query {
    file(relativePath: { eq: "map.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

// export default () => (
//   <Container className="row">
//     <div className="container">
//       <div className="nine columns">
//         <p>
//           After my first trip to African countries, I have been to 7 African
//           countries so far. (Kenya, Tanzania, Uganda, Rwanda, Burundi, Ghana and
//           Egypt) Every single trip is unforgettable and priceless memory for me,
//           though I sometimes got troubles.
//         </p>
//         <p>
//           Currently, I am engaged in building developer ecosystem in Africa.
//         </p>
//         <p>
//           Software industry in Africa is growing rapidly. However, the major
//           concern is a lack of talents. Because of the inequal access to proper
//           education and poor governance, there are very few software
//           professionals in labor market and if there are, many software
//           developers emigrate to Europe or the US.
//         </p>
//         <p>
//           One possible solution is to provide enough opportunities to massive
//           young people and grow tech ecosystem in Africa. By doing so, we could
//           make a sustainable model to produce software professionals in Africa
//           and facilitate tech ecosystem in Africa.
//         </p>
//       </div>
//       <img
//         className="three columns"
//         src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9"
//         alt="passion"
//       />
//     </div>
//   </Container>
// )
