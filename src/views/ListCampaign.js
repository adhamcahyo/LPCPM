import React, { useState } from 'react';
import Filter from '../components/Filter';
import SearchBar from './SearchBar';
import CampaignItem from '../components/CampaignItem';
import '../assets/css/ListCampaign.css';
import korpsLogo from '../assets/gambar/korps.png';

const campaigns = [
  {
    id: 1,
    title: 'Kampanye Teknologi untuk Bencana',
    description: 'Bantu korban bencana alam dengan donasi Anda.',
    targetDonation: 'tidak terbatas',
    fundRaised: 'Rp 20.500.000',
    createdBy: 'Admin',
    startDate: '2024-10-01',
    endDate: '2024-10-27',
    imageUrl: require('../assets/gambar/gambar-campaign/teknologi-bencana.png'),
  },
  {
    id: 2,
    title: 'Kampanye Teknologi Pendidikan',
    description: 'Dukung pendidikan anak-anak yang kurang mampu.',
    targetDonation: 'tidak terbatas',
    fundRaised: 'Rp 15.000.000',
    createdBy: 'Admin',
    startDate: '2023-10-01',
    endDate: '2024-12-15',
    imageUrl: korpsLogo,
  },
  {
    id: 3,
    title: 'Pinktober Tennis Event',
    description: 'Dukung pendidikan anak-anak yang kurang mampu.',
    targetDonation: 'tidak terbatas',
    fundRaised: 'Rp 20.000.000',
    createdBy: 'Admin',
    startDate: '2023-10-01',
    endDate: '2024-12-15',
    imageUrl: require('../assets/gambar/gambar-campaign/breast.png'),
  },
  {
    id: 4,
    title: 'Kampanye Teknologi Kesehatan',
    description: 'Dukung pengembangan teknologi kesehatan untuk meningkatkan kualitas hidup masyarakat.',
    targetDonation: 'Rp 30.500.000',
    fundRaised: 'Rp 30.500.000',
    createdBy: 'Admin',
    startDate: '2023-10-01',
    endDate: '2024-12-15',
    imageUrl: 'https://via.placeholder.com/300',
  },
  {
    id: 5,
    title: 'Kampanye Teknologi Lingkungan',
    description: 'Bantu pengembangan solusi teknologi yang ramah lingkungan untuk masa depan yang lebih baik.',
    targetDonation: 'Rp 30.000.000',
    fundRaised: 'Rp 15.000.000',
    createdBy: 'Admin',
    startDate: '2023-10-01',
    endDate: '2024-12-15',
    imageUrl: 'https://via.placeholder.com/300',
  },
  {
    id: 6,
    title: 'Kampanye Teknologi Pertanian',
    description: 'Dukung teknologi inovatif dalam pertanian untuk meningkatkan produksi dan keberlanjutan.',
    targetDonation: 'Rp 304.000.000',
    fundRaised: 'Rp 15.000.000',
    createdBy: 'Admin',
    startDate: '2023-10-01',
    endDate: '2024-12-15',
    imageUrl: 'https://via.placeholder.com/300',
  },
];

const ListCampaign = () => {
  const [filter, setFilter] = useState('');

  const filteredCampaigns = campaigns.filter(campaign =>
    campaign.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="campaign-container">
      <h1 className="campaign-title">List Kampanye</h1>
      <Filter setFilter={setFilter} />
      <SearchBar setFilter={setFilter} />
      <div className="campaign-list">
        {filteredCampaigns.map(campaign => (
          <CampaignItem key={campaign.id} campaign={campaign} />
        ))}
      </div>
    </div>
  );
};

export default ListCampaign;
