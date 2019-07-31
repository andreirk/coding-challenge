import React, { useState, useEffect } from 'react';
import Select from 'react-select'
import CSVReader from 'react-csv-reader'


function Indicator({loaded}){
  const canSelectText = <h3>You can select now!!!</h3>;
  const canNotSelectText = <h4>Nothing to select from yet, click the button and load CSV</h4>
  const status = loaded ? canSelectText : canNotSelectText;
  return <span>{status}</span>
}

export default function SuggestSelect() {
  const [data, setData] = useState(null);
  const [options, setOptions] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const handleChange = selectedOption => {
    const selectedData = options.find(el => el.person_ID === selectedOption.value )
    setData(selectedData);
  };

  const handleLoad = (file) => {
    setLoaded(true);
    setOptions(file.map((el) => {
      return {
        ...el,
        value: el.person_ID,
        label: el.name,
      }
    }));
  }


  return (
    <div>
      <div>
        <Indicator loaded={loaded}/>
        {data && JSON.stringify(data)}
      </div>
      <Select
        onChange={handleChange}
        options={options}
      />
      <CSVReader
        cssClass="csv-reader-input"
        label="Select CSV to load"
        onFileLoaded={handleLoad}
        parserOptions={{header:true}}
      />
    </div>
  )
}
