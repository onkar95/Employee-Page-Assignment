import  React, { useEffect} from 'react';
import {  useParams } from 'react-router-dom';
import DataContext from './context/DataContext';

const EmployDetail = () => {
  const {Data,FilterData,setID} =  React.useContext(DataContext);
  const { id } = useParams()

  useEffect(() => {
    setID(id)
}, [id,Data,FilterData]);

  const [SingleData] = React.useState(Data);

  return (
    <div>
      <table style={{border:"1px solid black",textAlign:"center"}} >
        <thead>
          <th>field</th>
          <th>value</th>
        </thead>
        <tbody>
          <tr>
            <td>first_name </td>
            <td> {SingleData[0]?.first_name}</td>
          </tr>
          <tr>
            <td>last_name </td>
            <td> {SingleData[0]?.last_name}</td>
          </tr>
          <tr>
            <td>date_of_birth </td>
            <td> {SingleData[0]?.date_of_birth}</td>
          </tr>
          <tr>
            <td>address </td>
            <td> {SingleData[0]?.address}</td>
          </tr>
          <tr>
            <td>date_of_joining </td>
            <td> {SingleData[0]?.date_of_joining}</td>
          </tr>
          <tr>
            <td>salary </td>
            <td> {SingleData[0]?.salary}</td>
          </tr>
          <tr>
            <td>designation </td>
            <td> {SingleData[0]?.designation}</td>
          </tr>
        </tbody>
      </table>
      
    </div>
  )
}

export default EmployDetail