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
      title: 'A. Apa itu ExamAI?',
      content: 'ExamAI adalah aplikasi yang menggunakan kecerdasan buatan untuk mengonversi konten dari dokumen, seperti PDF, menjadi soal-soal ujian yang relevan dan efektif.'
    },
    {
      title: 'B. Bagaimana cara kerja ExamAI?',
      content: 'Anda cukup mengunggah dokumen yang ingin Anda pelajari, dan ExamAI akan secara otomatis menghasilkan pertanyaan-pertanyaan ujian dari materi tersebut.'
    },
    {
      title: 'C. Apakah ExamAI bisa digunakan untuk semua jenis ujian?',
      content: 'ExamAI dirancang untuk mendukung berbagai jenis ujian, dari sekolah hingga profesional. Namun, hasil terbaik akan bergantung pada kualitas dan format materi yang diunggah.'
    },
    {
      title: 'D. Apakah saya bisa menyesuaikan soal-soal yang dihasilkan?',
      content: 'Ya, Anda dapat menyesuaikan pertanyaan yang dihasilkan untuk lebih sesuai dengan kebutuhan belajar Anda.'
    },
    {
      title: 'E. Bagaimana ExamAI mempersonalisasi soal-soal ujian?',
      content: 'ExamAI menganalisis materi yang Anda unggah dan menyesuaikan pertanyaan berdasarkan topik dan tingkat kesulitan, sehingga Anda mendapatkan soal-soal yang paling relevan dengan kebutuhan Anda.'
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
