import React, { useState } from 'react'

export default function City2() {
    const [selectedcity, setSelectedcity] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value;
        console.log("🚀 ~ file: City2.js:8 ~ handleChange ~ e.target.value", e.target.value)
        const checked = e.target.checked;
        console.log(value, checked);
        if(checked) {
            setSelectedcity([
                ...selectedcity, value
            ])
        }
        else {
            setSelectedcity(selectedcity.filter( (e) =>(e !== value) ));
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(selectedcity)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                Select your city
            </label>
            <input htmlFor="" type="checkbox" name="city" value="Berlin" onChange={handleChange} />
            <label > Berlin</label>
            &nbsp;
            <input htmlFor="" type="checkbox" name="city" value="München" onChange={handleChange} />
            <label >München</label>  
            &nbsp;
            <input htmlFor="" type="checkbox" name="city" value="Hamburg" onChange={handleChange} />
            <label> Hamburg</label>
            <label className='cursor-pointer 
                    border-2 border-vividBlue 
                    text-vividBlue 
                    font-semibold 
                    hover:border-2
                    text-center w-[200px] 
                    h-[68px] 
                    outline-none 
                    rounded-full 
                    hover:text-white
                    hover:bg-vividBlue 
                    hover:border-vividBlue flex justify-center items-center'>
                    <input  className='hidden'type='submit' value='submit'/>
                    Select your city
                </label>
        </form>
    </div>
  )
}
