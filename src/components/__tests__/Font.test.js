import React from "react"
import Font from "../Font"
import { render } from "@testing-library/react"

const props = {
  text: "jfdalfj",
  family: "Montserrat Light",
  category: "serif",
  variants: ["bold", "regular"],
  size: "40",
}

// for the simplicity of quering, react-testing-library-specific attributes (data-test-id) are added in ../Font.js

test("<Font /> displays correctly", () => {
  const { getByTestId } = render(<Font {...props} />)
  expect(getByTestId("font-family").textContent).toBe(props.family)
  expect(getByTestId("font-variants-count").textContent).toContain(
    props.variants.length
  )
  expect(getByTestId("font-category").textContent.toLowerCase()).toBe(
    props.category
  )
  expect(getByTestId("font-link").href).toBe(
    `https://fonts.google.com/specimen/Montserrat+Light`
  )
  expect(getByTestId("font-style").getAttribute("style")).toContain(`40px`)
  expect(getByTestId("font-style").getAttribute("style")).toContain(
    `Montserrat Light`
  )
  expect(getByTestId("font-style").textContent).toBe(props.text)
})
