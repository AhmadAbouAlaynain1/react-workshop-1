import React, { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import axios from "axios";

const ContactUs = () => {
  // State for the input text
  const [title, setTitle] = useState("HELLO");
  const [body, setBody] = useState("");
  // Coupling states to send as data to backend
  const data = {
    title,
    body,
    userId: 1,
  };
  const [x, setx] = useState(true);

  return (
    <section className="container flex flex-column align-items-center mt-8 surface-100">
      <h1 className="text-2xl my-4">Create a Task {x && "Here"}</h1>
      <form
        className="w-8 surface-300 p-4 contact-us-form mb-4"
        // Posting data to the backend
        onSubmit={(e) => {
          e.preventDefault();
          console.log(data);
          axios
            .post("https://jsonplaceholder.typicode.com/posts", data)
            .then((resp) => {
              console.log(resp.data);
            })
            .catch((err) => console.log(err));
        }}
      >
        <span className="p-float-label">
          <InputText
            id="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full"
          />
          <label htmlFor="Title">Title</label>
        </span>

        <InputTextarea
          rows={5}
          cols={30}
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Body"
        />
        <Button type="submit" label="Submit" className="mt-4" />
      </form>
    </section>
  );
};

export default ContactUs;
