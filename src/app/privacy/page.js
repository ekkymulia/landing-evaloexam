import "../../../public/css/vendors/menu.css"
import "../../../public/css/custom.css"
import "../../../public/css/style.css"

import FooterLanding from "@/components/Footer/landing";
import NavbarLanding from "@/components/NavbarLanding";
import Image from "next/image";
import Accordion from "@/components/AboutAccordion/Accordion";


export default function Privacy() {
  return (
    <div className="page-wrapper relative z-[1] bg-white">
      <NavbarLanding/>

      <main className="main-wrapper relative overflow-hidden">
        {/*...::: Features Section Start :::... */}
        <section className="section-features mt-16">
          {/* Section Background */}
          <div className="bg-ColorBlue/5">
            {/* Section Space */}
            <div className="section-space">
              {/* Section Container */}
              <div className="container-default">
                <div className="max-w-4xl mx-auto px-4 py-10">
                    <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">Kebijakan Privasi</h1>
                    <p className="text-center text-gray-600">Tanggal Berlaku: 20 Oktober 2024</p>

                    <section className="mt-10">
                        <p className="mb-4">
                            Di <strong>EvaloExam</strong>, kami berkomitmen untuk melindungi privasi Anda dan memastikan bahwa informasi pribadi Anda ditangani dengan aman dan bertanggung jawab. Kebijakan Privasi ini menjelaskan jenis informasi pribadi yang kami kumpulkan, bagaimana kami menggunakannya, dan langkah-langkah yang kami ambil untuk menjaga keamanan data Anda.
                        </p>
                    </section>

                    <section className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Informasi yang Kami Kumpulkan</h2>
                        <p className="mb-4">Kami mungkin mengumpulkan jenis informasi pribadi berikut:</p>
                        <ul className="list-disc list-inside mb-4">
                            <li><strong>Informasi Identifikasi Pribadi (PII):</strong> Nama, alamat email, nomor telepon, alamat surat, dll.</li>
                            <li><strong>Data Penggunaan:</strong> Informasi tentang bagaimana Anda berinteraksi dengan situs web atau aplikasi kami, seperti alamat IP, jenis peramban, sistem operasi, dan halaman yang dikunjungi.</li>
                            <li><strong>Cookies dan Data Pelacakan:</strong> Cookies dan teknologi pelacakan serupa untuk meningkatkan pengalaman Anda dan mengumpulkan informasi tentang bagaimana Anda menggunakan layanan kami.</li>
                        </ul>
                    </section>

                    <section className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Bagaimana Kami Menggunakan Informasi Anda</h2>
                        <p className="mb-4">Kami mungkin menggunakan informasi Anda untuk tujuan berikut:</p>
                        <ul className="list-disc list-inside mb-4">
                            <li><strong>Untuk Menyediakan dan Memelihara Layanan Kami:</strong> Kami menggunakan data yang dikumpulkan untuk memastikan fungsionalitas situs web atau aplikasi kami.</li>
                            <li><strong>Untuk Meningkatkan Layanan Kami:</strong> Kami menganalisis perilaku pengguna untuk meningkatkan kualitas dan kinerja layanan kami.</li>
                            <li><strong>Untuk Berkomunikasi dengan Anda:</strong> Kami dapat menghubungi Anda melalui email, telepon, atau saluran lain untuk dukungan pelanggan, pembaruan, atau tujuan pemasaran.</li>
                            <li><strong>Untuk Tujuan Hukum dan Keamanan:</strong> Untuk melindungi dari penipuan, transaksi yang tidak sah, atau aktivitas ilegal lainnya.</li>
                        </ul>
                    </section>

                    <section className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Berbagi Informasi Anda</h2>
                        <p className="mb-4">
                            Kami tidak menjual atau menyewakan informasi pribadi Anda kepada pihak ketiga. Kami mungkin membagikan data Anda dalam keadaan berikut:
                        </p>
                        <ul className="list-disc list-inside mb-4">
                            <li><strong>Dengan Penyedia Layanan:</strong> Kami mungkin berbagi data Anda dengan perusahaan pihak ketiga terpercaya yang membantu kami menyediakan layanan, seperti pemroses pembayaran atau penyedia hosting.</li>
                            <li><strong>Untuk Alasan Hukum:</strong> Jika diwajibkan oleh hukum, kami dapat mengungkapkan informasi pribadi Anda untuk mematuhi kewajiban hukum atau untuk melindungi hak, keamanan, dan properti perusahaan dan pengguna kami.</li>
                        </ul>
                    </section>

                    <section className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Keamanan Informasi Anda</h2>
                        <p className="mb-4">
                            Kami mengambil langkah-langkah yang wajar untuk melindungi informasi pribadi Anda dari akses, penggunaan, atau pengungkapan yang tidak sah. Namun, harap dicatat bahwa tidak ada metode transmisi melalui internet yang 100% aman.
                        </p>
                    </section>

                    <section className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Hak Anda</h2>
                        <p className="mb-4">Anda memiliki hak-hak berikut terkait dengan informasi pribadi Anda:</p>
                        <ul className="list-disc list-inside mb-4">
                            <li><strong>Akses:</strong> Anda dapat meminta salinan data pribadi yang kami miliki tentang Anda.</li>
                            <li><strong>Perbaikan:</strong> Anda dapat meminta kami untuk memperbarui atau memperbaiki informasi yang tidak akurat.</li>
                            <li><strong>Penghapusan:</strong> Anda dapat meminta kami untuk menghapus data pribadi Anda, tergantung pada kewajiban hukum tertentu.</li>
                            <li><strong>Keberatan dan Pembatasan:</strong> Anda berhak menolak pemrosesan data pribadi Anda dan meminta pembatasan bagaimana kami memproses data Anda.</li>
                        </ul>
                    </section>

                    <section className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Kebijakan Cookies</h2>
                        <p className="mb-4">
                            Kami menggunakan cookies untuk meningkatkan pengalaman pengguna di situs kami. Anda dapat memilih untuk menerima atau menolak cookies dengan mengatur preferensi peramban Anda, namun hal ini mungkin membatasi beberapa fitur dari situs web kami.
                        </p>
                    </section>

                    <section className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Perubahan pada Kebijakan Privasi Ini</h2>
                        <p className="mb-4">
                            Kami mungkin memperbarui Kebijakan Privasi ini dari waktu ke waktu. Kami akan memberi tahu Anda tentang perubahan apa pun dengan memposting Kebijakan Privasi baru di situs web kami. Harap tinjau kebijakan ini secara berkala untuk mengetahui pembaruan apa pun.
                        </p>
                    </section>

                    <section className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Hubungi Kami</h2>
                        <p className="mb-4">Jika Anda memiliki pertanyaan atau kekhawatiran tentang Kebijakan Privasi ini, silakan hubungi kami di:</p>
                        <p><strong>EvaloExam</strong></p>
                        <p>Email: <a href="mailto:evaloexam@gmail.com" className="text-blue-600 hover:underline">evaloexam@gmail.com</a></p>
                        <p>Website: <a href="https://evaloexam.web.id" className="text-blue-600 hover:underline">https://evaloexam.web.id</a></p>
                        <p>Instagram: <a href="https://instagram.com/evaloexam" className="text-blue-600 hover:underline">@evaloexam</a></p>
                    </section>
                </div>
                {/* Feature List */}
              </div>
              {/* Section Container */}
            </div>
            {/* Section Space */}
          </div>
          {/* Section Background */}
        </section>
        {/*...::: Features Section End :::... */}
      </main>

      <FooterLanding/>
    </div>
  );
}
