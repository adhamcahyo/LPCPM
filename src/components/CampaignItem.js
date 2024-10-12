import React from 'react';
import { Link } from 'react-router-dom';

const CampaignItem = ({ campaign }) => {
  const calculateProgress = (endDate, targetDonation, fundRaised) => {
    const now = new Date();
    const targetDate = new Date(endDate);
    const totalDuration = targetDate - now;
    const durationInDays = Math.ceil(totalDuration / (1000 * 60 * 60 * 24));

    const targetAmount = targetDonation.toLowerCase() === 'tidak terbatas' ? Infinity : parseFloat(targetDonation.replace(/[^0-9.-]+/g, ""));
    const raisedAmount = parseFloat(fundRaised.replace(/[^0-9.-]+/g, ""));
    const progress = targetAmount === Infinity ? 100 : Math.min(100, (raisedAmount / targetAmount) * 100);

    let progressColor;
    if (targetDonation.toLowerCase() === 'tidak terbatas') {
      progressColor = 'blue'; // Jika tidak terbatas, warna bar harus biru
    } else if (progress >= 100) {
      progressColor = 'red'; // Selesai
    } else if (progress >= 50) {
      progressColor = 'yellow'; // Tengah
    } else {
      progressColor = 'green'; // Ongoing
    }

    return {
      progress: Math.round(progress),
      durationInDays: durationInDays >= 0 ? durationInDays : 0,
      remainingTime: totalDuration <= 0 ? '00:00:00' : new Date(totalDuration).toISOString().substr(11, 8),
      progressColor,
    };
  };

  const { progress, durationInDays, remainingTime, progressColor } = calculateProgress(campaign.endDate, campaign.targetDonation, campaign.fundRaised);

  return (
    <div className="campaign-item">
      <div className="campaign-photo">
        <img src={campaign.imageUrl} alt={campaign.title} />
      </div>
      <div className="campaign-info">
        <h2 className="campaign-item-title">{campaign.title}</h2>
        <p className="campaign-item-meta">Diposting oleh: Admin</p>
        <div className="campaign-raised">
          Dana Terkumpul: {campaign.fundRaised} dari {campaign.targetDonation}
        </div>
        <div className="campaign-progress">
          <div
            className="progress-bar"
            style={{
              width: `${progress}%`,
              backgroundColor: progressColor,
            }}
          />
          <span className="progress-text">{progress}% - {durationInDays} Days left - {remainingTime} remaining {progress === 100 ? '🕊️' : ''}</span>
        </div>
        <Link to={`/detail/${campaign.id}`}>
          <button className="detail-button">Detail</button>
        </Link>
      </div>
    </div>
  );
};

export default CampaignItem;
// kode lama

// import React from 'react';
// import { Link } from 'react-router-dom';

// const CampaignItem = ({ campaign }) => {
//   const calculateProgress = (endDate, targetDonation, fundRaised) => {
//     const now = new Date();
//     const targetDate = new Date(endDate);
//     const totalDuration = targetDate - now;
//     const durationInDays = Math.ceil(totalDuration / (1000 * 60 * 60 * 24));

//     const targetAmount = parseFloat(targetDonation.replace(/[^0-9.-]+/g, ""));
//     const raisedAmount = parseFloat(fundRaised.replace(/[^0-9.-]+/g, ""));
//     const progress = Math.min(100, (raisedAmount / targetAmount) * 100);

//     let progressColor;
//     if (progress >= 100) {
//       progressColor = 'red';
//     } else if (progress >= 50) {
//       progressColor = 'yellow';
//     } else {
//       progressColor = 'green';
//     }

//     return {
//       progress: Math.round(progress),
//       durationInDays: durationInDays >= 0 ? durationInDays : 0,
//       remainingTime: totalDuration <= 0 ? '00:00:00' : new Date(totalDuration).toISOString().substr(11, 8),
//       progressColor,
//     };
//   };

//   const { progress, durationInDays, remainingTime, progressColor } = calculateProgress(campaign.endDate, campaign.targetDonation, campaign.fundRaised);

//   return (
//     <div className="campaign-item">
//       <div className="campaign-photo">
//         <img src={campaign.imageUrl} alt={campaign.title} />
//       </div>
//       <div className="campaign-info">
//         <h2 className="campaign-item-title">{campaign.title}</h2>
//         <p className="campaign-item-meta">Diposting oleh: Admin</p>
//         <div className="campaign-raised">
//           Dana Terkumpul: {campaign.fundRaised} dari {campaign.targetDonation}
//         </div>
//         <div className="campaign-progress">
//           <div
//             className="progress-bar"
//             style={{
//               width: `${progress}%`,
//               backgroundColor: progressColor,
//             }}
//           />
//           <span className="progress-text">{progress}% - {durationInDays} Days left - {remainingTime} remaining</span>
//         </div>
//         <Link to={`/detail/${campaign.id}`}>
//           <button className="detail-button">Detail</button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default CampaignItem;
