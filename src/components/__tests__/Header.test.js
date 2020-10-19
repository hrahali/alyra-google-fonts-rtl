
import React from "react"
import Header from "../Header"
import { render, cleanup } from '@testing-library/react'

afterEach(cleanup)


test('<Header />', () => {
  const {
    debug, container,
  } = render(<Header />);

  expect(container.firstChild).toMatchSnapshot()
})
