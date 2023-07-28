import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { object, string } from "yup";
import CircleLoader from "../../shared/circle-loader/CircleLoader";
import { openNotification, toggleNotification } from "../../store/notification";

function BlogComments({ comments }) {
  const dispatch = useDispatch();

  //   const [comments, setComments] = useState(data);
  const [loading, setLoading] = useState(false);

  let commentSchema = object({
    name: string().required().min(2).max(30),
    email: string().email().required().max(40).min(4),
    comment: string().required().min(1).max(100),
  });

  let initialValue = {
    name: "",
    email: "",
    comment: "",
  };

  const handleSubmit = (value, actions) => {
    setLoading(true);

    const newComment = {
      id: Math.random(0, 100),
      fullName: value.name,
      date: "2023-08-30",
      image:
        "https://res.cloudinary.com/dawsyfhbt/image/upload/v1690550119/Y190aHVtYix3XzEwOCxoXzEwNCxnX2F1dG8_fqai0m.jpg",
      comment: value.comment,
    };

    setTimeout(() => {
      setLoading(false);
      actions.resetForm();
      dispatch(openNotification("Your comment sended"));
      dispatch(toggleNotification());
      comments.push(newComment);
    }, 1000);
  };

  return (
    <div className="comments_container">
      <div className="comments">
        {comments.map((c, key) => (
          <div key={key} className="comment">
            <img src={c.image} alt="" />
            <div className="content_container">
              <div className="author_date">
                <span className="name">{c.fullName}</span>
                <span className="date">{c.date}</span>
              </div>
              <div className="text">{c.comment}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="write_comment">
        <Formik
          initialValues={{ ...initialValue }}
          validationSchema={commentSchema}
          onSubmit={handleSubmit}
        >
          {({ isValid, dirty, errors }) => (
            <Form>
              <div className="name_email">
                <div className="name">
                  <span className="error">
                    {errors && errors.name && errors.name}
                  </span>
                  <Field name="name" placeholder="Your Name" />
                </div>

                <div className="email">
                  <span className="error">
                    {errors && errors.email && errors.email}
                  </span>
                  <Field name="email" placeholder="Your Email" />
                </div>
              </div>

              <div>
                <div className="message">
                  <span className="error">
                    {errors && errors.comment && errors.comment}
                  </span>

                  <Field
                    name="comment"
                    component="textarea"
                    placeholder="Your Comment"
                  />
                </div>
              </div>

              <button type="submit" disabled={!isValid || !dirty || loading}>
                {loading ? (
                  <div className="loading">
                    <CircleLoader />
                  </div>
                ) : (
                  "Send Comment"
                )}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default BlogComments;
