export default function FooterLanding() {
    return(
        <footer className="section-footer">
            <div className="bg-white">
                {/* Footer Area Center */}
                <div className="text-black">
                {/* Footer Center Spacing */}
                <div className="py-[60px] lg:py-20">
                    {/* Section Container */}
                    <div className="container-default">
                    {/* Footer Widget List */}
                    <div className="grid gap-x-4 lg:gap-x-16 gap-y-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-[1fr_repeat(3,_auto)] xl:lg:grid-cols-[1fr_repeat(4,_auto)]  xl:gap-x-20">
                        {/* Footer Widget Item */}
                        <div className="flex flex-col gap-y-7 md:col-span-4 lg:col-span-1">
                        {/* Footer Logo */}
                        <a href="/">
                            <p className="text-2xl font-bold text-black">EvaloExam</p>
                        </a>
                        {/* Footer Content */}
                        <div>
                            {/* Footer About Text */}
                            <div className="lg:max-w-[320px]">
                            Ujian kustom berbasis AI, Meningkatkan kualitas pembelajaran semua dalam satu platform untuk membantumu.
                            </div>
                            {/* Footer Mail */}
                            <a
                            href="evaloexam@gmail.com"
                            className="my-6 block underline-offset-4 transition-all duration-300 hover:underline"
                            >
                            evaloexam@gmail.com
                            </a>
                        </div>
                        {/* Footer Content */}
                        </div>
                        {/* Footer Widget Item */}
                        {/* Footer Widget Item */}
                        <div className="flex flex-col gap-y-7 md:col-span-1 lg:col-span-1">
                        {/* Footer Widget Title */}
                        <div className="text-xl font-semibold capitalize">
                            Jelajahi EvaloExam
                        </div>
                        {/* Footer Navbar */}
                        <ul className="flex flex-col gap-y-[10px] capitalize">
                            <li>
                            <a
                                href="/"
                                className="hover:opcity-100 underline-offset-4 opacity-80 transition-all duration-300 ease-linear hover:underline"
                            >
                                Beranda
                            </a>
                            </li>
                            <li>
                            <a
                                href="/about"
                                className="hover:opcity-100 underline-offset-4 opacity-80 transition-all duration-300 ease-linear hover:underline"
                            >
                                Tetang kami
                            </a>
                            </li>
                            <li>
                            <a
                                href="/contact-us"
                                className="hover:opcity-100 underline-offset-4 opacity-80 transition-all duration-300 ease-linear hover:underline"
                            >
                                Bantuan
                            </a>
                            </li>
                        </ul>
                        </div>
                        <div className="flex flex-col gap-y-6 md:col-span-1 lg:col-span-1">
                        {/* Footer Title */}
                        <div className="text-xl font-semibold capitalize">Layanan</div>
                        {/* Footer Title */}
                        {/* Footer Navbar */}
                        <ul className="flex flex-col gap-y-[10px] capitalize">
                            <li>
                            <a
                                href="https://www.example.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opcity-100 underline-offset-4 opacity-80 transition-all duration-300 ease-linear hover:underline"
                            >
                                Video Pengunaan
                            </a>
                            </li>
                        </ul>
                        </div>
                        <div className="flex flex-col gap-y-3 md:col-span-1 lg:col-span-1">
                        {/* Footer Title */}
                        {/* <div className="text-xl font-semibold capitalize">Dibuat oleh mahasiswa</div> */}
                        {/* Footer Title */}
                        {/* Footer Navbar */}
                        {/* <ul className="flex flex-col gap-y-[10px] capitalize">
                            <li>
                            <img src="https://bogor2023.irsa.or.id/wp-content/uploads/2023/01/IPB_University-1024x268@2x.png" alt="Logo IPB Univeristy" className="w-44 h-11" />
                            </li>
                        </ul> */}

                        {/* <div className="text-xl font-semibold capitalize mt-4">Submisi Gemastik 2024</div> */}
                        {/* Footer Title */}
                        {/* Footer Navbar */}
                        {/* <ul className="flex gap-x-[10px] capitalize">
                            <li>
                            <img src="https://gemastik.kemdikbud.go.id/storage/unduhan/logo%20gemastik%20unnes%202024-807157.png" alt="Logo Gemastik 2024" className="w-14 h-14" />
                            </li>
                            <li>
                            <img src="https://satriadata.kemdikbud.go.id/wp-content/uploads/2020/08/Logo-kemendikbud-300x300.png" alt="Logo KEMENDIKBUD" className="w-14 h-14" />
                            </li>
                            <li>
                            <img src="https://krti.kemdikbud.go.id/assets-frontsite/src/images/logo/logo-puspresnas-bpti-color.svg" alt="Logo Puspenas" className="w-40 h-16" />
                            </li>
                        </ul> */}
                        </div>
                    </div>
                    {/* Footer Widget List */}
                    </div>
                    {/* Section Container */}
                </div>
                {/* Footer Center Spacing */}
                </div>
                {/* Footer Area Center */}
                <div className="horizontal-line bg-ColorBlack" />
                {/* Footer Bottom */}
                <div>
                {/* Footer Bottom Spacing */}
                <div className="py-[18px]">
                    {/* Section Container */}
                    <div className="container-default">
                    <div className="text-center">
                        © Copyright 2024, All Rights Reserved by EvaloExam
                    </div>
                    </div>
                    {/* Section Container */}
                </div>
                {/* Footer Bottom Spacing */}
                </div>
                {/* Footer Bottom */}
            </div>
            </footer>

    )
}