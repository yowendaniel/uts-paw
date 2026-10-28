import { useParams } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'

export default function Detail() {
  const { id } = useParams()
  const { items } = useKoleksi()

  const item = items.find((buku) => buku.id === id)

  if (!item) {
    return <h1>Buku tidak ditemukan</h1>
  }

  return (
    <main>
      <h1>{item.judul}</h1>
      <p>Kategori: {item.kategori}</p>
    </main>
  )
}