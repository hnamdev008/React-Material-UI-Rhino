interface FieldProps {
  input: {
    name: string,
    value: string,
    onChange(value: string): void;
  },
  meta: {
    active: boolean,
    asyncValidating: boolean,
    autofilled: boolean,
    dirty: boolean,
    error: string,
    warning: string,
    invalid: boolean,
    pristine: boolean,
    submitting: boolean,
    touched: boolean,
    valid: boolean,
    visited: boolean
  },
  name: string
  children: any
}

export default FieldProps;