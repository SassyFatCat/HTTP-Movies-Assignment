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

const handleStarsChange = event => {

}

return [formValue, setFormValue, handleChange, handleStarsChange]
}

export default useForm