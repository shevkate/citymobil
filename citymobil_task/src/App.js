import React, {useEffect, useState} from 'react';
import axios from 'axios';


function App() {
    const dataUrl = 'https://city-mobil.ru/api/cars';

    const [carsData, setCarsData] = useState(null)
    useEffect(() => {
        axios(dataUrl).then((res) => {
            setCarsData(res.data)

        })

    }, [])
    console.log(carsData);
    if (!carsData) {
        return 'Loading...'
    }

    return (
        <div className="container">
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Марка и модель</th>

                    {carsData.tariffs_list.map((tariffName, tariffIndex) => (
                        <th key={tariffIndex} scope="col">{tariffName}</th>

                    ))

                    }

                </tr>
                </thead>

                <tbody>
                {carsData.cars.map((car, carIndex) => (
                    <tr key={carIndex}>
                        <td>{`${car.mark} ${car.model}`}</td>


                        {carsData.tariffs_list.map((tariffName, tariffIndex) => {
                            const tariffData = car.tariffs[tariffName];
                            if (tariffData) {
                                return <td key={tariffIndex}>{tariffData.year}</td>
                            } else {
                                return <td key={tariffIndex}>{"-"}</td>
                            }


                        })

                        }


                    </tr>
                ))}

                </tbody>
            </table>

        </div>
    );
}

export default App;

