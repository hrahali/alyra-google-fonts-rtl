import React from "react"
import { render, cleanup, fireEvent } from '@testing-library/react'
import FontSizeSlider from "../FontSizeSlider"

afterEach(cleanup)

const setSize = jest.fn();
const size = '38'
const newSize = '12'

test('<FontSizeSlider />', () => {
  const { getByTestId } = render(<FontSizeSlider size={size} setSize={setSize} />)
  const input = getByTestId('input-size')
  expect(input.value).toBe(size)
  fireEvent.change(input, {
    target: { value: newSize },
  });

  expect(setSize).toHaveBeenCalledTimes(1);
  expect(setSize).toHaveBeenCalledWith(newSize);

})