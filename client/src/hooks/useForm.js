import { useState } from "react";

const useForm = (cb, state = {}) => {
  const [values, setValues] = useState(state);

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.name === "e.target.name" ? e.target.checked : e.target.value
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    cb();
  };

  return [onSubmit, onChange, values];
};

export default useForm;
