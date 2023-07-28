import "./leatestBlog.scss";
import data from "../../mock-data/mockData.json";
import AuthorIcon from "../../assets/icons/AuthorIcon";
import CalendarIcon from "../../assets/icons/CalendarIcon";
import { useEffect, useState } from "react";

function LeatestBlog() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <div className="leatest_blog custom-container">
      <span className="title">Leatest Blog</span>
      {loading ? (
        "...ooading"
      ) : (
        <div className="leatest_blog_container">
          {data.blogHighlight.map((blog, key) => {
            return (
              <div key={key} className="blog_highlight">
                <img src={blog.image} alt="" />

                <div className="content_container">
                  <div className="author">
                    <span>
                      <AuthorIcon /> {blog.author}
                    </span>
                    <span>
                      <CalendarIcon />
                      {blog.createDate}
                    </span>
                  </div>
                  <span className="title">{blog.title}</span>
                  <span className="content">{blog.content}</span>
                  <span className="read_more">Read more</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default LeatestBlog;
