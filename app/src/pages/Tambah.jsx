import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import './Tambah.css'

export default function Tambah() {
  const { tambah } = useKoleksi()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    judul: '',
    kategori: 'Novel',
    penulis: '',
    tahunTerbit: '',
    status: 'dimiliki',
  })

  const [galat, setGalat] = useState('')

  const ubah = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const simpan = (e) => {
    e.preventDefault()

    if (form.judul.trim().length < 3) {
      setGalat('Judul minimal 3 karakter.')
      return
    }

    if (!form.penulis.trim() || !form.tahunTerbit) {
      setGalat('Penulis dan tahun terbit wajib diisi.')
      return
    }

    tambah({
      ...form,
      judul: form.judul.trim(),
      penulis: form.penulis.trim(),
      tahunTerbit: Number(form.tahunTerbit),
    })

    navigate('/koleksi')
  }

  return (
    <form className="formulir" onSubmit={simpan}>
      <h1>Tambah Buku</h1>

      <label htmlFor="judul">Judul</label>
      <input
        id="judul"
        name="judul"
        value={form.judul}
        onChange={ubah}
      />

      <label htmlFor="penulis">Penulis</label>
      <input
        id="penulis"
        name="penulis"
        value={form.penulis}
        onChange={ubah}
      />

      <label htmlFor="kategori">Kategori</label>
      <select
        id="kategori"
        name="kategori"
        value={form.kategori}
        onChange={ubah}
      >
        <option>Novel</option>
        <option>Pengembangan Diri</option>
        <option>Keuangan</option>
        <option>Teknologi</option>
        <option>Filsafat</option>
      </select>

      <label htmlFor="tahunTerbit">Tahun Terbit</label>
      <input
        id="tahunTerbit"
        name="tahunTerbit"
        type="number"
        value={form.tahunTerbit}
        onChange={ubah}
      />

      <label htmlFor="status">Status</label>
      <select
        id="status"
        name="status"
        value={form.status}
        onChange={ubah}
      >
        <option value="dimiliki">Dimiliki</option>
        <option value="sedang dibaca">Sedang Dibaca</option>
        <option value="ingin dibeli">Ingin Dibeli</option>
      </select>

      {galat && <p role="alert">{galat}</p>}

      <button type="submit">Simpan</button>
    </form>
  )
}
