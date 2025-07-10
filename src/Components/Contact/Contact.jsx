import "./Contact.css";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    massage: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log(formData);
  return (
    <>
      <div className="contactContainer">
        <div className="contactTitle">
          {" "}
          <h1>Contact US</h1>
        </div>
        <form>
          <div className="emailContainer">
            <textarea
              placeholder="Ask any Quesiotn"
              name="massage"
              onChange={handleChange}
            />
          </div>
          name:
          <input
            type="text"
            placeholder="name"
            onChange={handleChange}
            name="from_name"
          />
          email:
          <input
            type="text"
            name="reply_to"
            placeholder="Enter ur Email"
            onChange={handleChange}
          />
          <button type="submite">Submite</button>
        </form>
      </div>
    </>
  );
};
export default Contact;
