import { useState } from "react";

export const useForm = (initialForm = {} ) => {

    const [formState, setFormState] = useState(initialForm);

    const onInputChange= ({target}) => {
        const {name, value} = target;
        //en name esta el campo del input, value el valor
        setFormState({
            ...formState,
            [name] : value
        })
    }

    const onResetForm = () => {
        setFormState(initialForm)
    };


  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  }
}
