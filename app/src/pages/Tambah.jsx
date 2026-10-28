import { useNavigate } from 'react-router-dom'

export default function Tambah() {
  const navigate = useNavigate()

  const kembali = () => {
    navigate('/koleksi')
  }

  return (
    <main>
      <h1>Tambah Buku</h1>

      <button onClick={kembali}>
        Kembali ke Koleksi
      </button>
    </main>
  )
}