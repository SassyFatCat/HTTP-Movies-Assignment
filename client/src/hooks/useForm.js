import React, {useState} from 'react';


const useForm = (initialValue) => {
const [formValue, setFormValue] = useState(initialValue);

const handleChange = event => {
    const {name, value} = event.target;
    setFormValue({
        ...formValue,
        [name]: value
    });
};


return [formValue, setFormValue, handleChange]
}

export default useForm