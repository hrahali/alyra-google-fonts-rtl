import React from "react"
import Footer from "../Footer"
import { render, cleanup } from '@testing-library/react'

afterEach(cleanup)


test('<Footer />', () => {
  const {
    debug, container,
  } = render(<Footer />);

  expect(container.firstChild).toMatchSnapshot()
})
