import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import FontSizeSlider from "../FontSizeSlider"

const setSize = jest.fn()
const size = "38"
const newSize = "12"

test("<FontSizeSlider />", () => {
  render(<FontSizeSlider size={size} setSize={setSize} />)
  const input = screen.getByLabelText(/taille de police/i)
  expect(input.value).toBe(size)
  fireEvent.change(input, {
    target: { value: newSize },
  })

  expect(setSize).toHaveBeenCalledTimes(1)
  expect(setSize).toHaveBeenCalledWith(newSize)
})
