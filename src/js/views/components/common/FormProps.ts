interface FormProps {
    error: string;
    handleSubmit(fn: () => void): void
    submit(): void
}

export default FormProps;