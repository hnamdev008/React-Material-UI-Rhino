interface FormProps {
    error: string;
    handleSubmit(fn: (values) => void): void
    submit(values): void
    dispatch: Function;
}

export default FormProps;