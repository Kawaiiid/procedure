// Fungsi untuk menampilkan prosedur
function displayProcedures(proceduresToShow) {
    const procedureContainer = document.getElementById('procedureContainer');
    procedureContainer.innerHTML = '';
    
    if (proceduresToShow.length === 0) {
        procedureContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>Prosedur tidak ditemukan</h3>
                <p>Coba gunakan kata kunci lain atau pilih kategori berbeda</p>
            </div>
        `;
        return;
    }
    
    proceduresToShow.forEach(proc => {
        const card = document.createElement('div');
        card.className = 'procedure-card';
        
        // Tambahkan scroll untuk prosedur panjang
        const bodyClass = proc.steps.length > 5 ? 'scrollable-content' : '';
        
        card.innerHTML = `
            <div class="card-header">
                <h3>${proc.title}</h3>
                <p>${proc.category}</p>
            </div>
            <div class="card-body ${bodyClass}">
                <ol class="procedure-steps">
                    ${proc.steps.map(step => `<li>${step}</li>`).join('')}
                </ol>
                ${proc.notes ? `<p><strong>Catatan:</strong> ${proc.notes}</p>` : ''}
            </div>
        `;
        procedureContainer.appendChild(card);
    });
}

// Fungsi untuk mengisi filter kategori
function populateCategoryFilter() {
    const categoryFilter = document.getElementById('categoryFilter');
    const categories = [...new Set(procedures.map(p => p.category))];
    
    // Kosongkan dulu select box
    while (categoryFilter.options.length > 1) {
        categoryFilter.remove(1);
    }
    
    // Tambahkan kategori dari data
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });
}

// Fungsi untuk filter prosedur
function filterProcedures() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const selectedCategory = document.getElementById('categoryFilter').value;
    
    const filtered = procedures.filter(proc => {
        const matchesSearch = proc.title.toLowerCase().includes(searchTerm) || 
                             proc.steps.some(step => step.toLowerCase().includes(searchTerm));
        const matchesCategory = selectedCategory === "" || proc.category === selectedCategory;
        
        return matchesSearch && matchesCategory;
    });
    
    displayProcedures(filtered);
}

// Fungsi untuk navigasi aktif
function setupNavigation() {
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function() {
            document.querySelectorAll('nav a').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Inisialisasi saat DOM siap
document.addEventListener('DOMContentLoaded', function() {
    populateCategoryFilter();
    displayProcedures(procedures);
    setupNavigation();
    
    // Event listeners
    document.getElementById('searchInput').addEventListener('input', filterProcedures);
    document.getElementById('categoryFilter').addEventListener('change', filterProcedures);
});
