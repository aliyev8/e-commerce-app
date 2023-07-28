import { useState, useEffect } from "react";
import "./skeleton.scss";
const SkeletonLoader = () => {
  const [loading, setLoading] = useState(true);

  // Bu useEffect ile 2 saniye sonra skeleton'un görüntülenmesini simüle ediyoruz.
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`image_container skeleton_container custom-container ${
        loading ? "loading" : ""
      }`}
    >
      <div className={`item1 skeleton ${loading ? "animated" : ""}`}></div>
      <div className={`item2 skeleton ${loading ? "animated" : ""}`}></div>
      <div className={`item3 skeleton ${loading ? "animated" : ""}`}></div>
      <div className={`item4 skeleton ${loading ? "animated" : ""}`}></div>
      <div className={`item5 skeleton ${loading ? "animated" : ""}`}>
        <span className={`name skeleton ${loading ? "animated" : ""}`}></span>
        <span className={`stars skeleton ${loading ? "animated" : ""}`}></span>
        <div className="price">
          <span
            className={`new_price skeleton ${loading ? "animated" : ""}`}
          ></span>
          <span
            className={`old_price skeleton ${loading ? "animated" : ""}`}
          ></span>
        </div>
        <span className={`desc skeleton ${loading ? "animated" : ""}`}></span>
        <div className="btn_container">
          <span
            className={`add_to_card skeleton ${loading ? "animated" : ""}`}
          ></span>
          <div
            className={`fav_icon skeleton ${loading ? "animated" : ""}`}
          ></div>
        </div>
        <div className={`skeleton ${loading ? "animated" : ""}`}></div>
        <div className={`skeleton ${loading ? "animated" : ""}`}></div>
        <div>
          <span className={`skeleton ${loading ? "animated" : ""}`}></span>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
