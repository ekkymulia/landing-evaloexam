import "../../../public/css/vendors/menu.css"
import "../../../public/css/custom.css"
import "../../../public/css/style.css"

import FooterLanding from "@/components/Footer/landing";
import NavbarLanding from "@/components/NavbarLanding";
import Image from "next/image";
import Accordion from "@/components/AboutAccordion/Accordion";


export default function Pricing() {
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
                {/* Section Content Wrapper */}
                <div className="jos mb-[60px] xl:mb-20">
                  {/* Section Content Block */}
                  <div className="mx-auto max-w-[636px]">
                    <h2 className="text-center">
                      Paket yang Terjangkau untuk Kebutuhan Pembelajaran Anda
                    </h2>
                  </div>
                  {/* Section Content Block */}
                </div>
                {/* Section Content Wrapper */}
                {/* Feature List */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {/* Feature Item */}
                  <div className="jos" data-jos_delay={0}>
                    <div className="hover-solid-shadow h-full">
                      <div className="justify-start items-start h-full flex flex-col rounded-[10px] border-2 border-ColorBlack bg-white p-[30px]">
                        <img
                          src="https://masco-tailwind.netlify.app/assets/img/icons/icon-duotone-user-list.svg"
                          alt="icon-duotone-user-list"
                          width={60}
                          height={60}
                          className="mb-[30px] h-[60px] w-auto"
                        />
                        <div className="mb-4 text-xl font-semibold leading-[1.33] -tracking-[0.5px] text-black lg:text-2xl">
                          Paket per Semester
                        </div>
                        <div className="mb-4 text-xl font-semibold leading-[1.33] -tracking-[0.5px] text-black lg:text-2xl">
                          IDR 10.850.000,-
                        </div>
                        <p className="my-0"><strong>Yang akan anda dapatkan:</strong></p>
                        <ul className="mb-5">
                          <li><strong>- 10x Upload Pelajaran Berbeda</strong></li>
                          <li><strong>- 10x Ruang Ujian</strong></li>
                          <li><strong>- 150x Sesi Siswa Mengerjakan</strong></li>
                          <li><strong>- 4500x Generasi dan Analisa soal menggunakan AI</strong></li>
                          <li className="mt-4"><strong>Kuota Sistem:</strong></li>
                          <li><strong>- 1x Kuota Pembuatan Institusi</strong></li>
                          <li><strong>- 12+ Akun Multi Role (2x Akun Admin, 10x Akun Pengajar, Unlimited Akun Siswa)</strong></li>
                        </ul>
                        <div className="mt-auto w-full flex justify-end items-end">
                          <a
                            href="https://bit.ly/contact-evaloexam"
                            className="w-full btn is-outline-black btn-animation is-large inline-block rounded justify-end items-end"
                          >
                            <span>Kontak Kami</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Feature Item */}
                  {/* Feature Item */}
                  <div className="jos" data-jos_delay="0.3">
                    <div className="hover-solid-shadow h-full">
                      <div className="justify-start items-start h-full flex flex-col rounded-[10px] border-2 border-ColorBlack bg-white p-[30px]">
                        <img
                          src="https://masco-tailwind.netlify.app/assets/img/icons/icon-duotone-user-list.svg"
                          alt="icon-duotone-user-list"
                          width={60}
                          height={60}
                          className="mb-[30px] h-[60px] w-auto"
                        />
                        <div className="mb-4 text-xl font-semibold leading-[1.33] -tracking-[0.5px] text-black lg:text-2xl">
                          Paket Licensed Solution
                        </div>
                        <div className="mb-4 text-xl font-semibold leading-[1.33] -tracking-[0.5px] text-black lg:text-2xl">
                          IDR 64.999.999,-
                        </div>
                        <p className="my-0"><strong>Yang akan anda dapatkan:</strong></p>
                        <ul className="mb-5">
                          <li><strong>- Lisensi Digital dan Salinan Produk untuk dijalankan di server sendiri</strong></li>
                          <li><strong>- Kostumisasi lebih lanjut pada produk yang lebih disesuaikan</strong></li>
                          <li><strong>- Maintanance Update Patch dan Security</strong></li>
                          <li className="mt-4"><strong>Kuota Sistem:</strong></li>
                          <li><strong>- Unlimited Kuota Pembuatan Institusi</strong></li>
                          <li><strong>- Unlimited Akun Multi Role</strong></li>
                        </ul>
                        <div className="mt-auto w-full flex justify-end items-end">
                          <a
                            href="https://bit.ly/contact-evaloexam"
                            className="w-full btn is-outline-black btn-animation is-large inline-block rounded justify-end items-end"
                          >
                            <span>Kontak Kami</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Feature Item */}
                  {/* Feature Item */}
                  <div className="jos" data-jos_delay="0.6">
                    <div className="hover-solid-shadow h-full">
                      <div className="justify-start items-start h-full flex flex-col rounded-[10px] border-2 border-ColorBlack bg-white p-[30px]">
                        <img
                          src="https://masco-tailwind.netlify.app/assets/img/icons/icon-duotone-user-list.svg"
                          alt="icon-duotone-user-list"
                          width={60}
                          height={60}
                          className="mb-[30px] h-[60px] w-auto"
                        />
                        <div className="mb-4 text-xl font-semibold leading-[1.33] -tracking-[0.5px] text-black lg:text-2xl">
                          Paket Starter
                        </div>
                        <div className="mb-4 text-xl font-semibold leading-[1.33] -tracking-[0.5px] text-black lg:text-2xl">
                          IDR 1.547.435,- / bulan
                        </div>
                        <p className="my-0"><strong>Yang akan anda dapatkan (per bulan):</strong></p>
                        <ul className="mb-5">
                          <li><strong>- 1x Upload Pelajaran Berbeda</strong></li>
                          <li><strong>- 5x Ruang Ujian</strong></li>
                          <li><strong>- 15x Sesi Siswa Mengerjakan</strong></li>
                          <li><strong>- 225x Generasi dan Analisa soal menggunakan AI</strong></li>
                          <li className="mt-4"><strong>Kuota Sistem:</strong></li>
                          <li><strong>- 1x Kuota Pembuatan Institusi</strong></li>
                          <li><strong>- 3+ Akun Multi Role (1x Akun Admin, 2x Akun Pengajar, Unlimited Akun Siswa)</strong></li>
                        </ul>

                        <div className="w-full mt-auto flex justify-end items-end">
                          <a
                            href="https://bit.ly/contact-evaloexam"
                            className="w-full btn is-outline-black btn-animation is-large inline-block rounded justify-end items-end"
                          >
                            <span>Kontak Kami</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>


                  {/* Feature Item */}
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
        {/*...::: Feature Section Start :::... */}
        <section className="section-features">
            <div className="bg-ColorOffWhite">
            {/* Section Space */}
            <div className="section-space">
                {/* Section Container */}
                <div className="container-default">
                {/* Section Content Wrapper */}
                <div className="jos mb-[60px] xl:mb-20">
                    {/* Section Content Block */}
                    <div className="mx-auto max-w-[700px]">
                    <h2 className="text-center">
                        Harga paling terjangkau dikelasnya, dengan banyak benefit tambahan.
                    </h2>
                    </div>
                    {/* Section Content Block */}
                </div>
                {/* Section Content Wrapper */}
                {/* Feature List */}
                <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-3 xl:gap-10 xxl:gap-x-20 xxl:gap-y-[60px]">
                    {/* Feature Item */}
                    <div
                    className="jos"
                    data-jos_animation="fade-left"
                    data-jos_delay={0}
                    >
                    <div className="flex flex-col gap-6 text-center lg:flex-row lg:text-left">
                        <img
                        src="https://masco-tailwind.netlify.app/assets/img/icons/icon-yellow-feature-1.svg"
                        alt="icon-yellow-feature-1"
                        width={60}
                        height={60}
                        className="mx-auto h-[60px] w-[60px] lg:mx-0"
                        />
                        <div>
                        <div className="mb-4 text-xl font-semibold leading-[1.33] -tracking-[0.5] xxl:text-2xl">
                        Dukungan Pelanggan yang Responsif
                        </div>
                        <p>
                        Kami menghargai setiap pelanggan yang telah mempercayai layanan kami. Tim dukungan kami siap membantu menyelesaikan masalah Anda dengan cepat dan efisien.
                        </p>
                        </div>
                    </div>
                    </div>
                    {/* Feature Item */}
                    {/* Feature Item */}
                    <div
                    className="jos"
                    data-jos_animation="fade-left"
                    data-jos_delay="0.3"
                    >
                    <div className="flex flex-col gap-6 text-center lg:flex-row lg:text-left">
                        <img
                        src="https://masco-tailwind.netlify.app/assets/img/icons/icon-yellow-feature-2.svg"
                        alt="icon-yellow-feature-1"
                        width={60}
                        height={60}
                        className="mx-auto h-[60px] w-[60px] lg:mx-0"
                        />
                        <div>
                        <div className="mb-4 text-xl font-semibold leading-[1.33] -tracking-[0.5] xxl:text-2xl">
                        Promo bagi para Early Adopters
                        </div>
                        <p>
                        Kami berkomitmen untuk memajukan edukasi di era teknologi AI yang berkembang. <strong>Kami memberikan promo khusus sampai 50%</strong> bagi pengguna yang mendaftar lebih awal.
                        </p>
                        </div>
                    </div>
                    </div>
                    {/* Feature Item */}
                    {/* Feature Item */}
                    <div
                    className="jos"
                    data-jos_animation="fade-left"
                    data-jos_delay="0.6"
                    >
                    <div className="flex flex-col gap-6 text-center lg:flex-row lg:text-left">
                        <img
                        src="https://masco-tailwind.netlify.app/assets/img/icons/icon-yellow-feature-5.svg"
                        alt="icon-yellow-feature-5"
                        width={60}
                        height={60}
                        className="mx-auto h-[60px] w-[60px] lg:mx-0"
                        />
                        <div>
                        <div className="mb-4 text-xl font-semibold leading-[1.33] -tracking-[0.5] xxl:text-2xl">
                        Selalu Mendengar Suara Anda
                        </div>
                        <p>
                        Kami percaya pada potensi aplikasi kami dan sangat menghargai umpan balik dari Anda. Kami siap untuk menambahkan dan mempebaiki fitur sesuai dengan masukan dari anda.
                        </p>
                        </div>
                    </div>
                    </div>
                    {/* Feature Item */}
                </div>
                {/* Feature List */}
                </div>
                {/* Section Container */}
            </div>
            {/* Section Space */}
            </div>
        </section>
        {/*...::: Team Section End :::... */}
        {/*...::: FAQ Section Start :::... */}
        <section className="section-faq">
            {/* Section Space */}
            <div className="section-space">
            {/* Section Container */}
            <div className="container-default">
                {/* Section Content Wrapper */}
                <div className="jos mb-[60px] xl:mb-20">
                {/* Section Content Block */}
                <div className="mx-auto max-w-[625px]">
                    <h2 className="text-center">
                    Pertanyaan yang sering diajukan kepada kami
                    </h2>
                </div>
                {/* Section Content Block */}
                </div>
                {/* Section Content Wrapper */}
                {/* FAQ Area */}
                <Accordion/>
                {/* FAQ Area */}
            </div>
            {/* Section Container */}
            </div>
            {/* Section Space */}
        </section>
      </main>

      <FooterLanding/>
    </div>
  );
}
