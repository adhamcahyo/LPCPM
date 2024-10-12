import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../assets/css/DetailCampaign.css';
import korpsLogo from '../assets/gambar/korps.png';

const campaigns = [
  {
    id: '1',
    title: 'Kampanye Teknologi untuk Bencana',
    description: (
      <>
        Bantu korban bencana alam dengan donasi Anda. Setiap kontribusi, sekecil apa pun, dapat memberikan harapan baru dan membantu mereka membangun kembali kehidupan mereka.
         
        Bersama-sama, kita dapat membuat perbedaan yang nyata dan mendukung mereka dalam proses pemulihan.
      </>
    ),
    imageUrl:  require('../assets/gambar/gambar-campaign/teknologi-bencana.png'),
    targetDonation: 'tidak terbatas',
    createdBy: 'Admin',
    endDate: '15/11/2024',
    fundRaised: 'Rp 20.000.000',
    updates: [
      // {
      //   text: "Update 1: Proses penggalangan dana sudah dimulai.",
      //   imageUrl: "link_gambar_update_1.jpg"
      // }, 
    ]
  },
  {
    id: '2',
    title: 'Kampanye Teknologi Pendidikan',
    description: (
      <>
        Dukung pendidikan anak-anak yang kurang mampu. Dengan memberikan sumbangan, Anda membantu mereka mendapatkan akses ke pendidikan berkualitas dan peluang yang lebih baik untuk masa depan.
       
        Setiap bantuan yang Anda berikan akan membuka jalan bagi mereka untuk meraih impian dan meningkatkan kualitas hidup mereka.
      </>
    ),
    imageUrl: korpsLogo,
    targetDonation: 'tidak terbatas',
    createdBy: 'Admin',
    endDate: '01/10/2024',
    fundRaised: 'Rp 20.000.000',
    updates: [
      // {
      //   text: "Update 1: Proses penggalangan dana sudah dimulai.",
      //   imageUrl: "link_gambar_update_1.jpg"
      // }, 
    ]
  },
  {
    id: '3',
    title: 'Pinktober Tennis Event',
    description: (
      <>
        Memasuki bulan kesadaran kanker payudara yang jatuh pada bulan Oktober, Desport akan menyelenggarakan event untuk Yayasan Kanker Payudara Indonesia.

        Kegiatan akan dilaksanakan pada 26-27 Oktober 2024 di lapangan tennis Bulungan, Jakarta Selatan.

        <br />
        <strong>Tennis Against Breast Cancer:</strong>
        <ul>
          <li>Women Double Tennis Tournament</li>
          <li>Tennis Exhibition</li>
          <li>Breast Cancer Socialization</li>
        </ul>
        Tujuan event ini:
        <ol>
          <li>Menurunkan angka kanker payudara stadium lanjut</li>
          <li>Meningkatkan kesadaran masyarakat</li>
          <li>Menemukan kanker payudara pada stadium dini</li>
        </ol>
        <strong>"Saling Jaga, Saling Peduli"</strong>
      </>
    ),
    imageUrl: require('../assets/gambar/gambar-campaign/breast1.png'),
    targetDonation: 'tidak terbatas',
    createdBy: 'Admin',
    endDate: '27/10/2024',
    fundRaised: 'Rp 20.000.000',
    updates: [
      // {
      //   text: "Update 1: Proses penggalangan dana sudah dimulai.",
      //   imageUrl: "link_gambar_update_1.jpg"
      // }, 
    ]
  },
  {
    id: '4',
    title: 'Kampanye Teknologi Kesehatan',
    description: (
      <>
        Dukung pendidikan anak-anak yang kurang mampu. Dengan memberikan sumbangan, Anda membantu mereka mendapatkan akses ke pendidikan berkualitas dan peluang yang lebih baik untuk masa depan.
        <img src="link_gambar_2.jpg" alt="Deskripsi Gambar 2" />
        Setiap bantuan yang Anda berikan akan membuka jalan bagi mereka untuk meraih impian dan meningkatkan kualitas hidup mereka.
      </>
    ),
    imageUrl: korpsLogo,
    targetDonation: 'Rp 50.000.000',
    createdBy: 'Admin',
    endDate: '01/10/2024',
    fundRaised: 'Rp 20.000.000',
    updates: [
      // {
      //   text: "Update 1: Proses penggalangan dana sudah dimulai.",
      //   imageUrl: "link_gambar_update_1.jpg"
      // }, 
    ]
  },
  {
    id: '5',
    title: 'Kampanye Teknologi Kesehatan',
    description: (
      <>
        Dukung pendidikan anak-anak yang kurang mampu. Dengan memberikan sumbangan, Anda membantu mereka mendapatkan akses ke pendidikan berkualitas dan peluang yang lebih baik untuk masa depan.
         
        Setiap bantuan yang Anda berikan akan membuka jalan bagi mereka untuk meraih impian dan meningkatkan kualitas hidup mereka.
      </>
    ),
    imageUrl: korpsLogo,
    targetDonation: 'Rp 50.000.000',
    createdBy: 'Admin',
    endDate: '01/10/2024',
    fundRaised: 'Rp 20.000.000',
    updates: [
      // {
      //   text: "Update 1: Proses penggalangan dana sudah dimulai.",
      //   imageUrl: "link_gambar_update_1.jpg"
      // }, 
    ]
  },
  {
    id: '6',
    title: 'Kampanye Teknologi Pertanian',
    description: (
      <>
        Dukung pendidikan anak-anak yang kurang mampu. Dengan memberikan sumbangan, Anda membantu mereka mendapatkan akses ke pendidikan berkualitas dan peluang yang lebih baik untuk masa depan.
        <img src="link_gambar_2.jpg" alt="Deskripsi Gambar 2" />
        Setiap bantuan yang Anda berikan akan membuka jalan bagi mereka untuk meraih impian dan meningkatkan kualitas hidup mereka.
      </>
    ),
    imageUrl: korpsLogo,
    targetDonation: 'Rp 50.000.000',
    createdBy: 'Admin',
    endDate: '01/10/2024',
    fundRaised: 'Rp 20.000.000',
    updates: [
      // {
      //   text: "Update 1: Proses penggalangan dana sudah dimulai.",
      //   imageUrl: "link_gambar_update_1.jpg"
      // }, 
    ]
  },
  // Kampanye lainnya...
];

const CampaignDetailView = () => {
  const { id } = useParams();
  const campaign = campaigns.find(c => c.id === id);
  const [showUpdates, setShowUpdates] = useState(false);

  if (!campaign) {
      return (
          <div style={{ textAlign: 'center', fontSize: '1.5rem', color: '#ffffff' }}>
              Kampanye tidak ditemukan.
          </div>
      );
  }

  return (
      <div style={{
          maxWidth: '800px',
          margin: '20px auto',
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
          backgroundColor: '#61143b',
          color: '#ffffff',
      }}>
          <h1 style={{
              fontSize: '2.5rem',
              textAlign: 'center',
              marginBottom: '10px',
          }}>{campaign.title}</h1>
          <img src={campaign.imageUrl} alt={campaign.title} style={{
              width: '100%',
              borderRadius: '12px',
              objectFit: 'cover',
              marginBottom: '20px',
          }} />
          <div style={{
              padding: '20px',
              position: 'relative',
          }}>
              <p style={{
                  fontSize: '1.2rem',
                  marginBottom: '15px',
                  padding: '10px',
                  border: '2px solid #ffffff',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }}>Diposting oleh: <strong>{campaign.createdBy}</strong></p>

              <p style={{
                  fontSize: '1.2rem',
                  marginBottom: '15px',
                  padding: '10px',
                  border: '2px solid #ffffff',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }}>{campaign.description}</p>

              <p style={{
                  fontSize: '1.2rem',
                  marginBottom: '15px',
                  padding: '10px',
                  border: '2px solid #ffffff',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }}>Target Donasi: <strong>{campaign.targetDonation}</strong></p>

              <p style={{
                  fontSize: '1.2rem',
                  marginBottom: '15px',
                  padding: '10px',
                  border: '2px solid #ffffff',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }}>Dana Terkumpul: <strong>{campaign.fundRaised}</strong></p>

              <p style={{
                  fontSize: '1.2rem',
                  marginBottom: '20px',
                  padding: '10px',
                  border: '2px solid #ffffff',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }}>Tanggal Berakhir: <strong>{campaign.endDate}</strong></p>

              <Link to="/" style={{
                  display: 'inline-block',
                  padding: '12px 24px',
                  backgroundColor: '#ffffff',
                  color: '#61143b',
                  borderRadius: '5px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  transition: 'background-color 0.3s',
                  textAlign: 'center',
              }}>Donasi Sekarang!</Link>
          </div>
          <div style={{
              marginTop: '20px',
              padding: '10px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
          }}>
              <h2 style={{ color: '#ffffff', fontSize: '1.8rem', textAlign: 'center' }}>Updates</h2>
              <button onClick={() => setShowUpdates(!showUpdates)} style={{
                  marginBottom: '10px',
                  padding: '10px 15px',
                  backgroundColor: '#ffffff',
                  color: '#61143b',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  display: 'block',
                  margin: '0 auto',
              }}>
                  {showUpdates ? 'Sembunyikan Updates' : 'Tampilkan Updates'}
              </button>
              {showUpdates && (
                  <ul style={{
                      listStyleType: 'none',
                      paddingLeft: '0',
                      color: '#ffffff',
                  }}>
                      {campaign.updates.map((update, index) => (
                          <li key={index} style={{ marginBottom: '15px' }}>
                              <p>{update.text}</p>
                              {update.imageUrl && (
                                  <img src={update.imageUrl} alt={`Update ${index + 1}`} style={{
                                      width: '100%',
                                      borderRadius: '8px',
                                      marginTop: '10px',
                                  }} />
                              )}
                          </li>
                      ))}
                  </ul>
              )}
          </div>
      </div>
  );
};

export default CampaignDetailView;