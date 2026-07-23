import { useState } from "react";

const initialForm = {
  nombre: "",
  email: "",
  telefono: "",
  mensaje: "",
};

function validate(form) {
  const errors = {};

  if (form.nombre.trim().length < 3) {
    errors.nombre = "Escribe un nombre de al menos 3 caracteres.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = "Ingresa un correo electrónico válido.";
  }

  if (form.telefono && !/^[0-9+()\s-]{7,18}$/.test(form.telefono.trim())) {
    errors.telefono = "Ingresa un número de teléfono válido.";
  }

  if (form.mensaje.trim().length < 10) {
    errors.mensaje = "Escribe una consulta de al menos 10 caracteres.";
  }

  return errors;
}

function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm((current) => ({ ...current, [name]: value }));
    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: "" }));
    }
    setSuccess("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate(form);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSuccess("");
      return;
    }

    setSuccess(
      "La consulta fue validada correctamente. En esta demostración Front-End no se guarda información en una base de datos."
    );
    setErrors({});
    setForm(initialForm);
  };

  return (
    <form className="contact-form" noValidate onSubmit={handleSubmit}>
      <div className="field-grid">
        <div className="form-field">
          <label htmlFor="nombre">Nombre completo</label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            value={form.nombre}
            onChange={handleChange}
            aria-invalid={Boolean(errors.nombre)}
            aria-describedby={errors.nombre ? "nombre-error" : undefined}
            placeholder="Ej. Xavier Ochoa"
          />
          {errors.nombre && (
            <span className="field-error" id="nombre-error">
              {errors.nombre}
            </span>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="email">Correo electrónico</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            placeholder="nombre@correo.com"
          />
          {errors.email && (
            <span className="field-error" id="email-error">
              {errors.email}
            </span>
          )}
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="telefono">Teléfono (opcional)</label>
        <input
          id="telefono"
          name="telefono"
          type="tel"
          value={form.telefono}
          onChange={handleChange}
          aria-invalid={Boolean(errors.telefono)}
          aria-describedby={errors.telefono ? "telefono-error" : undefined}
          placeholder="099 000 0000"
        />
        {errors.telefono && (
          <span className="field-error" id="telefono-error">
            {errors.telefono}
          </span>
        )}
      </div>

      <div className="form-field">
        <label htmlFor="mensaje">Consulta</label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows="6"
          value={form.mensaje}
          onChange={handleChange}
          aria-invalid={Boolean(errors.mensaje)}
          aria-describedby={errors.mensaje ? "mensaje-error" : undefined}
          placeholder="Cuéntanos qué repuesto necesitas y para qué vehículo."
        />
        {errors.mensaje && (
          <span className="field-error" id="mensaje-error">
            {errors.mensaje}
          </span>
        )}
      </div>

      <button className="button button--primary" type="submit">
        Validar y enviar consulta
      </button>

      {success && (
        <p className="form-success" role="status">
          {success}
        </p>
      )}
    </form>
  );
}

export default ContactForm;
