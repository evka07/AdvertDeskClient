import React, {createContext, useContext, useState} from 'react';
import axios from 'axios';

const MyContext = createContext()
export const Context = ({children}) => {

  const [ads, setAds] = useState([]);

  const fetchAd = () => {
    axios.get('http://https://f94ae564-3619-4341-99fe-1707eb482fdb-00-atl29fq4qf1y.kirk.replit.dev/ads')
      .then(response => {
        setAds(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };


  return (
    <MyContext.Provider value={{ads, setAds, fetchAd}}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext)