
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('React CI/CD Application', () => {
  it('displays the project heading', () => {
    render(<App />)
    expect(screen.getByText('React CI/CD Pipeline')).toBeInTheDocument()
  })

  it('displays the DevOps tools', () => {
    render(<App />)
    expect(screen.getByText('Jenkins')).toBeInTheDocument()
    expect(screen.getByText('Docker')).toBeInTheDocument()
    expect(screen.getByText('Amazon EKS')).toBeInTheDocument()
  })

  it('increments the demo counter', () => {
    render(<App />)

    fireEvent.click(
      screen.getByRole('button', { name: 'Pipeline Demo: 0' })
    )

    expect(
      screen.getByRole('button', { name: 'Pipeline Demo: 1' })
    ).toBeInTheDocument()
  })
})
