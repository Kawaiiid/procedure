// Data prosedur laboratorium
const procedures = [
    {
        id: 1,
        title: "Hitung Darah Lengkap (HDL)",
        category: "Hematologi",
        steps: [
            "Siapkan tabung EDTA (ungu)",
            "Ambil sampel darah vena 2-3 mL",
            "Segera homogenkan dengan memutar tabung",
            "Analisis dengan hematology analyzer"
        ],
        notes: "Hindari hemolisis. Sampel stabil 24 jam pada suhu ruang."
    },
    {
        id: 2,
        title: "Pemeriksaan Glukosa Darah",
        category: "Kimia Klinik",
        steps: [
            "Pasien puasa 8-12 jam (untuk glukosa puasa)",
            "Ambil sampel darah ke tabung fluorida",
            "Segera sentrifugasi jika menggunakan serum",
            "Analisis dengan metode enzimatik"
        ],
        notes: "Untuk TGO, ambil sampel dasar dan 2 jam post-load."
    },
    {
        id: 3,
        title: "Pewarnaan Gram",
        category: "Mikrobiologi",
        steps: [
            "Siapkan preparat dari spesimen klinis",
            "Fiksasi dengan panas",
            "Berikan kristal violet selama 1 menit",
            "Dekolorisasi dengan alkohol-aseton",
            "Berikan safranin sebagai counterstain"
        ],
        notes: "Gunakan kontrol positif setiap batch pemeriksaan."
    },
    {
        id: 4,
        title: "Tes ELISA HIV",
        category: "Imunologi",
        steps: [
            "Siapkan microplate ELISA",
            "Tambahkan kontrol dan sampel serum",
            "Inkubasi pada suhu 37°C selama 60 menit",
            "Cuci plate dengan buffer wash",
            "Tambahkan substrat dan baca hasil"
        ],
        notes: "Semua sampel reaktif harus dikonfirmasi dengan tes Western Blot."
    },
    {
        id: 5,
        title: "PCR COVID-19 (RT-PCR SARS-CoV-2)",
        category: "Molekuler",
        steps: [
            "Persiapan area kerja: pastikan area kerja bersih dan sudah disterilkan",
            "Siapkan alat dan reagen: ekstraksi kit, PCR master mix, kontrol positif dan negatif",
            "Ambil sampel: gunakan swab nasofaring/orofaring dengan media transport virus",
            "Ekstraksi RNA: lakukan ekstraksi RNA sesuai protokol kit yang digunakan",
            "Penyiapan reaksi PCR: campurkan 5μl RNA template dengan 15μl master mix",
            "Setup PCR machine: program thermal cycler sesuai protokol",
            "Running PCR: masukkan plate ke dalam mesin PCR dan jalankan program",
            "Analisis hasil: interpretasikan kurva amplifikasi sesuai kriteria validasi",
            "Validasi hasil: pastikan kontrol internal, positif dan negatif valid",
            "Pencatatan hasil: dokumentasikan semua data pengujian",
            "Pembuangan sampel: buang sampel dan limbah sesuai protokol bio-safety",
            "Pembersihan area kerja: lakukan dekontaminasi permukaan kerja"
        ],
        notes: "Seluruh proses harus dilakukan di ruangan BSL-2. Gunakan APD lengkap selama penanganan sampel. Validasi metode harus dilakukan secara berkala."
    }
];
