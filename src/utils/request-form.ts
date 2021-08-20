import * as yup from 'yup';

import {
  fieldMaxLengthMessage,
  invalidEmail,
  invalidPhone,
  maxFieldLength,
  requiredConfirmation,
  requiredErrorMessage,
} from 'constants/request-form';

export const requestFormSchema = yup.object({
  name: yup.string()
    .max(maxFieldLength, fieldMaxLengthMessage),
  email: yup.string()
    .required(requiredErrorMessage)
    .email(invalidEmail),
  tel: yup.string()
    .required(requiredErrorMessage)
    .matches(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/, invalidPhone),
  organizationTitle: yup.string()
    .max(maxFieldLength, fieldMaxLengthMessage),
  confirmation: yup.boolean()
    .test('confirmation', requiredConfirmation, (value?: boolean) => !!value)
});
