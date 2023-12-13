import React,{useEffect,useState} from 'react'
import axios from 'axios'
import endpoints from '@/globals_js/endpoints'

function StockName() {
    const [options, setOptions] = useState([]);
    const [selectedValue, setSelectedValue] = useState('');
    useEffect(() => {
        // Fetch options from an API using Axios
        const fetchData = async () => {
          try {
            const response = await axios.get(endpoints.stock_name);
            setOptions(response.data);
          } catch (error) {
            console.error('Error fetching options:', error);
          }
        };
    
        fetchData();
      }, []); 
      const handleChange = (event) => {
        setSelectedValue(event.target.value);
      };
  return (
    <div className='p-2 border-2'>
      <label htmlFor="combo-box">Stock Name: </label>
      <select id="combo-box" value={selectedValue} onChange={handleChange} className='custom_combobox'>
        <option value="">-- Select --</option>
        {options.map((option,index) => (
          <option key={index} value={option.stock_name}>
            {option.stock_name}
          </option>
        ))}
      </select>
      {/* {options.map((item,index)=>{
        return( {item.stock_name})
      })} */}
            {/* {JSON.stringify(options)} */}
      {/* <p>You selected: {selectedValue}</p>   */}
    </div>
  );
}

export default StockName
