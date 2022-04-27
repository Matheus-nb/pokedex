import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import './contact.scss'

interface IFormInputs {
  name: string,
  email: string,
  phone: string,
  about: string,
  message: string
}

const PhoneRegex = /^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/g

const schema = yup.object({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().email('E-mail inválido').required('E-mail obrigatório'),
  phone: yup.string().matches(PhoneRegex, 'Numero de telefone inválido').required('Telefone obrigatório'),
  about: yup.string().required('Assunto obrigatório'),
  message: yup.string().required('Explique o seu contato')
}).required();

export function Contact() {

  const { register, handleSubmit, formState, reset } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
  });

  const onSubmit: SubmitHandler<IFormInputs> = async (values) => {

    window.alert(`Obrigado pelo contato ${values.name}!
    Responderemos em breve.`);

    console.log(values);
    reset();

  }

  return (
    <>

      <Header />

      <form className="contact__form" onSubmit={handleSubmit(onSubmit)}>

        <div className="form__infos">

          <Input
            placeholder="Exemplo: John Doe"
            label="Nome completo"
            error={formState.errors.name}
            {...register("name")}
          />

          <Input
            placeholder="Exemplo: JohnDoe@gmail.com"
            type="email"
            label="E-mail"
            error={formState.errors.email}
            {...register("email")}
          />

          <Input
            placeholder="Exemplo: 11 99999-9999"
            type="tel"
            label="N° Celular"
            error={formState.errors.phone}
            {...register("phone")}
          />

        </div>

        <div className="form__about">
          <Input
            placeholder="Exemplo: Eu sou um desenvolvedor front-end"
            label="Assunto"
            error={formState.errors.about}
            {...register("about")}
          />

          <textarea className="about__text" placeholder="Exemplo: Gostaria de conversar..." {...register("message")} />
        </div>

        <button className="form__button--submit" type="submit">Enviar</button>
      </form>
    </>
  )
}