// --- DATABASE MAKANAN (KANDUNGAN & FUNGSI) ---
const dataMakanan = {
    'nasi': { 
        judul: "Nasi Putih", 
        isi: `
        <b>● Kandungan Utama:</b><br>
        Karbohidrat, protein, zat besi, magnesium, fosfor, kalium.<br><br>
        <b>● Fungsi:</b><br>
        - Sumber energi utama bagi tubuh, terutama untuk otak.<br>
        - Magnesium membantu membentuk tulang dan mengatur kontraksi otot.`
    },
    'bayam': { 
        judul: "Sayur Bayam", 
        isi: `
        <b>● Kandungan Utama:</b><br>
        Protein, serat, vitamin A, C, K, antioksidan (lutein, karotenoid).<br><br>
        <b>● Fungsi:</b><br>
        - Antioksidan menangkal radikal bebas dan mengatasi peradangan.<br>
        - Vitamin A dan C meningkatkan sistem kekebalan tubuh.`
    },
    'tahu': { 
        judul: "Tahu", 
        isi: `
        <b>● Kandungan Utama:</b><br>
        Protein nabati, kalsium, fosfor, zat besi, isoflavon.<br><br>
        <b>● Fungsi:</b><br>
        - Protein membantu membangun dan memperbaiki jaringan tubuh.<br>
        - Kalsium dan fosfor menjaga kesehatan tulang dan gigi.`
    },
    'tempe': { 
        judul: "Tempe", 
        isi: `
        <b>● Kandungan Utama:</b><br>
        Protein nabati lengkap, serat, kalsium, isoflavon, probiotik.<br><br>
        <b>● Fungsi:</b><br>
        - Protein mendukung pertumbuhan dan perbaikan jaringan.<br>
        - Probiotik baik untuk kesehatan usus.`
    },
    'ayam': { 
        judul: "Ayam", 
        isi: `
        <b>● Kandungan Utama:</b><br>
        Protein berkualitas tinggi, vitamin B6, B3, selenium, fosfor.<br><br>
        <b>● Fungsi:</b><br>
        - Protein membantu membangun otot dan memperbaiki jaringan.<br>
        - Vitamin B6 dan B3 mendukung metabolisme dan fungsi saraf serta kulit.`
    },
    'pisang': { 
        judul: "Buah Pisang", 
        isi: `
        <b>● Kandungan Utama:</b><br>
        kalium, magnesium, vitamin C, vitamin B6, serat, dan karbohidrat.<br><br>
        <b>● Fungsi:</b><br>
        - Vitamin C meningkatkan daya tahan tubuh dan mempercepat penyembuhan luka.<br>
        - Magnesium berfungsi untuk mendukung fungsi otot dan saraf.`
    },
    'jeruk': { 
        judul: "Buah Jeruk", 
        isi: `
        <b>● Kandungan Utama:</b><br>
        Vitamin C, flavonoid (hesperidin), serat, kalium.<br><br>
        <b>● Fungsi:</b><br>
        - Vitamin C meningkatkan sistem kekebalan tubuh dan melindungi sel.<br>
        - Flavonoid menjaga kesehatan jantung dan menurunkan tekanan darah.`
    },
    'air': { 
        judul: "Air Putih", 
        isi: `
        <b>● Kandungan Utama:</b><br>
        Air murni, bisa mengandung sedikit mineral tergantung sumbernya.<br><br>
        <b>● Fungsi:</b><br>
        - Mengatur suhu tubuh.<br>
        - Membantu pencernaan dan mencegah sembelit.`
    }
};

// --- FUNGSI NAVIGASI & BACKGROUND ---
function showSection(sectionId) {
    const sections = ['home', 'presentasi', 'artikel-word'];
    
    // Sembunyikan semua
    sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.add('hidden');
    });

    // Tampilkan yang dipilih
    const selected = document.getElementById(sectionId);
    if(selected) selected.classList.remove('hidden');

    const btnBack = document.getElementById('btn-back-home');
    
    // ATUR BACKGROUND
    if (sectionId === 'home') {
        btnBack.classList.add('hidden');
        // GRADIENT HIJAU UNTUK DASHBOARD
        document.body.style.background = "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)";
    } else {
        btnBack.classList.remove('hidden');
        
        if (sectionId === 'artikel-word') {
            // Background Meja Kayu
            document.body.style.background = "url('https://images.unsplash.com/photo-1579370894566-64c9d7d42576?q=80&w=2000&auto=format&fit=crop') no-repeat center center fixed";
            document.body.style.backgroundSize = "cover";
        } else if (sectionId === 'presentasi') {
            // Hijau Polos Lembut
            document.body.style.background = "#e8f5e9";
        }
    }
}

// --- MODAL POPUP ---
function openFoodModal(kode) {
    const data = dataMakanan[kode];
    if (data) {
        document.getElementById('modal-title').innerText = data.judul;
        document.getElementById('modal-body').innerHTML = data.isi;
        document.getElementById('food-modal-overlay').classList.remove('hidden');
    }
}

function closeFoodModal() {
    document.getElementById('food-modal-overlay').classList.add('hidden');
}