import React from "react";
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
import './css/home.css';
import Header from "./Header";

function Home() {
    return (
        <div className="container">
            <Header />
            <h2>Profil Rumah Sakit Sehat Sejahtera</h2>

            <div className="section">
                <h3><i>Visi</i></h3>
                <p>
                    Menjadi rumah sakit terkemuka dalam layanan kesehatan spesialis jantung dan saraf yang terpercaya dengan berbasis teknologi modern.
                </p>
            </div>

            <div className="section">
                <h3><i>Misi</i></h3>
                <ol>
                    <li>Memberikan pelayanan kesehatan berkualitas tinggi yang berpusat pada kebutuhan pasien.</li>
                    <li>Mengembangkan teknologi medis terkini untuk mendukung diagnosa dan perawatan.</li>
                    <li>Menyediakan tenaga medis dan paramedis profesional serta berpengalaman.</li>
                    <li>Membangun lingkungan yang nyaman dan aman bagi pasien dan keluarga.</li>
                </ol>
            </div>

            <div className="section">
                <h3><i>Layanan Unggulan</i></h3>
                <div className="service">
                    <h4>1. Spesialis Jantung :</h4>
                    <ul>
                        <li>Layanan kateterisasi jantung (Cath Lab).</li>
                        <li>Pemeriksaan dan perawatan penyakit jantung koroner.</li>
                        <li>Rehabilitasi jantung pascaoperasi.</li>
                    </ul>
                </div>
                <div className="service">
                    <h4>2. Spesialis Saraf :</h4>
                    <ul>
                        <li>Diagnosa dan pengobatan stroke.</li>
                        <li>Layanan neurologi komprehensif, termasuk rehabilitasi saraf.</li>
                        <li>Penanganan penyakit neurodegeneratif seperti Parkinson dan Alzheimer.</li>
                    </ul>
                </div>
            </div>

            <div className="section" style={{ textAlign: "center", marginTop: "80px" }}>
                <h3><i>“Kesehatan Anda, Prioritas Kami.”</i></h3>
                <p>
                    Dengan dedikasi selama 10 tahun dalam memberikan layanan kesehatan, Rumah Sakit Sejahtera terus berkomitmen untuk menjadi pilihan utama dalam layanan spesialis jantung dan saraf.
                </p>
            </div>
        </div>
    );
}

export default Home;
