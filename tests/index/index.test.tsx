import { fireEvent, render, screen } from '@testing-library/react'
import Home from '../../pages/index'

describe('Home', () => {
  it('renders a heading', () => {

    const element = render(<Home />)
    const testFirst = screen.getByText(/여기가 어딘죠/i)

    expect(testFirst).toBeInTheDocument()

    expect(element).toMatchSnapshot()
  })
  it('changes input', () => {
    const { getByPlaceholderText } = render(<Home />);
    const input = getByPlaceholderText('할 일을 입력하세요');
    fireEvent.change(input, {
      target: {
        value: 'TDD 배우기'
      }
    });

  expect(input).toHaveAttribute('value', 'TDD 배우기');
  })
})