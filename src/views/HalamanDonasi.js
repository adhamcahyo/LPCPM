import React, { useState } from 'react';

const NominalForm = () => {
  const [selectedNominal, setSelectedNominal] = useState(0);
  const [customNominal, setCustomNominal] = useState('');
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [showMessageBox, setShowMessageBox] = useState(false);
  const [comment, setComment] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('VA');

  const handleNominalClick = (amount) => {
    setSelectedNominal(amount);
    setCustomNominal('');
    setError('');
  };

  const handleCustomNominalChange = (e) => {
    setSelectedNominal(0);
    setCustomNominal(e.target.value);
    setError('');
  };

  const handleSubmit = () => {
    const totalNominal = selectedNominal || Number(customNominal);
    if (totalNominal < 10000) {
      setError('Minimum donasi adalah Rp 10.000');
    } else {
      setError('');
      setShowForm(true);
    }
  };

  return (
    <div style={styles.container}>
      <p style={styles.introText}>
        Setiap dana yang disumbangkan akan dialokasikan ke proyek yang membutuhkan pendanaan.
      </p>
      <h2 style={styles.heading}>Nominal Donasi</h2>
      <div style={styles.nominalButtons}>
        {[30000, 50000, 75000, 100000].map((nominal) => (
          <button
            key={nominal}
            style={{
              ...styles.nominalButton,
              backgroundColor: selectedNominal === nominal ? '#0A9396' : '#94D2BD',
            }}
            onClick={() => handleNominalClick(nominal)}
          >
            Rp {nominal.toLocaleString('id-ID')}
          </button>
        ))}
      </div>
      <div style={styles.customNominalWrapper}>
        <label htmlFor="customNominal" style={styles.customLabel}>Nominal Lainnya:</label>
        <input
          id="customNominal"
          type="number"
          value={customNominal}
          onChange={handleCustomNominalChange}
          style={styles.customNominalInput}
          min="0"
          placeholder="Masukkan nominal..."
        />
      </div>
      <p style={styles.minimumDonationText}>Minimum donasi Rp 10.000</p>
      {error && <p style={styles.errorText}>{error}</p>}

      <button style={styles.submitButton} onClick={handleSubmit}>
        Selanjutnya
      </button>

      {showForm && (
        <div style={styles.donorForm}>
          <h3 style={styles.donorFormHeading}>Info Donatur</h3>
          <label style={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={isAnonymous}
              onChange={() => setIsAnonymous(!isAnonymous)}
            />
            Donasi Anonim
          </label>
          {!isAnonymous && (
            <>
              <input
                type="text"
                placeholder="Nama Lengkap*"
                style={styles.formInput}
                required
              />
              <input
                type="text"
                placeholder="No Telepon*"
                style={styles.formInput}
                required
              />
            </>
          )}
          <input type="text" placeholder="Email (Opsional)" style={styles.formInput} />
          
          <label style={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={showMessageBox}
              onChange={() => setShowMessageBox(!showMessageBox)}
            />
            Beri Pesan atau Komentar (opsional)
          </label>
          {showMessageBox && (
            <textarea
              rows="3"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              style={styles.commentBox}
              placeholder="Tulis komentar di sini..."
            />
          )}

          <div style={styles.paymentMethod}>
            <label style={styles.paymentLabel}>Metode Pembayaran</label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              style={styles.paymentSelect}
            >
              <option value="VA">Pilih Metode Pembayaran (VA =  )</option>
              {/* Tambahkan pilihan metode pembayaran lainnya di sini */}
            </select>
          </div>

          <div style={styles.paymentSummary}>
            <p>Nominal donasi Anda: <strong>Rp {(selectedNominal || customNominal).toLocaleString('id-ID')}</strong></p>
            <p style={styles.termsText}>Dengan melanjutkan donasi, saya setuju <strong>Syarat & Ketentuan</strong></p>
          </div>

          <button style={styles.donateButton}>
            Donasi
          </button>
        </div>
      )}
    </div>
  );
};

const styles = { 
  container: {
    textAlign: 'center',
    padding: '30px',
    margin: '50px auto',
    maxWidth: '500px',
    borderRadius: '12px',
    backgroundColor: '#001219',
    color: '#E0FBFC',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  // Other styles...
  paymentMethod: {
    marginTop: '15px',
    marginBottom: '15px',
  },
  paymentLabel: {
    color: '#E0FBFC',
    marginBottom: '5px',
  },
  paymentSelect: {
    width: '100%',
    padding: '10px',
    border: '2px solid #005F73',
    borderRadius: '8px',
    backgroundColor: '#E0FBFC',
    color: '#001219',
    fontSize: '1rem',
  },
};

export default NominalForm;
