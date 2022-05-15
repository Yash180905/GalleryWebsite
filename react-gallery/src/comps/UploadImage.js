import React from 'react';
import { useState } from 'react';
import ProgressBar from './ProgressBar';

function UploadImage() {
    const type = ['image/jpeg', 'image/png']
    const [values, setValues] = useState({
        file: "",
        formData: new FormData(),
        error: ""
    });
    const { file, formData, error } = values;
    const handleChange = (e) => {
        const value = e.target.files[0]
        if (value && type.includes(value.type)) {
            setValues({ ...values, file: value })
            formData.set("image", value);
        }

    }
    return (
        <form>
            <svg>


            </svg>
            <h1>Photo gallery</h1>
            <label>
                <input onChange={(e) => handleChange(e)} type="file" placeholder="Choose file" />
                <span>Add</span>

                
            </label>
            {file && <ProgressBar values={values} setValues={setValues} />}
            {error && <h1>{error}</h1>}
        </form>
    );
}

export default UploadImage;
