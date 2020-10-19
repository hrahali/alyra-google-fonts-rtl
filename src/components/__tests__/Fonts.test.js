import React from "react"
import { render, cleanup, waitForElement } from '@testing-library/react'
import Fonts from "../Fonts"
import useGoogleFonts from "../../hooks/useGoogleFonts"

jest.mock('../../hooks/useGoogleFonts', () => {
  return jest.fn(() => ({
    loading: false,
    fonts: []
  }))

})


afterEach(() => {
  cleanup()
  useGoogleFonts.mockClear()
})


test('<Fonts />', () => {
  const { getByTestId, queryByTestId } = render(<Fonts />)
  expect(useGoogleFonts).toHaveBeenCalledTimes(1)
  expect(queryByTestId("loading")).toBeFalsy()
})

test('<Fonts />', () => {
  useGoogleFonts.mockImplementation(() => ({
    loading: true,
    fonts: undefined
  }))
  const { getByTestId, queryByTestId } = render(<Fonts />)
  expect(useGoogleFonts).toHaveBeenCalledTimes(1)
  expect(queryByTestId("loading")).toBeTruthy()
})

