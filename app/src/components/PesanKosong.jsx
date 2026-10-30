export default function PesanKosong({ pesan = 'Belum ada data tersedia.' }) {
  return (
    <div className="pesan-kosong">
      <p>{pesan}</p>
    </div>
  )
}