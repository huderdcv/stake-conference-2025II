'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import confetti from 'canvas-confetti';
import html2canvas from 'html2canvas';
import Swal from 'sweetalert2';
import { LuDownload } from 'react-icons/lu';

import './cta.css';

export const CtaSection = () => {
  const [inputValue, setInputValue] = useState('');
  const exportRef = useRef(null);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleButtonDownload = async () => {
    if (inputValue.trim().length < 3) {
      Swal.fire({
        title: '¡Sin nombre!',
        text: 'Introduce un nombre mayor o igual a 3 letras',
        icon: 'warning',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#3085d6',
        width: '50rem',
        customClass: {
          title: 'swal-title',
          htmlContainer: 'swal-text',
          confirmButton: 'my-confirm-btn',
        },
      });
      return;
    }
    // canvas
    if (!exportRef.current) return;
    const canvas = await html2canvas(exportRef.current, {
      width: 1965, // ancho final en px
      height: 1600, // alto final en px
      scale: 1, // evita duplicar tamaños (usa los que definimos arriba)
    });
    const link = document.createElement('a');
    link.download = `Invitacion-especial-para-${inputValue
      .split(' ')
      .join('-')}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();

    //alert
    Swal.fire({
      title: '¡Invitación descargada!',
      text: 'Ya tienes tu invitación personalizada. Te esperamos en la conferencia',
      icon: 'success',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#3085d6',
      width: '50rem',
      customClass: {
        title: 'swal-title',
        htmlContainer: 'swal-text',
        confirmButton: 'my-confirm-btn',
      },
    });

    // animation
    confetti({
      particleCount: 250,
      spread: 170,
      origin: { y: 0.6 },
    });
  };
  return (
    <section id="cta-section" className="cta-section">
      <div className="container ">
        <div className="cta-container grid grid--2-cols">
          <div className="cta-text-box">
            <h2 className="heading-secondary cta-heading">
              Invitación para ti o alguien especial
            </h2>
            <p className="cta-text">
              Escribe tu nombre, de un amigo o familiar y descarga una
              invitación personalizada. Comparte el mensaje de fe y esperanza
              con quienes más quieres.
            </p>
            <div className="cta-form">
              <input
                type="text"
                name="invitation-name"
                id="invitation-name"
                placeholder="Tu nombre o el de un amigo"
                className="cta-input"
                value={inputValue}
                onChange={handleInput}
              />
              <div className="button-container">
                <button onClick={handleButtonDownload} className="cta-button">
                  <LuDownload className="cta-button-icon" />
                  <span>Descargar invitación</span>
                </button>
              </div>
            </div>
          </div>
          {/* <div className="cta-image-container" ref={invitationRef}> */}
          <div className="cta-image-container">
            <div className="cta-image-box">
              <Image
                src={`/images/cta/conference-invitation-1.png`}
                alt="Invitación de la conferencia de estaca ayacucho del 20 y 21 de septiembre"
                width={1965}
                height={1600}
                className="cta-image"
              />
            </div>
            <p className="cta-image-text">{inputValue}</p>
          </div>
          {/* container oculto */}
          <div
            ref={exportRef}
            style={{
              width: '1965px',
              height: '1600px',
              position: 'absolute',
              left: '-9999px', // fuera de pantalla
              top: 0,
              backgroundImage: "url('/images/cta/conference-invitation-1.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span className="cta-image-text-2">{inputValue}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
