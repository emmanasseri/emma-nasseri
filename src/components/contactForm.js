"use client";

const ContactForm = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      email: event.target.email.value,
      message: event.target.message.value,
    };

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = "/api/contact";

    // Form the request for sending data to the server.
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    try {
      // Send the form data to our forms API and get a response.
      const response = await fetch(endpoint, options);

      // Check if the response was ok (status 200-299).
      if (!response.ok) {
        // Not a 2xx response, so we're assuming it's an error
        console.error("Response status was not ok:", response.status);
        alert("There was an error submitting the form.");
        return;
      }

      // Try to parse the response body as JSON
      const result = await response.json();
      alert(result.message);
    } catch (error) {
      // This will catch any error that's thrown when the network request is made or when the JSON is parsed
      console.error("There was an error submitting the form:", error);
      alert("There was an error submitting the form.");
    }
  };

  return (
    <div id="contact" style={styles.contactContainer}>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email"
          required
          style={styles.input}
        />
        <textarea
          id="message"
          name="message"
          placeholder="Your message"
          required
          style={styles.textarea}
        />
        <button type="submit" style={styles.button}>
          Send Message
        </button>
      </form>
    </div>
  );
};

const styles = {
  contactContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "500px",
    margin: "0 auto",
  },
  input: {
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  textarea: {
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
    height: "150px",
  },
  button: {
    padding: "10px 20px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007BFF",
    color: "white",
    cursor: "pointer",
  },
};

export default ContactForm;
