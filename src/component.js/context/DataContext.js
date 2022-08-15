import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext(null);
const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [Data, setData] = useState();
    const [FilterData, setFilterData] = useState(Data);
    const [ID, setID] = useState();

  useEffect(() => {
    axios.get('https://opensheet.elk.sh/1gH5Kle-styszcHF2G0H8l1w1nDt1RhO9NHNCpHhKK0M/employees')
        .then((res) => {
          setData(res.data)
            console.log(res)
        })
        .catch((err) => console.log(err));

}, [FilterData,ID]);

  return (
    <DataContext.Provider value={{
        Data, setData,
        FilterData, setFilterData,
        ID, setID
    }}>
      {children}
    </DataContext.Provider >
  )
}

export default DataContext;