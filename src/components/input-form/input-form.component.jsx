import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const InputForm = () => {
  const [formData, updateFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  });

  const sendFeedback = (serviceID, templateID, variables) => {
    window.emailjs
      .send(serviceID, templateID, variables)
      .then((res) => {
        console.log('Correo fue enviado exitosamente');
      })
      .catch((err) => console.error('Ha ocurrido un error', err));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Recibimos su mensaje y ya estamos trabajando en ello `);
    const templateID = 'contact_form';
    const serviceID = 'service_wdqc8jf';
    sendFeedback(serviceID, templateID, {
      nombre: formData.nombre,
      email: formData.email,
      telefono: formData.telefono,
      mensaje: formData.mensaje,
    });

    console.log(formData);
    // ... submit to email
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    updateFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className='mb-3' controlId='nombre'>
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type='text'
          placeholder='Escriba su nombre'
          name='nombre'
          value={formData.nombre}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='email'>
        <Form.Label>Correo Electronico</Form.Label>
        <Form.Control
          type='email'
          placeholder='Escriba su correo electrónico'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='telefono'>
        <Form.Label>Teléfono</Form.Label>
        <Form.Control
          type='tel'
          placeholder='Escriba su teléfono'
          name='telefono'
          value={formData.telefono}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='mensaje'>
        <Form.Label>Escriba su mensaje</Form.Label>
        <Form.Control
          as='textarea'
          rows={5}
          name='mensaje'
          value={formData.mensaje}
          onChange={handleChange}
        />
        <Form.Text className='text-muted'>
          Esta información no se comparte con terceros.
        </Form.Text>
      </Form.Group>
      <div className='container d-flex justify-content-center '>
        <Button variant='primary' type='submit'>
          Enviar
        </Button>
      </div>
    </Form>
  );
};
