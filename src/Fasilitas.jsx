import React from "react";
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Image } from 'primereact/image';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import './css/fas.css';
import Header from "./Header";

function Fasilitas() {
    
    const kamarData = [
        {
            kelas1: (
                <>
                    <Image src="/images/kelas1.jpg" alt="Kelas 1" width="300" />
                    <ul>
                        <li>1 tempat tidur pasien dengan kenyamanan premium (1 Kamar besisi 2 Pasien).</li>
                        <li>Ruangan ber-AC.</li>
                        <li>Kamar mandi dengan pemanas air.</li>
                        <li>TV LED 32 inci.</li>
                        <li>Lemari pakaian kecil.</li>
                        <li>Makanan sehat 3 kali sehari (sesuai rekomendasi gizi).</li>
                    </ul>
                </>
            ),
            executive: (
                <>
                    <Image src="/images/exe.jpeg" alt="Executive" width="300" />
                    <ul>
                        <li>1 tempat tidur pasien elektrik dengan pengaturan otomatis (1 Kamar 1 pasien).</li>
                        <li>Ruangan ber-AC.</li>
                        <li>Kamar mandi dengan pemanas air.</li>
                        <li>TV LED 42 inci dengan saluran kabel.</li>
                        <li>Sofa untuk pendamping.</li>
                        <li>Wi-Fi gratis.</li>
                        <li>Makanan bisa disesuaikan dengan preferensi.</li>
                    </ul>
                </>
            ),
            vip: (
                <>
                    <Image src="/images/vip.jpg" alt="VIP" width="300" />
                    <ul>
                        <li>Kamar luas dengan desain mewah.</li>
                        <li>1 tempat tidur pasien elektrik dengan pengaturan otomatis (1 Kamar 1 pasien).</li>
                        <li>Ruangan ber-AC dengan tata interior modern.</li>
                        <li>Kamar mandi dengan pemanas air.</li>
                        <li>TV LED 50 inci dengan saluran premium.</li>
                        <li>Sofa bed dan kursi tambahan untuk keluarga/pengunjung.</li>
                        <li>Lemari pakaian besar dan meja kerja eksklusif.</li>
                        <li>Mini kulkas, pantry, dan fasilitas pembuat teh/kopi.</li>
                        <li>Makanan premium dengan pilihan menu harian.</li>
                        <li>Parkir khusus untuk pasien VIP.</li>
                    </ul>
                </>
            ),
        },
    ];

    return (
        <div className="container">
            <Header />
            <h2>Fasilitas Rumah Sakit Sehat Sejahtera</h2>

            <div className="section" style={{ marginTop: "50px" }}>
                <h3><i>Fasilitas</i></h3>
                <ol>
                    <li>Unit Gawat Darurat 24 jam dengan penanganan kasus darurat jantung dan stroke.</li>
                    <li>Ruang operasi modern dengan standar internasional</li>
                    <li>Laboratorium diagnostik lengkap.</li>
                    <li>Fasilitas rawat inap nyaman dengan berbagai kelas.</li>
                    <li>Klinik rawat jalan dengan layanan konsultasi spesialis.</li>
                </ol>
            </div>

            <div className="section" style={{ marginTop: "30px" }}>
                <h3><i>Keunggulan</i></h3>
                <ol>
                    <li>Mengutamakan teknologi medis terkini seperti MRI, CT Scan, dan EKG untuk diagnosa cepat dan akurat.</li>
                    <li>Tim dokter spesialis jantung dan saraf berpengalaman lebih dari 10 tahun.</li>
                    <li>Program edukasi kesehatan untuk masyarakat seputar pencegahan penyakit jantung dan stroke.</li>
                </ol>
            </div>

            <div className="section" style={{ marginTop: "50px" }}>
                <h3><i>Kamar</i></h3>
                <DataTable value={kamarData}>
                    <Column header="Kelas 1" body={(rowData) => <>{rowData.kelas1}</>} />
                    <Column header="Executive" body={(rowData) => <>{rowData.executive}</>} />
                    <Column header="VIP" body={(rowData) => <>{rowData.vip}</>} />
                </DataTable>
            </div>
        </div>
    );
}

export default Fasilitas;
