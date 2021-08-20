import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Form, Field } from 'react-final-form';
import * as yup from 'yup';
import ReCAPTCHA from 'react-google-recaptcha';
import { css } from '@emotion/react';
import emailjs from 'emailjs-com';
import { FormApi } from 'final-form';

import { Button, Checkbox, Input, Typography } from 'components';

import { validate } from 'utils/validation';
import { requestFormSchema } from 'utils/request-form';

import { InputProps } from './Input';
import { CheckboxProps } from './Checkbox';

const FormHint = styled<React.FC>((props) => <Typography variant='caption' {...props} />)`
  margin-bottom: 32px;
`;

const CheckboxContainer = styled.div`
  margin-bottom: 16px;
`;

const StyledButton = styled(Button)``;

const InputWrapper = styled.div`
  margin-bottom: 20px;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
  }
`;

interface FieldProps extends InputProps {
  name: string;
}

const TextField: React.FC<FieldProps> = (props) => {
  const {
    name,
    type,

    ...rest
  } = props;

  return (
    <InputWrapper>
      <Field name={name} type={type}>
        {({ input, meta }) => (
          <Input
            value={input.value}
            type={type}
            onChange={input.onChange}
            error={(meta.touched && meta.invalid) && meta.error}

            {...rest}
          />
        )}
      </Field>
    </InputWrapper>
  );
};

const CheckboxField: React.FC<FieldProps & CheckboxProps> = (props) => {
  const {
    name,

    ...rest
  } = props;

  return (
    <InputWrapper>
      <Field name={name} type='checkbox'>
        {({ input, meta }) => (
          <Checkbox
            checked={input.checked}
            value={input.value}
            onChange={input.onChange}
            error={(meta.touched && meta.invalid) && meta.error}

            {...rest}
          />
        )}
      </Field>
    </InputWrapper>
  );
};

const StyledTextField = styled(TextField)`
  width: 384px;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 85%;
  }
`;

interface RequestFormProps {
  onClose?: () => void;
}

interface FormValues {
  name?: string;
  email: string;
  tel: string;
  organizationTitle: string;
  confirmation: boolean;
}

const RequestForm: React.FC<RequestFormProps> = (props) => {
  const {
    onClose,
  } = props;

  const [isReCAPTCHAShowed, toggleReCAPTCHAShowed] = useState<boolean>(false);

  const sendEmail = async (values: FormValues, reset: FormApi["reset"]) => {
    try {
      await emailjs.send("service_itj5yev", "template_ys2xv38", values);

      reset();
      toggleReCAPTCHAShowed(false);
      onClose && onClose();

      alert('Заявка успешно отправлена');
    } catch (error) {
      console.error(error);

      reset();
      toggleReCAPTCHAShowed(false);

      alert('При отправке возникла ошибка!');
    }
  };

  return (
    <Form
      onSubmit={() => { }}
      validate={validate<yup.InferType<typeof requestFormSchema>>(requestFormSchema)}
      initialValues={{
        name: '',
        email: '',
        tel: '',
        organizationTitle: '',
        confirmation: false,
      }}
      render={({ handleSubmit, errors, values, form }) => {
        return (
          <form onSubmit={handleSubmit} css={
            css`
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;

              position: relative;
              width: 100%;
          `}>
            <StyledTextField name='name' placeholder='ФИ' disabled={isReCAPTCHAShowed} />
            <StyledTextField name='email' placeholder='E-mail*' disabled={isReCAPTCHAShowed} />
            <StyledTextField name='tel' type='tel' placeholder='Телефон*' disabled={isReCAPTCHAShowed} />
            <StyledTextField name='organizationTitle' placeholder='Компания' disabled={isReCAPTCHAShowed} />

            <CheckboxContainer>
              <CheckboxField
                name='confirmation'
                label='Согласие на обработку персональных данных'
                disabled={isReCAPTCHAShowed}
              />
            </CheckboxContainer>

            <FormHint>
              * Пункты обязательные для заполнения
            </FormHint>

            <StyledButton
              type="submit"
              onClick={() => {
                if (Object.keys(errors as Object).length === 0) {
                  toggleReCAPTCHAShowed(true);
                }
              }}
              css={css`
                margin-bottom: 40px;
              `}
              disabled={isReCAPTCHAShowed}
            >
              Получить консультацию
            </StyledButton>

            {isReCAPTCHAShowed && (
              <ReCAPTCHA
                sitekey='6Lf94bwaAAAAAFU02IwXD5fILIJ7Pg9uaibnwFC5'
                onChange={() => sendEmail(values as FormValues, form.reset)}
                css={css`
                  position: absolute;
                  left: 0;
                  bottom: 0;
                  transform: translateY(100%);
                `}
              />
            )}
          </form>
        );
      }}
    />
  );
};

export default RequestForm;
