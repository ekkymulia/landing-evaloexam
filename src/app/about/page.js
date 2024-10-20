import "../../../public/css/vendors/menu.css"
import "../../../public/css/custom.css"
import "../../../public/css/style.css"

import FooterLanding from "@/components/Footer/landing";
import NavbarLanding from "@/components/NavbarLanding";
import Image from "next/image";
import Accordion from "@/components/AboutAccordion/Accordion";


export default function About() {
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
                      #EvaloExam: Revolutionizing AI in the Education Sector
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
                      <div className="h-full rounded-[10px] border-2 border-ColorBlack bg-white p-[30px]">
                        <img
                          src="https://masco-tailwind.netlify.app/assets/img/icons/icon-duotone-translate.svg"
                          alt="icon-duotone-translate"
                          width={60}
                          height={60}
                          className="mb-[30px] h-[60px] w-auto"
                        />
                        <div className="mb-4 text-xl font-semibold leading-[1.33] -tracking-[0.5px] text-black lg:text-2xl">
                          Pembuatan soal automatis
                        </div>
                        <p>
                          Soal dibuat berdasarkan analisis respons siswa menggunakan Generative AI
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Feature Item */}
                  {/* Feature Item */}
                  <div className="jos" data-jos_delay="0.3">
                    <div className="hover-solid-shadow h-full">
                      <div className="h-full rounded-[10px] border-2 border-ColorBlack bg-white p-[30px]">
                        <img
                          src="https://masco-tailwind.netlify.app/assets/img/icons/icon-duotone-user-list.svg"
                          alt="icon-duotone-user-list"
                          width={60}
                          height={60}
                          className="mb-[30px] h-[60px] w-auto"
                        />
                        <div className="mb-4 text-xl font-semibold leading-[1.33] -tracking-[0.5px] text-black lg:text-2xl">
                          Manajemen pelajaran
                        </div>
                        <p>
                          Dashboard khusus yang digunakan untuk manajemen materi, modul, ruangan ujian
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Feature Item */}
                  {/* Feature Item */}
                  <div className="jos" data-jos_delay="0.6">
                    <div className="hover-solid-shadow h-full">
                      <div className="h-full rounded-[10px] border-2 border-ColorBlack bg-white p-[30px]">
                        <img
                          src="https://masco-tailwind.netlify.app/assets/img/icons/icon-duotone-private-message.svg"
                          alt="icon-duotone-private-message"
                          width={60}
                          height={60}
                          className="mb-[30px] h-[60px] w-auto"
                        />
                        <div className="mb-4 text-xl font-semibold leading-[1.33] -tracking-[0.5px] text-black lg:text-2xl">
                          Hasil evaluasi dari AI
                        </div>
                        <p>
                          Laporan hasil evaluasi yang digabung dengan feedback dari Generative AI
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
          {/* Section Background */}
        </section>
        {/*...::: Features Section End :::... */}
        {/*...::: Fact Section Start :::... */}
        <section className="section-fact">
            {/* Section Space */}
            <div className="section-space">
            {/* Section Container */}
            <div className="container-custom has-container-custom">
                {/* Fact Area Block */}
                <div className="grid gap-10 gap-x-12 lg:grid-cols-2 xl:grid-cols-[1fr_minmax(0,_0.7fr)] xxl:gap-x-[185px]">
                {/* Content Block Left */}
                <div
                    className="jos"
                    data-jos_animation="fade-right"
                    data-jos_delay={0}
                >
                    {/* Section Wrapper */}
                    <div>
                    {/* Section Block */}
                    <div className="mb-5">
                        <h2>
                        Bukan hanya aplikasi, tapi identitas pembelajaran modern dan inovatif.
                        </h2>
                    </div>
                    {/* Section Block */}
                    <p>
                        Dengan teknologi kecerdasan buatan, kami menciptakan pengalaman belajar yang lebih personal dan adaptif, membuat proses belajar menjadi lebih intuitif dan terarah.
                    </p>
                    </div>
                </div>
                {/* Content Block Left */}
                {/* Content Block Right */}
                <div>
                    {/* Counter List */}
                    <div className="grid items-center justify-center gap-6 sm:grid-cols-2 sm:gap-0.5 sm:bg-ColorOffWhite">
                    {/* Counter Item */}
                    <div className="text-center sm:bg-white sm:pb-10">
                        <div
                        className="mb-1 font-PlusJakartaSans text-4xl font-extrabold leading-[1.2] -tracking-[1px] text-ColorBlack sm:text-5xl lg:text-[64px] xl:text-[70px]"
                        data-module="countup"
                        >
                        <span className="start-number" data-countup-number={36}>
                            77.08
                        </span>
                        
                        </div>
                        <span className="text-xl font-semibold text-ColorBlue">
                        Skor System Usability
                        </span>
                    </div>
                    {/* Counter Item */}
                    {/* Counter Item */}
                    <div className="text-center sm:bg-white sm:pb-10">
                        <div
                        className="mb-1 font-PlusJakartaSans text-4xl font-extrabold leading-[1.2] -tracking-[1px] text-ColorBlack sm:text-5xl lg:text-[64px] xl:text-[70px]"
                        data-module="countup"
                        >
                        <span className="start-number" data-countup-number={80}>
                            30+
                        </span>
                        </div>
                        <span className="text-xl font-semibold text-ColorBlue">
                        Tester Pengguna
                        </span>
                    </div>
                    {/* Counter Item */}
                    {/* Counter Item */}
                    <div className="text-center sm:bg-white sm:pt-10">
                        <div
                        className="mb-1 font-PlusJakartaSans text-4xl font-extrabold leading-[1.2] -tracking-[1px] text-ColorBlack sm:text-5xl lg:text-[64px] xl:text-[70px]"
                        data-module="countup"
                        >
                        <span className="start-number" data-countup-number={54}>
                            Finalis 
                        </span>
                    
                        </div>
                        <span className="text-xl font-semibold text-ColorBlue">
                        Kompetisi Gemastik oleh Kemdikbudristek
                        </span>
                    </div>
                    {/* Counter Item */}
                    {/* Counter Item */}
                    <div className="text-center sm:bg-white sm:pt-10">
                        <div
                        className="mb-1 font-PlusJakartaSans text-4xl font-extrabold leading-[1.2] -tracking-[1px] text-ColorBlack sm:text-5xl lg:text-[64px] xl:text-[70px]"
                        data-module="countup"
                        >
                        <span className="start-number" data-countup-number={36}>
                            Finalis
                        </span>
                        </div>
                        <span className="text-xl font-semibold text-ColorBlue">
                        Indonesia AI Innovation Challange 2024
                        </span>
                    </div>
                    {/* Counter Item */}
                    </div>
                    {/* Counter List */}
                </div>
                {/* Content Block Right */}
                </div>
                {/* Fact Area Block */}
            </div>
            {/* Section Container */}
            </div>
            {/* Section Space */}
        </section>
        {/*...::: Fact Section End :::... */}
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
                    <div className="mx-auto max-w-[600px]">
                    <h2 className="text-center">
                        Kami berusaha untuk membuat produk yang dapat membantu anda
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
                            Efisiensi Pembelajaran
                        </div>
                        <p>
                            Fokus pada area penting dengan soal-soal yang relevan.
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
                            Kreatifitas Siswa
                        </div>
                        <p>
                            Siswa akan semakin kreatif dalam menjawab ujian.
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
                        src="https://masco-tailwind.netlify.app/assets/img/icons/icon-yellow-feature-3.svg"
                        alt="icon-yellow-feature-3"
                        width={60}
                        height={60}
                        className="mx-auto h-[60px] w-[60px] lg:mx-0"
                        />
                        <div>
                        <div className="mb-4 text-xl font-semibold leading-[1.33] -tracking-[0.5] xxl:text-2xl">
                            Inovasi dan Solusi
                        </div>
                        <p>
                            Pembelajaran modern dapat menyelesaikan berbagai masalah.
                        </p>
                        </div>
                    </div>
                    </div>
                    {/* Feature Item */}
                    {/* Feature Item */}
                    <div
                    className="jos"
                    data-jos_animation="fade-right"
                    data-jos_delay="0.9"
                    >
                    <div className="flex flex-col gap-6 text-center lg:flex-row lg:text-left">
                        <img
                        src="https://masco-tailwind.netlify.app/assets/img/icons/icon-yellow-feature-4.svg"
                        alt="icon-yellow-feature-4"
                        width={60}
                        height={60}
                        className="mx-auto h-[60px] w-[60px] lg:mx-0"
                        />
                        <div>
                        <div className="mb-4 text-xl font-semibold leading-[1.33] -tracking-[0.5] xxl:text-2xl">
                            Produk Berkualitas
                        </div>
                        <p>
                            Kualitas produk kami mengacu pada kepuasan kalian.
                        </p>
                        </div>
                    </div>
                    </div>
                    {/* Feature Item */}
                    {/* Feature Item */}
                    <div
                    className="jos"
                    data-jos_animation="fade-right"
                    data-jos_delay="1.2"
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
                            Pengguna Puas
                        </div>
                        <p>
                            Pengguna yang senang dengan layanan yang kami berikan.
                        </p>
                        </div>
                    </div>
                    </div>
                    {/* Feature Item */}
                    {/* Feature Item */}
                    <div
                    className="jos"
                    data-jos_animation="fade-right"
                    data-jos_delay="1.5"
                    >
                    <div className="flex flex-col gap-6 text-center lg:flex-row lg:text-left">
                        <img
                        src="https://masco-tailwind.netlify.app/assets/img/icons/icon-yellow-feature-6.svg"
                        alt="icon-yellow-feature-6"
                        width={60}
                        height={60}
                        className="mx-auto h-[60px] w-[60px] lg:mx-0"
                        />
                        <div>
                        <div className="mb-4 text-xl font-semibold leading-[1.33] -tracking-[0.5] xxl:text-2xl">
                            Tampilan Sederhana
                        </div>
                        <p>
                            Kesederhanaan digunakan untuk memudahkan kalian.
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
        <section className="section-team">
            <div className="bg-ColorOffWhite">
            {/* Section Space */}
            <div className="section-space">
                {/* Section Container */}
                <div className="container-default">
                {/* Section Content Wrapper */}
                <div className="jos mb-[60px] xl:mb-20">
                    {/* Section Content Block */}
                    <div className="mx-auto max-w-[526px]">
                    <h2 className="text-center">
                        Tim Hebat di Balik Produk Kreatif Kami
                    </h2>
                    </div>
                    {/* Section Content Block */}
                </div>
                {/* Section Content Wrapper */}
                {/* Team List */}
                <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 place-items-center mx-auto">
                    {/* Team Item */}
                    <div className="jos flex flex-col items-center justify-center rounded-[10px] bg-white p-5 text-center" data-jos_animation="flip-left">
                        <img
                            src="/images/teams/medhanita.webp"
                            alt="team-img-4"
                            width={266}
                            height={250}
                            className="w-[266px] object-cover rounded-[10px] h-[250px]"
                        />
                        <div className="mb-4 mt-6">
                            <div className="mb-1 text-xl font-semibold">Medhanita Dewi Renanti, S.Kom, M.Kom</div>
                            <span className="block text-opacity-80">Advisor</span>
                        </div>
                    </div>
                    {/* Team Item */}
                    {/* Team Item */}
                    <div className="jos flex flex-col items-center justify-center rounded-[10px] bg-white p-5 text-center" data-jos_animation="flip-left">
                        <img
                            src="/images/teams/ekky.jpg"  
                            alt="team-img-1"
                            width={266}
                            height={250}
                            className="w-[266px] object-cover rounded-[10px] h-[250px]"
                        />
                        <div className="mb-4 mt-6">
                            <div className="mb-1 text-xl font-semibold">Ekky Mulia Lasardi</div>
                            <span className="block text-opacity-80">CEO &amp; Founder</span>
                        </div>
                    </div>
                    <div className="jos flex flex-col items-center justify-center rounded-[10px] bg-white p-5 text-center" data-jos_animation="flip-left">
                        <img
                            src="/images/teams/sani.jpeg"  
                            alt="team-img-1"
                            width={266}
                            height={250}
                            className="w-[266px] object-cover rounded-[10px] h-[250px]"
                        />
                        <div className="mb-4 mt-6">
                            <div className="mb-1 text-xl font-semibold">Sanniyah Wafa Nurjihan</div>
                            <span className="block text-opacity-80">Member</span>
                        </div>
                    </div>
                    <div className="jos flex flex-col items-center justify-center rounded-[10px] bg-white p-5 text-center" data-jos_animation="flip-left">
                        <img
                            src="/images/teams/dimas.jpeg"  
                            alt="team-img-1"
                            width={266}
                            height={250}
                            className="w-[266px] object-cover rounded-[10px] h-[250px]"
                        />
                        <div className="mb-4 mt-6">
                            <div className="mb-1 text-xl font-semibold">Dimas Akbar Tama</div>
                            <span className="block text-opacity-80">Member</span>
                        </div>
                    </div>
                    {/* Team Item */}
                    {/* Team Item */}
                    {/* <div
                    className="jos flex flex-col items-center justify-center rounded-[10px] bg-white p-5 text-center"
                    data-jos_animation="flip-left"
                    >
                    <img
                        src="https://i.ibb.co.com/znY14xt/mamat.jpg"
                        alt="team-img-2"
                        width={266}
                        height={250}
                        className="h-auto w-full rounded-[10px] lg:w-auto"
                    />
                    <div className="mb-4 mt-6">
                        <div className="mb-1 text-xl font-semibold">
                        Muhammad Rahmat
                        </div>
                        <span className="block text-opacity-80">Co-founder</span>
                    </div>
                    </div> */}
                    {/* Team Item */}
                    {/* Team Item */}
                    {/* <div
                    className="jos flex flex-col items-center justify-center rounded-[10px] bg-white p-5 text-center"
                    data-jos_animation="flip-left"
                    >
                    <img
                        src="https://i.ibb.co.com/M957xdb/wahyu-removebg-preview-1.png"
                        alt="team-img-3"
                        width={266}
                        height={250}
                        className="w-[266px] object-cover rounded-[10px] h-[250px]"
                    />
                    <div className="mb-4 mt-6">
                        <div className="mb-1 text-xl font-semibold">Wahyu Mustika Aji</div>
                        <span className="block text-opacity-80">Co-Founder</span>
                    </div>
                    </div> */}
                    {/* Team Item */}
                    
                </div>
                {/* Team List */}
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
