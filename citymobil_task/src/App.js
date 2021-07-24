import React,{useEffect, useState} from 'react';
import axios from 'axios';


function App() {
    const dataUrl = 'https://city-mobil.ru/api/cars';

    const [Data, setData] = useState([])
    useEffect(()=>{
        axios(dataUrl).then ((res)=>{
            console.log(res)
            setData(res.data)
            console.log(Data)
            console.log(typeof Data)
        })
        console.log(Data)
        console.log(typeof Data)
        }, [])

    const dataArray = Object.keys(Data).map(function(k){return Data[k]});
    const DataCars = dataArray[0];
  return (
    <div className="container">
        <table className="table">
            <thead>
            <tr>
                <th scope="col">Марка и модель</th>
                <th scope="col">Стандарт</th>
                <th scope="col">Комфорт</th>
                <th scope="col">Бизнес</th>
                <th scope="col">Комфорт+</th>
                <th scope="col">Эконом</th>
                <th scope="col">Минивен</th>
                <th scope="col">Лайт</th>
            </tr>
            </thead>

            <tbody>
            {DataCars.map(item=>(
                <tr>
                <td>{item.mark}</td>
                <td>{item.model}</td>
                </tr>
                ))}

            </tbody>
        </table>

    </div>
  );
}

export default App;

