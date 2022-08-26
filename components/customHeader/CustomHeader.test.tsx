import { render, screen } from '@testing-library/react'
import CustomHeader from './CustomHeader'

describe('CustomHeader ', () => {
  it('헤더 이름이 잘 뜨는가?', () => {
    const { container } = render(<CustomHeader comment="TDD 배우기"/>)

    const testFirst = screen.getByText(/TDD 배우기/i)


    expect(testFirst).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })
})