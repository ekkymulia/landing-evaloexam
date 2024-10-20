import "../../public/css/vendors/menu.css"
import "../../public/css/custom.css"
import "../../public/css/style.css"

import FooterLanding from "@/components/Footer/landing";
import NavbarLanding from "@/components/NavbarLanding";
import Image from "next/image";


export default function Home() {
  return (
    <div className="page-wrapper relative z-[1] bg-white">
      <NavbarLanding/>

      <main className="main-wrapper relative overflow-hidden">
        {/*...::: Hero Section Start :::... */}
        <section className="section-hero">
          {/* Section Space */}
          <div className="pb-20 pt-28 md:pt-36 lg:pb-[100px] lg:pt-[150px] xxl:pb-[120px] xxl:pt-[150px]">
            {/* Section Container */}
            <div className="container-default">
              {/* Hero Area */}
              <div className="grid items-center gap-12 lg:grid-cols-[1fr,minmax(0,_0.8fr)] lg:gap-[50px]">
                {/* Hero Content Block */}
                <div className="jos mx-auto max-w-[500px] lg:mx-0 lg:max-w-none">
                  <div className="flex flex-col items-center justify-center text-center lg:items-start lg:justify-normal lg:text-left">
                    <h1 className="mb-6 text-4xl text-black font-extrabold leading-[1.11] -tracking-[1px] md:text-5xl lg:text-6xl xl:text-7xl xxl:text-[90px]">
                      Sistem Informasi Ujian berbasis AI
                    </h1>
                    <p className="mb-10 max-w-[624px] xl:mb-[50px]">
                    EvaloExam menggunakan AI generatif untuk menghasilkan soal ujian berdasarkan materi modul dan menganalisis jawaban siswa, meningkatkan efektivitas pembelajaran dan memberikan rekomendasi pengajaran yang lebih tepat.
                    </p>
                    <div className="mb-6 flex flex-wrap justify-center gap-5 sm:justify-normal">
                      <a
                        href="https://bit.ly/contact-evaloexam"
                        className="btn is-blue btn-animation is-large inline-block rounded"
                      >
                        <span>Daftar EvaloExam</span>
                      </a>
                      <a
                        href="/about"
                        className="btn is-outline-black btn-animation is-large inline-block rounded"
                      >
                        <span>Pelajari lebih lanjut</span>
                      </a>
                    </div>
                    <p className="flex items-center gap-[10px] text-base font-semibold">
                      {/* <img
                        src="https://www.freepnglogos.com/uploads/star-png/file-featured-article-star-svg-wikimedia-commons-8.png"
                        alt="icon-green-star"
                        width={25}
                        height={24}
                      /> */}
                      *) Kami telah siap beroperasi untuk publik
                    </p>
                  </div>
                </div>
                {/* Hero Content Block */}
                {/* Hero Image Block */}
                <div className="jos">
                  <div className="relative mx-auto h-auto max-w-[280px] sm:max-w-[500px] lg:ml-auto lg:mr-0">
                    {/* Hero Main Image */}
                    <img
                      width={500}
                      height={500}
                      src="https://i.ibb.co.com/W6fWtvr/Hero-Image.png"
                      alt="hero-img"
                    className="object-cover h-[500px] w-[500px]"
                    />
                    {/* Hero Avatar Image */}
                    <img
                      src="https://masco-tailwind.netlify.app/assets/img/th-2/hero-avatar-img-1.png"
                      alt="hero-avatar-img-1"
                      width={70}
                      height={70}
                      className="absolute -left-[35px] top-[150px] h-[70px] w-[70px] rounded-[50%]"
                    />
                    {/* Hero Avatar Image */}
                    <img
                      src="https://masco-tailwind.netlify.app/assets/img/th-2/hero-avatar-img-2.png"
                      alt="hero-avatar-img-2"
                      width={78}
                      height={78}
                      className="absolute -right-[39px] bottom-10 h-[78px] w-[78px] rounded-[50%]"
                    />
                    {/* Hero Shape */}
                    <img
                      src="https://masco-tailwind.netlify.app/assets/img/elements/hero-2-shape-1.svg"
                      alt="hero-2-shape-1"
                      width={90}
                      height={91}
                      className="absolute -right-[45px] -top-[70px]"
                    />
                  </div>
                </div>
                {/* Hero Image Block */}
              </div>
              {/* Hero Area */}
            </div>
            {/* Section Container */}
          </div>
          {/* Section Space */}
        </section>
        {/*...::: Hero Section End :::... */}
        {/*...::: Features Section Start :::... */}
        <section className="section-features">
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
                      Berisi fitur modern untuk pengalaman pembelajaran yang lebih baik
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
        {/*...::: Content Section Start :::... */}
        <section className="section-content">
          {/* Section Spacer */}
          <div className="section-space">
            {/* Section Container */}
            <div className="container-custom">
              <div className="flex flex-col gap-y-20 lg:gap-y-[100px] xl:gap-y-[120px]">
                {/* Content Area Single */}
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-24 xl:grid-cols-[1fr_minmax(0,_1.2fr)] xl:gap-[148px]">
                  {/* Content Block Left */}
                  <div className="jos lg:order-2" data-jos_animation="fade-left">
                    {/* Section Wrapper */}
                    <div>
                      {/* Section Block */}
                      <div className="mb-5">
                        <h2>Menjawab permasalahan yang kamu hadapi</h2>
                      </div>
                    </div>
                    <p>
                      Pernahkah mengalami kesulitan untuk membuat test yang sesuai dengan materi yang diajarkan dan cepat? EvaloExam hadir untuk membantu pengajar dalam membuat soal ujian yang relevan dan efektif secara otomatis oleh AI.
                    </p>
                    <div className="my-8 h-[1px] w-full bg-ColorBlack/10 lg:my-[30px]" />
                    <ul className="flex flex-col gap-5 font-semibold text-black">
                      <li className="flex items-center">
                        <span className="mr-3 inline-block text-xl">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M21.1744 9.63937C20.8209 9.27 20.4553 8.88937 20.3175 8.55469C20.19 8.24813 20.1825 7.74 20.175 7.24781C20.1609 6.33281 20.1459 5.29594 19.425 4.575C18.7041 3.85406 17.6672 3.83906 16.7522 3.825C16.26 3.8175 15.7519 3.81 15.4453 3.6825C15.1116 3.54469 14.73 3.17906 14.3606 2.82562C13.7137 2.20406 12.9787 1.5 12 1.5C11.0213 1.5 10.2872 2.20406 9.63937 2.82562C9.27 3.17906 8.88937 3.54469 8.55469 3.6825C8.25 3.81 7.74 3.8175 7.24781 3.825C6.33281 3.83906 5.29594 3.85406 4.575 4.575C3.85406 5.29594 3.84375 6.33281 3.825 7.24781C3.8175 7.74 3.81 8.24813 3.6825 8.55469C3.54469 8.88844 3.17906 9.27 2.82562 9.63937C2.20406 10.2862 1.5 11.0213 1.5 12C1.5 12.9787 2.20406 13.7128 2.82562 14.3606C3.17906 14.73 3.54469 15.1106 3.6825 15.4453C3.81 15.7519 3.8175 16.26 3.825 16.7522C3.83906 17.6672 3.85406 18.7041 4.575 19.425C5.29594 20.1459 6.33281 20.1609 7.24781 20.175C7.74 20.1825 8.24813 20.19 8.55469 20.3175C8.88844 20.4553 9.27 20.8209 9.63937 21.1744C10.2862 21.7959 11.0213 22.5 12 22.5C12.9787 22.5 13.7128 21.7959 14.3606 21.1744C14.73 20.8209 15.1106 20.4553 15.4453 20.3175C15.7519 20.19 16.26 20.1825 16.7522 20.175C17.6672 20.1609 18.7041 20.1459 19.425 19.425C20.1459 18.7041 20.1609 17.6672 20.175 16.7522C20.1825 16.26 20.19 15.7519 20.3175 15.4453C20.4553 15.1116 20.8209 14.73 21.1744 14.3606C21.7959 13.7137 22.5 12.9787 22.5 12C22.5 11.0213 21.7959 10.2872 21.1744 9.63937ZM16.2806 10.2806L11.0306 15.5306C10.961 15.6004 10.8783 15.6557 10.7872 15.6934C10.6962 15.7312 10.5986 15.7506 10.5 15.7506C10.4014 15.7506 10.3038 15.7312 10.2128 15.6934C10.1217 15.6557 10.039 15.6004 9.96937 15.5306L7.71937 13.2806C7.64969 13.2109 7.59442 13.1282 7.5567 13.0372C7.51899 12.9461 7.49958 12.8485 7.49958 12.75C7.49958 12.6515 7.51899 12.5539 7.5567 12.4628C7.59442 12.3718 7.64969 12.2891 7.71937 12.2194C7.86011 12.0786 8.05098 11.9996 8.25 11.9996C8.34855 11.9996 8.44613 12.019 8.53717 12.0567C8.62822 12.0944 8.71094 12.1497 8.78063 12.2194L10.5 13.9397L15.2194 9.21937C15.2891 9.14969 15.3718 9.09442 15.4628 9.0567C15.5539 9.01899 15.6515 8.99958 15.75 8.99958C15.8485 8.99958 15.9461 9.01899 16.0372 9.0567C16.1282 9.09442 16.2109 9.14969 16.2806 9.21937C16.3503 9.28906 16.4056 9.37178 16.4433 9.46283C16.481 9.55387 16.5004 9.65145 16.5004 9.75C16.5004 9.84855 16.481 9.94613 16.4433 10.0372C16.4056 10.1282 16.3503 10.2109 16.2806 10.2806Z" fill="black"/>
                          </svg>
                        </span>
                        Satu dashboard terintegrasi untuk akses semua data hasil ujian
                      </li>
                      <li className="flex items-center">
                        <span className="mr-3 inline-block text-xl">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M21.1744 9.63937C20.8209 9.27 20.4553 8.88937 20.3175 8.55469C20.19 8.24813 20.1825 7.74 20.175 7.24781C20.1609 6.33281 20.1459 5.29594 19.425 4.575C18.7041 3.85406 17.6672 3.83906 16.7522 3.825C16.26 3.8175 15.7519 3.81 15.4453 3.6825C15.1116 3.54469 14.73 3.17906 14.3606 2.82562C13.7137 2.20406 12.9787 1.5 12 1.5C11.0213 1.5 10.2872 2.20406 9.63937 2.82562C9.27 3.17906 8.88937 3.54469 8.55469 3.6825C8.25 3.81 7.74 3.8175 7.24781 3.825C6.33281 3.83906 5.29594 3.85406 4.575 4.575C3.85406 5.29594 3.84375 6.33281 3.825 7.24781C3.8175 7.74 3.81 8.24813 3.6825 8.55469C3.54469 8.88844 3.17906 9.27 2.82562 9.63937C2.20406 10.2862 1.5 11.0213 1.5 12C1.5 12.9787 2.20406 13.7128 2.82562 14.3606C3.17906 14.73 3.54469 15.1106 3.6825 15.4453C3.81 15.7519 3.8175 16.26 3.825 16.7522C3.83906 17.6672 3.85406 18.7041 4.575 19.425C5.29594 20.1459 6.33281 20.1609 7.24781 20.175C7.74 20.1825 8.24813 20.19 8.55469 20.3175C8.88844 20.4553 9.27 20.8209 9.63937 21.1744C10.2862 21.7959 11.0213 22.5 12 22.5C12.9787 22.5 13.7128 21.7959 14.3606 21.1744C14.73 20.8209 15.1106 20.4553 15.4453 20.3175C15.7519 20.19 16.26 20.1825 16.7522 20.175C17.6672 20.1609 18.7041 20.1459 19.425 19.425C20.1459 18.7041 20.1609 17.6672 20.175 16.7522C20.1825 16.26 20.19 15.7519 20.3175 15.4453C20.4553 15.1116 20.8209 14.73 21.1744 14.3606C21.7959 13.7137 22.5 12.9787 22.5 12C22.5 11.0213 21.7959 10.2872 21.1744 9.63937ZM16.2806 10.2806L11.0306 15.5306C10.961 15.6004 10.8783 15.6557 10.7872 15.6934C10.6962 15.7312 10.5986 15.7506 10.5 15.7506C10.4014 15.7506 10.3038 15.7312 10.2128 15.6934C10.1217 15.6557 10.039 15.6004 9.96937 15.5306L7.71937 13.2806C7.64969 13.2109 7.59442 13.1282 7.5567 13.0372C7.51899 12.9461 7.49958 12.8485 7.49958 12.75C7.49958 12.6515 7.51899 12.5539 7.5567 12.4628C7.59442 12.3718 7.64969 12.2891 7.71937 12.2194C7.86011 12.0786 8.05098 11.9996 8.25 11.9996C8.34855 11.9996 8.44613 12.019 8.53717 12.0567C8.62822 12.0944 8.71094 12.1497 8.78063 12.2194L10.5 13.9397L15.2194 9.21937C15.2891 9.14969 15.3718 9.09442 15.4628 9.0567C15.5539 9.01899 15.6515 8.99958 15.75 8.99958C15.8485 8.99958 15.9461 9.01899 16.0372 9.0567C16.1282 9.09442 16.2109 9.14969 16.2806 9.21937C16.3503 9.28906 16.4056 9.37178 16.4433 9.46283C16.481 9.55387 16.5004 9.65145 16.5004 9.75C16.5004 9.84855 16.481 9.94613 16.4433 10.0372C16.4056 10.1282 16.3503 10.2109 16.2806 10.2806Z" fill="black"/>
                          </svg>
                        </span>
                        Kemudahan dalam pembuatan soal dan analisis kinerja siswa
                      </li>
                      <li className="flex items-center">
                        <span className="mr-3 inline-block text-xl">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M21.1744 9.63937C20.8209 9.27 20.4553 8.88937 20.3175 8.55469C20.19 8.24813 20.1825 7.74 20.175 7.24781C20.1609 6.33281 20.1459 5.29594 19.425 4.575C18.7041 3.85406 17.6672 3.83906 16.7522 3.825C16.26 3.8175 15.7519 3.81 15.4453 3.6825C15.1116 3.54469 14.73 3.17906 14.3606 2.82562C13.7137 2.20406 12.9787 1.5 12 1.5C11.0213 1.5 10.2872 2.20406 9.63937 2.82562C9.27 3.17906 8.88937 3.54469 8.55469 3.6825C8.25 3.81 7.74 3.8175 7.24781 3.825C6.33281 3.83906 5.29594 3.85406 4.575 4.575C3.85406 5.29594 3.84375 6.33281 3.825 7.24781C3.8175 7.74 3.81 8.24813 3.6825 8.55469C3.54469 8.88844 3.17906 9.27 2.82562 9.63937C2.20406 10.2862 1.5 11.0213 1.5 12C1.5 12.9787 2.20406 13.7128 2.82562 14.3606C3.17906 14.73 3.54469 15.1106 3.6825 15.4453C3.81 15.7519 3.8175 16.26 3.825 16.7522C3.83906 17.6672 3.85406 18.7041 4.575 19.425C5.29594 20.1459 6.33281 20.1609 7.24781 20.175C7.74 20.1825 8.24813 20.19 8.55469 20.3175C8.88844 20.4553 9.27 20.8209 9.63937 21.1744C10.2862 21.7959 11.0213 22.5 12 22.5C12.9787 22.5 13.7128 21.7959 14.3606 21.1744C14.73 20.8209 15.1106 20.4553 15.4453 20.3175C15.7519 20.19 16.26 20.1825 16.7522 20.175C17.6672 20.1609 18.7041 20.1459 19.425 19.425C20.1459 18.7041 20.1609 17.6672 20.175 16.7522C20.1825 16.26 20.19 15.7519 20.3175 15.4453C20.4553 15.1116 20.8209 14.73 21.1744 14.3606C21.7959 13.7137 22.5 12.9787 22.5 12C22.5 11.0213 21.7959 10.2872 21.1744 9.63937ZM16.2806 10.2806L11.0306 15.5306C10.961 15.6004 10.8783 15.6557 10.7872 15.6934C10.6962 15.7312 10.5986 15.7506 10.5 15.7506C10.4014 15.7506 10.3038 15.7312 10.2128 15.6934C10.1217 15.6557 10.039 15.6004 9.96937 15.5306L7.71937 13.2806C7.64969 13.2109 7.59442 13.1282 7.5567 13.0372C7.51899 12.9461 7.49958 12.8485 7.49958 12.75C7.49958 12.6515 7.51899 12.5539 7.5567 12.4628C7.59442 12.3718 7.64969 12.2891 7.71937 12.2194C7.86011 12.0786 8.05098 11.9996 8.25 11.9996C8.34855 11.9996 8.44613 12.019 8.53717 12.0567C8.62822 12.0944 8.71094 12.1497 8.78063 12.2194L10.5 13.9397L15.2194 9.21937C15.2891 9.14969 15.3718 9.09442 15.4628 9.0567C15.5539 9.01899 15.6515 8.99958 15.75 8.99958C15.8485 8.99958 15.9461 9.01899 16.0372 9.0567C16.1282 9.09442 16.2109 9.14969 16.2806 9.21937C16.3503 9.28906 16.4056 9.37178 16.4433 9.46283C16.481 9.55387 16.5004 9.65145 16.5004 9.75C16.5004 9.84855 16.481 9.94613 16.4433 10.0372C16.4056 10.1282 16.3503 10.2109 16.2806 10.2806Z" fill="black"/>
                          </svg>
                        </span>
                        Efisiensi waktu dengan hasil ujian yang cepat
                      </li>
                    </ul>
                  </div>
                  {/* Content Block Left */}
                  {/* Content Block Right */}
                  <div
                    className="jos relative lg:order-1"
                    data-jos_animation="fade-right"
                  >
                    {/* Content Image */}
                    <div className="relative overflow-hidden" style={{ paddingTop: "60%" }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src="https://www.youtube.com/embed/Lpx8qVHshB8?si=GJg6TYmUZQ5nTxmC&autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0"
                      title="EvaloExam Demo Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                    </div>


                  </div>
                  {/* Content Block Right */}
                </div>
                {/* Content Area Single */}
                {/* Content Area Single */}
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-24 xl:grid-cols-[1.4fr_minmax(0,_1fr)] xl:gap-[209px]">
                  {/* Content Block Left */}
                  <div className="jos" data-jos_animation="fade-right">
                    {/* Section Wrapper */}
                    <div>
                      {/* Section Block */}
                      <div className="mb-5">
                        <h2>
                          Pembelajaran yang lebih personal dan adaptif
                        </h2>
                      </div>
                      {/* Section Block */}
                    </div>
                    {/* Section Wrapper */}
                    <p>
                      Dengan ujian yang dipersonalisasi, siswa dapat belajar
                      sesuai dengan kecepatan dan gaya belajar mereka sendiri,
                      yang dapat meningkatkan motivasi dan hasil belajar.
                    </p>
                    <p>
                      Ini adalah cara yang modern untuk menghasilkan ujian yang sesuai dengan kebutuhan individual siswa secara cepat dan akurat.
                    </p>
                    <div className="mt-[50px]">
                      <a
                        href="https://youtu.be/Lpx8qVHshB8"
                        className="btn is-black btn-animation is-large inline-block rounded"
                      >
                        <span>Lihat Video Demo</span>
                      </a>
                    </div>
                  </div>
                  {/* Content Block Left */}
                  {/* Content Block Right */}
                  <div className="jos relative" data-jos_animation="fade-left">
                    {/* Content Image */}
                    <img
                      src="https://img.freepik.com/free-photo/woman-with-headset-having-video-call-laptop_23-2148854871.jpg?t=st=1723827398~exp=1723830998~hmac=af6913b3cbe0e4291cc49f3b11164284ae4c48c83c7340489e464223cc314a3d&w=740"
                      alt="content-img-2"
                      width={451}
                      height={456}
                      className="h-auto w-full mx-auto"
                    />
                  </div>
                  {/* Content Block Right */}
                </div>
                {/* Content Area Single */}
              </div>
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: Content Section End :::... */}
        {/*...::: Video Section Start :::... */}
        <section className="section-video">
          {/* Section Space */}
          <div className="section-space-bottom">
            {/* Section Container */}
            <div className="container-default">
              {/* Section Content Wrapper */}
              <div className="jos mb-[60px] xl:mb-20">
                {/* Section Content Block */}
                <div className="mx-auto max-w-[636px]">
                  <h2 className="mb-5 text-center">
                    Tingkatkan pendidikan dengan evaluasi canggih
                  </h2>
                  <p className="text-center">
                    Dengan menyediakan alat
                    evaluasi yang lebih canggih dan adaptif, institusi pendidikan
                    dapat meningkatkan kualitas pengajaran dan pembelajaran.
                  </p>
                </div>
                {/* Section Content Block */}
              </div>
              {/* Section Content Wrapper */}
              {/* Video Block */}
              <div className="jos">
                <div className="relative flex items-center justify-center">
                  <img
                    src="/images/evaloexam-hero.png"
                    alt="video-img"
                    width={1295}
                    height={699}
                    className="h-auto w-full border border-4 border-ColorBlack rounded-[14px] pt-5"
                  />
                </div>
              </div>
              {/* Video Block */}
            </div>
            {/* Section Container */}
          </div>
          {/* Section Space */}
        </section>
        {/*...::: Video Section End :::... */}
  
        <section className="section-cta">
          {/* Section Background */}
          <div className="relative bg-ColorBlue">
            {/* Section Space */}
            <div className="py-[60px] lg:py-20 xl:py-[100px]">
              {/* Section Container */}
              <div className="container-default">
                {/* Section Content Wrapper */}
                <div className="jos mb-[50px]">
                  {/* Section Content Block */}
                  <div className="mx-auto max-w-[800px]">
                    <h2 className="text-center text-white">
                      Kami menawarkan program uji coba, kontak kami dan mari mulai menggunakan EvaloExam
                    </h2>
                  </div>
                  {/* Section Content Block */}
                </div>
                {/* Section Content Wrapper */}
                <div className="jos flex justify-center">
                  <a
                    href="https://bit.ly/contact-evaloexam"
                    className="btn is-black btn-animation is-large inline-block rounded"
                  >
                    <span>Saya ingin mencoba</span>
                  </a>
                </div>
              </div>
            </div>
            <img
              src="https://masco-tailwind.netlify.app/assets/img/elements/flower-shape-1.svg"
              alt="flower-shape-1"
              width={92}
              height={116}
              className="absolute left-[152px] top-[44px] hidden md:block"
            />
            <img
              src="https://masco-tailwind.netlify.app/assets/img/elements/flower-shape-2.svg"
              alt="flower-shape-2"
              width={129}
              height={164}
              className="absolute bottom-0 right-[57px] hidden md:block"
            />
          </div>
        </section>
      </main>

      <FooterLanding/>
    </div>
  );
}
