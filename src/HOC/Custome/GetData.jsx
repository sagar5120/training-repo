import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';

function GetData(url) {
    const [data, setData] = useState([]);
    const getData = () => {
     try {
      axios
        .get(`https://gastro-backend.e-aribt.com/api/${url}`)
        .then((response) => {
          console.log(response.data.data); setData([...response.data]);
        })

        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } catch (error) {
      console.error("Error in getData function:", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

    
  return data;
}
export default GetData
