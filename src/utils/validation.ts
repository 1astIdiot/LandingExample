import { SchemaOf } from 'yup';
import { setIn, ValidationErrors } from 'final-form';

export const validate = <T>(schema: SchemaOf<T>) => async <C>(values: C): Promise<ValidationErrors | undefined> => {
  try {
    await schema.validate(values, { abortEarly: false });
  } catch (e) {
    return e.inner.reduce((errors: any, error: any) => {
      return setIn(errors, error.path, error.message);
    }, {});
  }
};
