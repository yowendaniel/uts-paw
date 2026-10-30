import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { expect, test, vi } from 'vitest'
import App from './App.jsx'
import KartuItem from './components/KartuItem.jsx'
import KotakPencarian from './components/KotakPencarian.jsx'

test('rute tidak dikenal menampilkan 404', () => {
  render(
    <MemoryRouter initialEntries={['/tidak-ada']}>
      <App />
    </MemoryRouter>,
  )
  expect(screen.getByRole('heading', { name: '404' })).toBeInTheDocument()
})

test('kartu menampilkan judul buku', () => {
  render(
    <MemoryRouter>
      <KartuItem
        item={{ id: '1', judul: 'Bumi', kategori: 'Novel', tenggat: '-' }}
      />
    </MemoryRouter>,
  )
  expect(screen.getByText('Bumi')).toBeInTheDocument()
})

test('judul buku memiliki link ke halaman detail', () => {
  render(
    <MemoryRouter>
      <KartuItem
        item={{ id: '1', judul: 'Bumi', kategori: 'Novel', tenggat: '-' }}
      />
    </MemoryRouter>,
  )
  expect(screen.getByRole('link', { name: 'Bumi' })).toHaveAttribute(
    'href',
    '/koleksi/1',
  )
})

test('kotak pencarian menampilkan nilai awal', () => {
  render(<KotakPencarian nilai="Bumi" onUbah={() => {}} />)

  expect(screen.getByRole('searchbox')).toHaveValue('Bumi')
})

test('kotak pencarian menjalankan fungsi saat diketik', () => {
  const onUbah = vi.fn()

  render(<KotakPencarian nilai="" onUbah={onUbah} />)

  fireEvent.change(screen.getByRole('searchbox'), {
    target: { value: 'Laskar Pelangi' },
  })

  expect(onUbah).toHaveBeenCalledWith('Laskar Pelangi')
})