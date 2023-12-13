import React,{useState} from 'react'

function Resolution() {
    const [selectedValue, setSelectedValue] = useState('');
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
      };
  return (
    <div  className='p-2 border-2'>
      <lable>Resolution</lable>
      <select id="combo-box" value={selectedValue} onChange={handleChange} className='custom_combobox'>
        <option value="">-- Select --</option>
        <option value="D">Day</option>
        <option value="60">60 Min</option>
        <option value="30">30 Min</option>

        
      </select>
    </div>
  )
}

export default Resolution
