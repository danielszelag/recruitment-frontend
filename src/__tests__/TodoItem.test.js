import React from 'react'
import TodoItem from '../components/TodoItem'
import { render, screen } from '@testing-library/react'

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}))

test('TodoItem Component renders a to-do when given props', () => {
  render(<TodoItem id={1} isCompleted={false} title='clean up the room' />)
  expect(screen.getByText('clean up the room')).toBeInTheDocument()
})
