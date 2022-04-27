import React, {
  InputHTMLAttributes,
  ForwardRefRenderFunction,
  forwardRef,
} from 'react';

import { FieldError } from 'react-hook-form';
import './input.scss';


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({
  name,
  label,
  error = null,
  ...rest
}, ref) => {

  return (

    <div className="input__container" >

      {!!label && <label className='input__label' htmlFor={name}>{label}</label>}

      <input
        className='input__input'
        name={name}
        id={name}
        ref={ref}
        {...rest}
      />

      {!!error && (

        <p className="input__error">
          {error.message}
        </p>

      )}

    </div>

  );
};


/**
* Componente Input com label interno juntamente da exposição de erros.
*/

export const Input = forwardRef(InputBase);
