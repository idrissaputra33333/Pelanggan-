import { log } from './logger'

log('Import works!')
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  updateDoc,
  query,
  orderBy
} from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js'

// ini adalah konfigurasi firebase
const firebaseConfig = {
apiKey: "AIzaSyCRRFaBrm14cIoJ1nW5knt4Afd10H402Lo",
    authDomain: "insan-cemerlang-bbed3.firebaseapp.com",
    projectId: "insan-cemerlang-bbed3",
    storageBucket: "insan-cemerlang-bbed3.appspot.com",
    messagingSenderId: "1014883164148",
    appId: "1:1014883164148:web:f4c238c0022fb007eee3a1",
    measurementId: "G-81DKK8YWJT"
  };
  
  // fungsi ambil daftar pelanggan 
export async function ambilDaftarPelanggan() {
  const refDokumen = collection(basisdata, "pelanggan");
  const kueri = query(refDokumen, orderBy("nama"));
  const cuplikanKueri = await getDocs(kueri);

  let hasilKueri = [];
  cuplikanKueri.forEach((dokumen) => {
    hasilKueri.push({
      id: dokumen.id,
      nama: dokumen.data().nama,
      alamat: dokumen.data(). alamat,
      nohape: dokumen.data().nohape
    })
  })

  return hasilKueri;
}


// fungsi menambah data pelanggan 
export async function tambahpelangan(nama, alamat, nohape) {
  try {
    // menyimpan data ke firebase
    const refDokumen = await addDoc(collection(basisdata, "pelanggan"), {
      nama: nama,
      alamat: alamat,
      nohape: nohape
    })

    // menampilkan pesan berhasil
    console.log("berhasil menyimpan data pelanggan")
  } catch (error) {
    // menampilkan pesan gagal
    console.log("gagal menyimpan data pelanggan")
  }
}