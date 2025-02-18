import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import "./S1.css";
const images = [
  'src/page-index/MenuItem/S1/Rectangle 1152.svg',
  'src/page-index/MenuItem/S1/Rectangle 1152.svg',
  'src/page-index/MenuItem/S1/Rectangle 1152.svg',
  'src/page-index/MenuItem/S1/Rectangle 1152.svg',
  'src/page-index/MenuItem/S1/Rectangle 1152.svg',
  'src/page-index/MenuItem/S1/Rectangle 1152.svg',
  'src/page-index/MenuItem/S1/Rectangle 1152.svg',
  'src/page-index/MenuItem/S1/Rectangle 1152.svg',
  'src/page-index/MenuItem/S1/Rectangle 1152.svg',
  'src/page-index/MenuItem/S1/Rectangle 1152.svg',
  'src/page-index/MenuItem/S1/Rectangle 1152.svg',
  'src/page-index/MenuItem/S1/Rectangle 1152.svg',
];

export default function S1() {
  const [currentIndex, setCurrentIndex] = useState(0); // الحالة لتتبع الصورة الحالية

  // وظيفة لتغيير الصورة عند الضغط على السهم
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider-container"> {/* الحاوية الرئيسية للسلايدر */}
      <button className="nav-button left" onClick={goToPrevious}> {/* زر السهم الأيسر */}
        <ChevronLeft size={24} />
      </button>

      <img src={images[currentIndex]} alt="slider" className="slider-image" /> {/* عرض الصورة الحالية */}

      <button className="nav-button right" onClick={goToNext}> {/* زر السهم الأيمن */}
        <ChevronRight size={24} />
      </button>

      <div className="dots"> {/* نقاط التنقل */}
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)} // تغيير الصورة عند الضغط على النقطة
          ></span>
        ))}
      </div>
    </div>
  );
}