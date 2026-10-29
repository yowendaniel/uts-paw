import { useContext } from 'react'
import { KoleksiContext } from '../context/koleksiContext.js'

export default function useKoleksi() {
  return useContext(KoleksiContext)
}