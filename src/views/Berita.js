import React, { useState } from 'react';
import '../assets/css/Berita.css';
import korpsLogo from '../assets/gambar/korps.png';

const Berita = () => {
  const [maxCount, setMaxCount] = useState(6); // Mengatur jumlah maksimal berita yang ditampilkan

  const beritaList = [
    {
      id: 1,
      logo: korpsLogo,
      judul: 'Galang Dana KORPS untuk Proyek Teknologi',
      deskripsi: 'Alhamdulillah, pada 1 Oktober 2024, KORPS berhasil mengumpulkan dana sebesar Rp 10.000.000 untuk mendanai proyek teknologi yang inovatif berkat bantuan para donatur. Semoga usaha ini dapat bermanfaat bagi masyarakat.',
      tanggal: '01/10/2024 10:30',
      penulis: 'Admin',
      link: '#'
    },
    {
      id: 2,
      logo: korpsLogo,
      judul: 'KORPS Ajak Masyarakat Berdonasi untuk Teknologi Pendidikan',
      deskripsi: 'Bismillah, pada 5 Oktober 2024, KORPS mengadakan kampanye penggalangan dana untuk mendanai proyek teknologi pendidikan yang akan membantu anak-anak kurang mampu. Hingga kini, telah terkumpul Rp 5.000.000. Semoga menjadi amal jariyah.',
      tanggal: '05/10/2024 14:00',
      penulis: 'Admin',
      link: '#'
    },
    {
      id: 3,
      logo: korpsLogo,
      judul: 'Sukses KORPS dalam Mendukung Teknologi Kesehatan',
      deskripsi: 'Alhamdulillah, pada 10 Oktober 2024, KORPS berhasil mengumpulkan Rp 8.000.000 untuk mendanai proyek teknologi kesehatan yang akan menyediakan layanan kesehatan gratis di wilayah pedesaan. Kami berkomitmen untuk terus berkhidmat.',
      tanggal: '07/10/2024 09:15',
      penulis: 'Admin',
      link: '#'
    },
    {
      id: 4,
      logo: korpsLogo,
      judul: 'KORPS Gelar Acara Donasi untuk Teknologi Sosial',
      deskripsi: 'Bismillah, pada 15 Oktober 2024, KORPS menyelenggarakan acara donasi yang berhasil mengumpulkan Rp 7.000.000 untuk mendanai proyek teknologi sosial. Mari kita tingkatkan kepedulian sosial bersama.',
      tanggal: '08/10/2024 11:45',
      penulis: 'Admin',
      link: '#'
    },
    {
      id: 5,
      logo: korpsLogo,
      judul: 'KORPS Berhasil Kumpulkan Dana untuk Teknologi Lingkungan',
      deskripsi: 'Alhamdulillah, pada 20 Oktober 2024, KORPS telah mengumpulkan Rp 12.000.000 untuk mendanai proyek teknologi lingkungan. Semoga usaha ini membawa manfaat bagi umat.',
      tanggal: '10/10/2024 16:00',
      penulis: 'Admin',
      link: '#'
    },
    {
      id: 6,
      logo: korpsLogo,
      judul: 'KORPS Siap Membantu Proyek Teknologi Inovatif',
      deskripsi: 'Bismillah, pada 25 Oktober 2024, KORPS meluncurkan program galang dana yang berhasil mengumpulkan Rp 9.000.000 untuk mendanai proyek teknologi inovatif. Mari kita bantu saudara-saudara kita.',
      tanggal: '11/10/2024 08:00',
      penulis: 'Admin',
      link: '#'
    },
    {
      id: 7,
      logo: korpsLogo,
      judul: 'Keberhasilan KORPS dalam Proyek Teknologi Kesehatan',
      deskripsi: 'Alhamdulillah, pada 10 Oktober 2024, KORPS berhasil mengumpulkan Rp 8.000.000 untuk mendanai proyek teknologi kesehatan yang akan bermanfaat bagi masyarakat. Kami berkomitmen untuk terus berkhidmat.',
      tanggal: '25/10/2024 19:15',
      penulis: 'Admin',
      link: '#'
    },
    {
      id: 8,
      logo: korpsLogo,
      judul: 'Sukses KORPS dalam Proyek Teknologi',
      deskripsi: 'Alhamdulillah, pada 10 Oktober 2024, KORPS berhasil mengumpulkan Rp 8.000.000 untuk mendanai proyek teknologi yang inovatif. Kami berkomitmen untuk terus berkhidmat.',
      tanggal: '25/10/2024 19:15',
      penulis: 'Admin',
      link: '#'
    },
    {
      id: 9,
      logo: korpsLogo,
      judul: 'Proyek Teknologi KORPS Berhasil',
      deskripsi: 'Alhamdulillah, pada 10 Oktober 2024, KORPS berhasil mengumpulkan Rp 8.000.000 untuk mendanai proyek teknologi yang berkelanjutan. Kami berkomitmen untuk terus berkhidmat.',
      tanggal: '25/10/2024 19:15',
      penulis: 'Admin',
      link: '#'
    },
    {
      id: 10,
      logo: korpsLogo,
      judul: 'KORPS dan Proyek Teknologi Masyarakat',
      deskripsi: 'Alhamdulillah, pada 10 Oktober 2024, KORPS berhasil mengumpulkan Rp 8.000.000 untuk mendanai proyek teknologi masyarakat. Kami berkomitmen untuk terus berkhidmat.',
      tanggal: '25/10/2024 19:15',
      penulis: 'Admin',
      link: '#'
    },
    {
      id: 11,
      logo: korpsLogo,
      judul: 'Keberhasilan KORPS dalam Teknologi Pendidikan',
      deskripsi: 'Alhamdulillah, pada 10 Oktober 2024, KORPS berhasil mengumpulkan Rp 8.000.000 untuk mendanai proyek teknologi pendidikan. Kami berkomitmen untuk terus berkhidmat.',
      tanggal: '25/10/2024 19:15',
      penulis: 'Admin',
      link: '#'
    },
    {
      id: 12,
      logo: korpsLogo,
      judul: 'KORPS dan Teknologi Lingkungan',
      deskripsi: 'Alhamdulillah, pada 10 Oktober 2024, KORPS berhasil mengumpulkan Rp 8.000.000 untuk mendanai proyek teknologi lingkungan. Kami berkomitmen untuk terus berkhidmat.',
      tanggal: '25/10/2024 19:15',
      penulis: 'Admin',
      link: '#'
    },
    {
      id: 13,
      logo: korpsLogo,
      judul: 'KORPS dan Proyek Teknologi Kemanusiaan',
      deskripsi: 'Alhamdulillah, pada 10 Oktober 2024, KORPS berhasil mengumpulkan Rp 8.000.000 untuk mendanai proyek teknologi kemanusiaan. Kami berkomitmen untuk terus berkhidmat.',
      tanggal: '25/10/2024 19:15',
      penulis: 'Admin',
      link: '#'
    }
  ];

  const handleLihatLainnya = () => {
    // Menambah 6 ke maxCount jika masih ada berita yang belum ditampilkan
    if (maxCount < beritaList.length) {
      setMaxCount((prevCount) => Math.min(prevCount + 6, beritaList.length));
    }
  };

  const handleLihatLebihMinim = () => {
    // Mengurangi 6 dari maxCount, dengan minimum 6
    setMaxCount((prevCount) => Math.max(prevCount - 6, 6));
  };

  return (
    <div className="berita-container">
      <div className={`berita-list ${beritaList.length > 4 ? 'overflow' : ''}`}>
        {beritaList.slice(0, maxCount).map((berita) => (
          <div key={berita.id} className="berita-card">
            <img src={berita.logo} alt={berita.judul} className="berita-logo" />
            <div className="berita-content">
              <h2 className="berita-judul">{berita.judul}</h2>
              <p className="berita-deskripsi">{berita.deskripsi}</p>
              <a href={berita.link} className="berita-link">Baca Selengkapnya</a>
            </div>
          </div>
        ))}
      </div>
      {/* Tombol "Lihat Lainnya" muncul jika ada lebih banyak berita */}
      {maxCount < beritaList.length && (
        <button className="lihat-lainnya" onClick={handleLihatLainnya}>Lihat Lainnya</button>
      )}
      {/* Tombol "Lihat Lebih Minim" muncul jika maxCount lebih dari 6 */}
      {maxCount > 6 && (
        <button className="lihat-lebih-minim" onClick={handleLihatLebihMinim}>Lihat Lebih Minim</button>
      )}
    </div>
  );
};

export default Berita;
