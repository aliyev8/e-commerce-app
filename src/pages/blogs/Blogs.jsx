import "./blogs.scss";
import data from "../../mock-data/mockData.json";
import AuthorIcon from "../../assets/icons/AuthorIcon";
import CalendarIcon from "../../assets/icons/CalendarIcon";
import { Link } from "react-router-dom";

function Blogs() {
  return (
    <div className="blogs_container custom-container">
      {data.blogHighlight.map((blog, key) => {
        return (
          <div key={key} className="blog">
            <img src={blog.fullImage} alt="" />
            <div className="info">
              <div className="author">
                <span>
                  <AuthorIcon /> <span className="name">{blog.author}</span>
                </span>
                <span>
                  <CalendarIcon />
                  <span className="date"> {blog.createDate}</span>
                </span>
              </div>
              <div className="title">{blog.title}</div>
              <div className="desc">{blog.moreDetails}</div>
              <Link to={`${blog.id}`} className="read_more">
                Read More
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Blogs;
