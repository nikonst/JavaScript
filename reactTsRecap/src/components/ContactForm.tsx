import { useState } from "react";
import type { FormEvent } from "react";
import type { ContactData } from "../types";

function ContactForm() {
  const [formData, setFormData] = useState<ContactData>({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Contact form:", formData);

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Contact</h2>

      <label>
        Name
        <input
          type="text"
          value={formData.name}
          onChange={(event) =>
            setFormData({
              ...formData,
              name: event.target.value,
            })
          }
        />
      </label>

      <label>
        Email
        <input
          type="email"
          value={formData.email}
          onChange={(event) =>
            setFormData({
              ...formData,
              email: event.target.value,
            })
          }
        />
      </label>

      <label>
        Message
        <textarea
          value={formData.message}
          onChange={(event) =>
            setFormData({
              ...formData,
              message: event.target.value,
            })
          }
        />
      </label>

      <button type="submit">Send</button>

      {submitted && <p>Message sent!</p>}
    </form>
  );
}

export default ContactForm;