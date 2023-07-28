import "./contact.scss";
import { Formik, Form, Field } from "formik";
import { object, string } from "yup";
import { useState } from "react";
import CircleLoader from "../../shared/circle-loader/CircleLoader";
import {
  closeNotification,
  openNotification,
  toggleNotification,
} from "../../store/notification";
import { useDispatch } from "react-redux";

function Contact() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  let emailSchema = object({
    name: string().required(),
    email: string().email().required(),
    subject: string().required(),
    message: string().required(),
  });

  let initialValue = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const handleSubmit = (value, actions) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      actions.resetForm();
      dispatch(openNotification("Your email sended"));
      dispatch(toggleNotification());
    }, 1000);
  };

  return (
    <div className="contact_container custom-container">
      <div className="information">
        <span className="title">Information About us</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
          ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique
          amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis
          quis bibendum quam.
        </p>
        <div className="colors">
          <div className="color color1"></div>
          <div className="color color2"></div>
          <div className="color color3"></div>
        </div>
      </div>

      <div className="contact_way">
        <span className="title">Contact Way</span>
        <div className="way_grid">
          <div className="way1 way">
            <div className="color"></div>
            <div className="info">
              <div>Tel: 877-67-88-99</div>
              <div>E-Mail: shop@store.com</div>
            </div>
          </div>
          <div className="way2 way">
            <div className="color"></div>
            <div className="info">
              <div>Support Forum</div>
              <div>For over 24hr</div>
            </div>
          </div>
          <div className="way3 way">
            <div className="color"></div>
            <div className="info">
              <div>20 Margaret st, London</div>
              <div>Great britain, 3NM98-LK</div>
            </div>
          </div>
          <div className="way4 way">
            <div className="color"></div>
            <div className="info">
              <div>Free standard shipping</div>
              <div>on all orders.</div>
            </div>
          </div>
        </div>
      </div>

      <div className="get_in">
        <span className="title">Get In Touch</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
          ultrices tristique amet erat vitae eget dolor los vitae lobortis quis
          bibendum quam.
        </p>
        <Formik
          validationSchema={emailSchema}
          initialValues={{ ...initialValue }}
          onSubmit={handleSubmit}
        >
          {({ isValid, dirty }) => (
            <Form>
              <div className="name">
                <Field name="name" type="text" placeholder="Your Name" />
                <Field name="email" type="text" placeholder="Your E-mail" />
              </div>
              <Field name="subject" type="text" placeholder="Subject" />
              <Field
                component="textarea"
                name="message"
                placeholder="Type Your Message"
              ></Field>
              <div className="btn_container">
                <button disabled={!isValid || loading} type="submit">
                  {loading ? (
                    <div className="loading">
                      <CircleLoader />
                    </div>
                  ) : (
                    "Send Email"
                  )}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      <div className="customers">
        <img
          src="https://res.cloudinary.com/dawsyfhbt/image/upload/v1690453765/group124_plhnq6.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Contact;
