'use client'
import React, { useState } from 'react';

const AccordionItem = ({ title, content, isActive, onClick }) => (
  <li className={`accordion-item ${isActive ? 'active' : ''} overflow-hidden border-b border-ColorBlack p-[30px] last:border-b-0`}>
    <div className="accordion-header flex justify-between gap-6 text-xl font-semibold text-ColorBlack">
      <button className="flex-1 text-left" onClick={onClick}>
        {title}
      </button>
      <div className={`accordion-icon-1 relative flex h-5 w-5 items-center justify-center rounded-[50%] bg-ColorBlue ${isActive ? 'rotate-90' : ''}`}>
        <span className={`absolute inline-block h-[10px] w-0.5 ${isActive ? 'rotate-180' : ''} rounded-sm bg-white`} />
        <span className="inline-block h-0.5 w-[10px] rounded-sm bg-white" />
      </div>
    </div>
    {isActive && (
      <div className="accordion-body max-w-[826px] opacity-80">
        <p className="pt-5">{content}</p>
      </div>
    )}
  </li>
);

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = index => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const items = [
    {
      title: 'A. Apa itu EvaloExam?',
      content: 'EvaloExam adalah sistem informasi ujian yang menggunakan kecerdasan buatan untuk mengonversi konten modul dari dokumen, seperti PDF, menjadi batasan untuk pembuatan soal-soal ujian yang relevan dan efektif secara otomatis oleh AI. Hasil jawaban siswa kemudian di proses dan dibuat sebagai laporan hasil ujian yang mendalam berdasarkan insight yang di ekstrak oleh AI bagi siswa dan pengajar untuk meningkatkan kualitas pembelajaran.'
    },
    {
      title: 'B. Bagaimana cara kerja EvaloExam?',
      content: 'Pengajar hanya cukup mengunggah modul yang ingin diujikan, dan mengatur komposisi sesi ujian yang ingin diujikan, setelah itu EvaloExam akan secara otomatis menghasilkan pertanyaan-pertanyaan ujian dari materi tersebut dan melakukan analisis soal.'
    },
    {
      title: 'C. Apakah EvaloExam bisa digunakan untuk semua jenis ujian?',
      content: 'EvaloExam dirancang untuk mendukung berbagai jenis ujian, dari test atau quiz harian hingga ujian semester. Namun, hasil terbaik akan bergantung dari kualitas materi yang diunggah dan pengaturan komposisi sesi ujian yang ingin dilakukan.'
    },
    {
      title: 'D. Apakah saya bisa menyesuaikan soal-soal yang dihasilkan?',
      content: 'Ya, Anda dapat menyesuaikan pertanyaan yang nantinya akan dihasilkan untuk lebih sesuai dengan kebutuhan belajar Anda. Evaloexam memiliki kostumisasi untuk mengatur tingkat kesulitan, jumlah soal, topik yang ingin diujikan, dan input tambahan untuk memberitahu AI seperti apa bentuk soalnya secara explisit, misal menggunakan bahasa inggris atau berbentuk soal cerita dan lain sebagainya.'
    },
    {
      title: 'E. Bagaimana EvaloExam mempersonalisasi soal-soal ujian?',
      content: 'EvaloExam menganalisis materi yang Anda unggah dan menyesuaikan pertanyaan berdasarkan topik dan tingkat kesulitan, sehingga Anda mendapatkan soal-soal yang paling relevan dengan kebutuhan Anda.'
    }
  ];

  return (
    <div className="jos">
      <ul className="mx-auto max-w-[1076px] rounded-[10px] border border-ColorBlack">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isActive={index === activeIndex}
            onClick={() => handleToggle(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Accordion;
