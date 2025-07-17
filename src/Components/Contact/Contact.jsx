import "./Contact.css";
import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    message: "",
  });
  const isFormIncomplete =
    !formData.from_name.trim() ||
    !formData.reply_to.trim() ||
    !formData.message.trim();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_2v5zw7e",
        "template_5bgv0os",
        formData,
        "v3ShWB94Geu7wm0Wq"
      )
      .then(
        (result) => {
          alert("Email sent successfully!");
        },
        (error) => {
          alert("Failed to send email. Try again.");
          console.error(error);
        }
      );
  };
  console.log(formData);
  return (
    <>
      <div className="contactContainerP" id="idmail">
        <div className="wrapper">
          <div className="contactTitle">
            <h1>Contact Us</h1>
          </div>
          <div className="contactContainer">
            <div className="leftSide">
              <form onSubmit={sendEmail}>
                <div className="emailContainer">
                  Name:
                  <input
                    type="text"
                    placeholder="name"
                    onChange={handleChange}
                    name="from_name"
                  />
                  Enter Your Email:
                  <input
                    type="text"
                    name="reply_to"
                    placeholder="Enter ur Email"
                    onChange={handleChange}
                  />
                  Massage:
                  <textarea
                    placeholder="Ask any Quesiotn"
                    name="message"
                    onChange={handleChange}
                  />
                </div>

                <button type="submite" disabled={isFormIncomplete}>
                  Submite
                </button>
              </form>
            </div>
            <div className="rightSide">
              <div className="facebook"></div>
              <div className="insta"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
