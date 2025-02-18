import React , { useState }  from "react";
import "./S3.css";

const extras = [
  { name: "Grilled Vegetables", price: "1.5$", image: "src/page-index/MenuItem/S3/Rectangle 1153 (1).svg "},
  { name: "Mushroom Sauce", price: "2.5$", image: "src/page-index/MenuItem/S3/Rectangle 1153 (2).svg" },
  { name: "Garlic Sauce", price: "1.5$", image: " src/page-index/MenuItem/S3/Rectangle 1153 (3).svg" },
  { name: "French Fries", price: "4.99$", image: "src/page-index/MenuItem/S3/Rectangle 1153 (4).svg" },
  { name: "Caesar Salad", price: "6$", image: "src/page-index/MenuItem/Rectangle 1153 (5).svg" },
  { name: "Garlic Bread", price: "5.99$", image: "src/page-index/MenuItem/S3/Rectangle 1153 (6).svg"},
  { name: "Parmesan Cheese", price: "8$", image: "src/page-index/MenuItem/S3/Rectangle 1153 (7).svg " },
  { name: "Crispy Onion Rings", price: "4.5$", image: "src/page-index/MenuItem/S3/Rectangle 1153 (8).svg" },
  { name: "Avocado Slices", price: "3$", image: "src/page-index/MenuItem/S3/Rectangle 1153.svg " }
];

const S3 = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelect = (index) => {
    if (selectedItems.includes(index)) {
      setSelectedItems(selectedItems.filter(item => item !== index)); // إزالة التحديد إذا تم النقر مرة أخرى
    } else {
      setSelectedItems([...selectedItems, index]); // إضافة العنصر إلى القائمة المحددة
    }
  };
  return (
    <div className="extras-container">
      <h2 className="extras-title">Extras</h2>
      <div className="extras-grid">
        {extras.map((item, index) => (
        <div key={index}  className={`extra-item ${selectedItems.includes(index) ? "selected" : ""}`}
        onClick={() => handleSelect(index)}>
            <img src={item.image} alt={item.name} className="extra-image" />
            <div className="extra-content">
              <span className="extra-name">{item.name}</span>
              <span className="extra-price">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default S3;
 