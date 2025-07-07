import "./Contact.css";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log(formData);
  return (
    <>
      <div className="contactContainer">
        <h1>contact US</h1>
        <form>
          <input
            type="text"
            placeholder="name"
            onChange={handleChange}
            name="from_name"
          />
          <input
            type="text"
            name="reply_to"
            placeholder="Enter ur Email"
            onChange={handleChange}
          />
          <textarea placeholder="Ask any Quesiotn" />
        </form>
      </div>
    </>
  );
};
export default Contact;
