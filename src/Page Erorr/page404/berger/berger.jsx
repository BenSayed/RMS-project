import React, { useEffect } from "react";
import $ from "jquery"; // استيراد مكتبة jQuery
import "styles.css"
const BurgerAnimation = () => {
  useEffect(() => {
    // دالة التحريك
    const animateBurger = () => {
      // تفكيك البرجر
      $("#top-bun").css("transform", "translateY(-200px)");
      $("#cucumber").css("transform", "translateY(-165px)");
      $("#tomato").css("transform", "translateY(-150px)");
      $("#cucumber3").css("transform", "translateY(-140px)");
      $("#tomato2").css("transform", "translateY(-100px)");
      $("#cucumber2").css("transform", "translateY(-100px)");
      $("#tomato3").css("transform", "translateY(-100px)");
      $("#patty").css("transform", "translateY(-50px)");
      $("#cheese").css("transform", "translateY(0px)");
      $("#lettuce").css("transform", "translateY(50px)");
      $("#lettuce2").css("transform", "translateY(100px)");
      $("#bottom-bun").css("transform", "translateY(100px)");

      // إعادة التجميع بعد ثانية
      setTimeout(() => {
        $(".burger-part").css("transform", "translateY(0px)");
      }, 1000);
    };

    // تشغيل الأنيميشن كل ثانيتين
    const interval = setInterval(animateBurger, 2000);

    // تنظيف التايمر عند تفكيك المكون
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* وعاء يحتوي على صور البرجر */}
      <div className="burger-container">
        <img src="Group (1).svg" alt="Top Bun" className="burger-part" id="top-bun" />
        <img src="Group (2).svg" alt="Cucumber" className="burger-part" id="cucumber" />
        <img src="Group (3).svg" alt="Cucumber" className="burger-part" id="cucumber2" />
        <img src="Group (4).svg" alt="Cucumber" className="burger-part" id="cucumber3" />
        <img src="Group (5).svg" alt="Tomato" className="burger-part" id="tomato" />
        <img src="Group (5).svg" alt="Tomato" className="burger-part" id="tomato2" />
        <img src="Group (6).svg" alt="Tomato" className="burger-part" id="tomato3" />
        <img src="Group (9).svg" alt="Patty" className="burger-part" id="patty" />
        <img src="Group (10).svg" alt="Cheese" className="burger-part" id="cheese" />
        <img src="Group (11).svg" alt="Lettuce" className="burger-part" id="lettuce" />
        <img src="Group (13).svg" alt="Lettuce" className="burger-part" id="lettuce2" />
        <img src="Group (14).svg" alt="Bottom Bun" className="burger-part" id="bottom-bun" />
      </div>
    </div>
  );
};

export default BurgerAnimation;