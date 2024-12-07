import React from "react";
import { useNavigate } from 'react-router-dom'; 
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
import './css/header.css';

function Header() {
    const navigate = useNavigate();  

    const goToFasilitas = () => {
        navigate('/fasilitas');  
    }

    const goToProfil = () => {
        navigate('/');  
    }

    return (
        <div>
            <Image src="/images/logo.jpg" alt="Image" width="400" />
            <div className="button-nav">
                <Button
                    label="PROFIL"
                    className="p-button-raised p-button-success font-bold"
                    style={{ borderRadius: '0' }}
                    onClick={goToProfil}
                />
                <Button
                    label="POLIKLINIK"
                    className="p-button-raised p-button-success font-bold"
                    style={{ borderRadius: '0' }}
                />
                <Button
                    label="FASILITAS"
                    className="p-button-raised p-button-success font-bold"
                    style={{ borderRadius: '0' }}
                    onClick={goToFasilitas}
                />
                <Button
                    label="LOKASI"
                    className="p-button-raised p-button-success font-bold"
                    style={{ borderRadius: '0' }}
                />
                <Button
                    label="KONTAK"
                    className="p-button-raised p-button-success font-bold"
                    style={{ borderRadius: '0' }}
                />
            </div>
        </div>
    );
}

export default Header;
