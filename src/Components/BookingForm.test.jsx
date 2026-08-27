import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import BookingForm from './BookingForm.jsx'

vi.mock('../firebase.js', () => ({ db: {} }))
vi.mock('firebase/firestore', () => ({
  collection: vi.fn(),
  addDoc: vi.fn().mockResolvedValue({}),
}))
vi.mock('@emailjs/browser', () => ({
  default: { send: vi.fn().mockResolvedValue({}) },
}))

const branchClass = { id: 1, category: 'Yoga', name: 'Hatha Yoga', time: '6:00 AM - 7:00 AM', branchSelectable: true }
const fixedClass = { id: 5, category: 'Classical Dance-Drama', name: 'Kuchipudi - Shapur Branch', days: 'Mon,Wed,Fri', time: '6:00 PM - 7:00 PM' }

describe('BookingForm', () => {
  it('shows a branch selector for classes marked branchSelectable', () => {
    render(<BookingForm classInfo={branchClass} onClose={() => {}} />)
    expect(screen.getByText('Select Branch')).toBeInTheDocument()
  })

  it('does not show a branch selector for classes with a fixed branch already in their name', () => {
    render(<BookingForm classInfo={fixedClass} onClose={() => {}} />)
    expect(screen.queryByText('Select Branch')).not.toBeInTheDocument()
  })

  it('strips non-digit characters from the phone input and caps it at 10 digits', async () => {
    const user = userEvent.setup()
    render(<BookingForm classInfo={fixedClass} onClose={() => {}} />)
    const phoneInput = screen.getByPlaceholderText('10-digit mobile number')
    await user.type(phoneInput, 'a9b8c7d6e5f4g3h2i1j0k9')
    expect(phoneInput.value).toMatch(/^\d*$/)
    expect(phoneInput.value.length).toBeLessThanOrEqual(10)
  })
})
