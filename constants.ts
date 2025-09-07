import type { Question, GroupMember } from './types';

export const MAJORS: string[] = [
    "Pendidikan Komputer",
    "Pendidikan Bahasa Sastra Indonesia"
];

export const GROUP_MEMBERS: GroupMember[] = [
    { name: "M.Maulana Yusuf", nim: "2510131210010", major: "Pendidikan Komputer" },
    { name: "Delanova", nim: "2105123457", major: "Pendidikan Bahasa Sastra Indonesia" },
    { name: "Nabila Salma Azahra", nim: "2105123458", major: "Pendidikan Komputer" },
    { name: "Nadia Ulpah", nim: "2105123459", major: "Pendidikan Bahasa Sastra Indonesia" },
    { name: "Sonya", nim: "2105123460", major: "Pendidikan Komputer" },
    { name: "Ima", nim: "2105123461", major: "Pendidikan Bahasa Sastra Indonesia" },
];

export const QUIZ_QUESTIONS: Question[] = [
    {
        question: "Di era disrupsi digital, nilai Pancasila yang paling relevan untuk menangkal berita bohong (hoax) dan ujaran kebencian adalah...",
        options: {
            A: "Ketuhanan Yang Maha Esa",
            B: "Kemanusiaan yang adil dan beradab",
            C: "Persatuan Indonesia",
            D: "Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan"
        },
        correctAnswer: "C"
    },
    {
        question: "Bagaimana cara generasi muda mengimplementasikan sila 'Kemanusiaan yang adil dan beradab' di dunia maya?",
        options: {
            A: "Hanya berteman dengan orang yang sepaham",
            B: "Mengabaikan perundungan siber (cyberbullying)",
            C: "Menghargai perbedaan pendapat dan tidak menghakimi",
            D: "Menyebarkan informasi pribadi orang lain"
        },
        correctAnswer: "C"
    },
    {
        question: "Tantangan terbesar bagi 'Persatuan Indonesia' di era globalisasi dan disrupsi adalah...",
        options: {
            A: "Masuknya investasi asing",
            B: "Menguatnya identitas lokal yang sempit dan intoleransi",
            C: "Perkembangan teknologi komunikasi",
            D: "Pertukaran budaya antar negara"
        },
        correctAnswer: "B"
    },
    {
        question: "Pancasila sebagai 'filter' atau penyaring budaya asing berarti...",
        options: {
            A: "Menolak semua budaya asing tanpa terkecuali",
            B: "Menerima budaya asing yang sesuai dengan kepribadian bangsa",
            C: "Mengganti total budaya lokal dengan budaya asing yang lebih modern",
            D: "Bersikap acuh tak acuh terhadap budaya asing"
        },
        correctAnswer: "B"
    },
    {
        question: "Sikap yang mencerminkan sila 'Keadilan sosial bagi seluruh rakyat Indonesia' dalam menghadapi ketimpangan ekonomi di era digital adalah...",
        options: {
            A: "Mendukung monopoli platform e-commerce besar",
            B: "Mempromosikan produk UMKM lokal di media sosial",
            C: "Hanya membeli produk impor yang populer",
            D: "Tidak peduli dengan kondisi ekonomi orang lain"
        },
        correctAnswer: "B"
    },
    {
        question: "Dalam konteks pengembangan karakter, era disrupsi menuntut individu untuk memiliki kemampuan adaptif. Nilai Pancasila yang mendukung hal ini adalah...",
        options: {
            A: "Sikap pasrah pada takdir",
            B: "Semangat gotong royong dan musyawarah untuk mufakat",
            C: "Individualisme yang kuat",
            D: "Menjaga tradisi secara kaku"
        },
        correctAnswer: "B"
    },
    {
        question: "Pancasila disebut sebagai ideologi terbuka. Di era disrupsi, keterbukaan ini dimaknai sebagai...",
        options: {
            A: "Kemampuan untuk diubah kapan saja sesuai keinginan mayoritas",
            B: "Kemampuan berdialog dengan perkembangan zaman tanpa kehilangan nilai dasarnya",
            C: "Kemampuan menyerap semua ideologi asing tanpa filter",
            D: "Ideologi yang sudah tidak relevan lagi"
        },
        correctAnswer: "B"
    },
    {
        question: "Salah satu karakter bangsa yang perlu diperkuat untuk menghadapi disrupsi teknologi adalah literasi digital. Hal ini sejalan dengan semangat sila ke...",
        options: {
            A: "Satu",
            B: "Dua",
            C: "Tiga",
            D: "Empat dan Lima, untuk kebijaksanaan dan keadilan"
        },
        correctAnswer: "D"
    },
    {
        question: "Praktik 'flexing' atau pamer kemewahan di media sosial bertentangan dengan prinsip Pancasila, terutama sila...",
        options: {
            A: "Ketuhanan Yang Maha Esa",
            B: "Kemanusiaan yang adil dan beradab",
            C: "Persatuan Indonesia",
            D: "Keadilan sosial bagi seluruh rakyat Indonesia"
        },
        correctAnswer: "D"
    },
    {
        question: "Musyawarah untuk mencapai mufakat (Sila ke-4) di era digital dapat diwujudkan melalui...",
        options: {
            A: "Perang tagar (hashtag war) di media sosial",
            B: "Menyebarkan isu SARA untuk menjatuhkan lawan politik",
            C: "Diskusi yang sehat dan konstruktif di forum online",
            D: "Polling di media sosial yang hasilnya bisa dimanipulasi"
        },
        correctAnswer: "C"
    },
    {
        question: "Bagaimana Pancasila dapat menjadi landasan etika dalam pengembangan dan penggunaan kecerdasan buatan (AI) di Indonesia?",
        options: {
            A: "AI harus dikembangkan untuk keuntungan segelintir orang",
            B: "Pengembangan AI harus sejalan dengan nilai kemanusiaan dan keadilan",
            C: "Indonesia tidak perlu mengembangkan AI karena berisiko",
            D: "Etika tidak penting dalam pengembangan teknologi"
        },
        correctAnswer: "B"
    },
    {
        question: "Fanatisme berlebihan terhadap tokoh atau kelompok di media sosial dapat mengancam nilai...",
        options: {
            A: "Ketuhanan",
            B: "Kemanusiaan",
            C: "Persatuan",
            D: "Keadilan"
        },
        correctAnswer: "C"
    },
    {
        question: "Karakter bangsa yang tangguh di era disrupsi adalah yang mampu menyeimbangkan antara hak dan kewajiban. Ini adalah cerminan dari sila...",
        options: {
            A: "Pertama",
            B: "Kedua",
            C: "Ketiga",
            D: "Kelima"
        },
        correctAnswer: "D"
    },
    {
        question: "Menghargai karya kreatif anak bangsa di platform digital dan tidak melakukan pembajakan adalah bentuk pengamalan Pancasila, khususnya sila...",
        options: {
            A: "Ketuhanan Yang Maha Esa",
            B: "Kemanusiaan yang adil dan beradab",
            C: "Persatuan Indonesia",
            D: "Keadilan Sosial"
        },
        correctAnswer: "B"
    },
    {
        question: "Peran utama Pancasila dalam membangun karakter bangsa di era disrupsi adalah sebagai...",
        options: {
            A: "Aturan hukum yang kaku dan tidak bisa ditafsirkan",
            B: "Sekedar simbol negara tanpa makna",
            C: "Dasar negara, pandangan hidup, dan fondasi moral dalam beradaptasi",
            D: "Alat untuk menentang modernisasi dan kemajuan"
        },
        correctAnswer: "C"
    }
];