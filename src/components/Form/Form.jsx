import "./form.css"
const Form = () => {

    return (
      <div className="formPage">
        <form
          className="formular"
          name="contact"
          method="POST"
          data-netlify="true"
        >
          <h1>Contactez-moi</h1>
          <p>
            <label>
              Nom <br /> <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Email <br /> <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Message <br /> <textarea name="message"></textarea>
            </label>
          </p>
          <p>
            <button type="submit">Envoyer</button>
          </p>
        </form>
      </div>
    );
  }

export default Form