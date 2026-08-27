import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Schedule from './Schedule.jsx'

vi.mock('../firebase.js', () => ({ db: {} }))
vi.mock('firebase/firestore', () => ({
  collection: vi.fn(),
  addDoc: vi.fn().mockResolvedValue({}),
}))
vi.mock('@emailjs/browser', () => ({
  default: { send: vi.fn().mockResolvedValue({}) },
}))

describe('Schedule', () => {
  it('renders all class categories', () => {
    render(<Schedule />)
    expect(screen.getByText('Yoga')).toBeInTheDocument()
    expect(screen.getByText('Classical Dance-Drama')).toBeInTheDocument()
    expect(screen.getByText('Dance')).toBeInTheDocument()
    expect(screen.getByText('Aerial Yoga')).toBeInTheDocument()
  })

  it('opens the booking form for the class that was clicked, with a branch selector for Yoga', async () => {
    const user = userEvent.setup()
    render(<Schedule />)
    const bookButtons = screen.getAllByText('Book Now')
    await user.click(bookButtons[0])
    expect(screen.getByText(/Book Hatha Yoga/)).toBeInTheDocument()
    expect(screen.getByText('Select Branch')).toBeInTheDocument()
  })
})
