import React, { useState, useEffect } from "react";
import "./style.css"
const CookieAnimation = () => {
  // استخدام حالة لإدارة صورة الكوكي الثابتة
  const [staticCookieSrc, setStaticCookieSrc] = useState("src/Page Erorr/Page500/component/cookies/Frame 37310.svg");

  useEffect(() => {
    // وظيفة لتغيير الصورة عند انتهاء الحركة
    const handleAnimationIteration = () => {
      // تغيير الصورة إلى المكسورة
      setStaticCookieSrc(
        "src/Page Erorr/Page500/component/cookies/Frame 37310 (1).svg"
      );

      // إعادة الصورة الأصلية بعد 2 ثانية
      setTimeout(() => {
        setStaticCookieSrc(
          "src/Page Erorr/Page500/component/cookies/Frame 37309.svg"
        );
      }, 2000);
    };

    // إضافة حدث انتهاء الحركة للكوكي المتحركة
    const movingCookie = document.getElementById("moving-cookie");
    movingCookie.addEventListener("animationiteration", handleAnimationIteration);

    // تنظيف الحدث عند إلغاء تثبيت المكون
    return () => {
      movingCookie.removeEventListener("animationiteration", handleAnimationIteration);
    };
  }, []);

  return (
    <div className="container">
      {/* صورة الكوكي الثابتة */}
      <img id="static-cookie" src={staticCookieSrc} alt="Static Cookie" />
      {/* صورة الكوكي المتحركة */}
      <img id="moving-cookie" src="src/Page Erorr/Page500/component/cookies/Frame 37309.svg" alt="MovingCookie" />
    </div>
  );
};

export default CookieAnimation;