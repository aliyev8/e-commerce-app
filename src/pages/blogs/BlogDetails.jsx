import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import AuthorIcon from "../../assets/icons/AuthorIcon";
import CalendarIcon from "../../assets/icons/CalendarIcon";
import FacebookIcon from "../../assets/icons/FacebookIcon";
import InstagramIcon from "../../assets/icons/InstagramIcon";
import PlayIcon from "../../assets/icons/PlayIcon";
import PreviousIcon from "../../assets/icons/PreviousIcon";
import TwitterIcon from "../../assets/icons/TwitterIcon";
import data from "../../mock-data/mockData.json";
import CircleLoader from "../../shared/circle-loader/CircleLoader";
import { openModal } from "../../store/modal";
import RelatedProduct from "../product-detail/relatedProduct";
import BlogComments from "./BlogComments";

function BlogDetails() {
  const { blog: selectedBlog } = useParams();
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    setBlog(data.blogHighlight.find((item) => item.id === +selectedBlog));

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const playVideo = (video) => {
    dispatch(openModal({ name: "video", video: video }));
  };

  return (
    <div className="blog_detail_container custom-container">
      {loading ? (
        <div className="loading">
          <CircleLoader />
        </div>
      ) : (
        <div className="blog_detail">
          <img src={blog.fullImage} alt="" />
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
          <div className="more">{blog.variusTempor}</div>
          <div className="more">{blog.moreDetails}</div>
          <div className="story">{blog.variusTempor}</div>
          <div className="thumbs">
            {blog.videoThumb.map((th) => {
              return (
                <div key={th.id} className="thumb">
                  <img src={th.thumb} alt="" />
                  <div className="play">
                    <span onClick={() => playVideo(th.video)}>
                      <PlayIcon />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="more">{blog.moreDetails}</div>

          <RelatedProduct
            relatedProducts={data.leatestProducts.splice(0, 4)}
            category="leatestProducts"
          />

          <div className="more">{blog.moreDetails}</div>

          <div className="more">{blog.moreDetails}</div>

          <hr />

          <div className="social">
            <span className="fb">
              <FacebookIcon />
            </span>
            <span className="insta">
              <InstagramIcon />
            </span>
            <span className="tw">
              <TwitterIcon />
            </span>
          </div>

          <div className="switch_post">
            <div className="previous">
              <PreviousIcon /> Previous Post
            </div>

            <div className="next">
              Next Post <PreviousIcon />
            </div>
          </div>

          <BlogComments comments={blog.comments} />
        </div>
      )}
    </div>
  );
}

export default BlogDetails;
