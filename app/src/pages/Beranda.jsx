import { useContext } from 'react'
import { KoleksiContext } from '../context/koleksiContext.js'

export default function Beranda() {
  const { items } = useContext(KoleksiContext)

  return (
    <main>
      <h1>Rak Buku Pribadi</h1>
      <p>Tema: Rak Buku Pribadi</p>

      <h2>Koleksi Buku</h2>

      {items.map((item) => (
        <div key={item.id}>
          <h3>{item.judul}</h3>
          <p>{item.kategori}</p>
        </div>
      ))}
    </main>
  )
}