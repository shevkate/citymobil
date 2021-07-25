import React, {useEffect, useState} from 'react';
import axios from 'axios';


function App() {
    const dataUrl = 'https://city-mobil.ru/api/cars';

    const [columnToSort, setColumnToSort] = useState(undefined);
    const [ascending, setAscending] = useState(true);
    const [carsData, setCarsData] = useState(null);
    const [inputValue, setInputValue] = useState("");
    const [filterString, setFilterString] = useState("");
    const [carInfoString, setCarInfoString] = useState("");


    useEffect(() => {
        axios(dataUrl).then((res) => {
            setCarsData(res.data)

        })

    }, []);

    function sortBy(columnName) {
        if (columnName !== columnToSort) {
            setColumnToSort(columnName);
            setAscending(true);
        } else if (ascending) {
            setAscending(false);
        } else {
            setColumnToSort(undefined);
        }
    }

    if (!carsData) {
        return 'Loading...'
    }

    const allColumnNames = ['Марка и модель', ...carsData.tariffs_list];
    const unsortedRows = carsData.cars.map((car, carIndex) => {
        return [
            `${car.mark} ${car.model}`,
            ...carsData.tariffs_list.map((tariffName, tariffIndex) => {
                const tariffData = car.tariffs[tariffName];
                if (tariffData) {
                    return tariffData.year
                } else {
                    return "-"
                }
            })
        ];
    });

    const unfilteredRows = columnToSort
        ? unsortedRows.sort((a, b) => {
            const columnToSortIndex = allColumnNames.indexOf(columnToSort);
            const aValue = a[columnToSortIndex];
            const bValue = b[columnToSortIndex];
            if (ascending) {
                if (bValue === "-") {
                    return -1;
                }
                return aValue < bValue ? -1 : 1;
            } else {
                if (aValue === "-") {
                    return 1;
                }
                return aValue < bValue ? 1 : -1;
            }
        })
        : unsortedRows;
    const filteredRows = filterString.length === 0 ? unfilteredRows : unfilteredRows.filter((cells) => {
        for (let i = 0; i < cells.length; i++) {
            if (String(cells[i]).toLowerCase().includes(filterString)) {
                return true;
            }
        }
        return false;
    })
    return (
        <div className="main">
            <header><p>header</p></header>

        <div className="pageContent">
            <aside>
                <p>sidebar</p>
            </aside>

            <div className="logicContent">

            <form className="form-inline">
                <div className="form-group mx-sm-3 mb-2">
                    <input type="text" className="form-control" placeholder="Поиск" onChange={(event) => {
                        setInputValue(event.target.value);
                    }}/>
                </div>
                <button type="submit" className="btn btn-primary mb-2" onClick={(event) => {
                    event.preventDefault();
                    setFilterString(inputValue.trim().toLowerCase());
                }}>Найти
                </button>
            </form>
            <table className="table table-bordered text-center">
                <thead>
                <tr>
                    {allColumnNames.map((columnName, columnIndex) => (
                        <th key={columnIndex} scope="col-lg" onClick={() => sortBy(columnName)}>
                            {`${columnName}${columnName === columnToSort ? ascending ? " ↑" : " ↓" : ""}`}
                        </th>
                    ))
                    }
                </tr>
                </thead>
                <tbody>
                {
                    filteredRows.map((row, carIndex) => (
                        <tr key={carIndex}>
                            {
                                row.map((cellName, cellIndex) => {
                                    return <td key={cellIndex} onClick={()=>{
                                        if(cellIndex===0) {
                                            setCarInfoString("")
                                        }
                                        else if (cellName==="-") {
                                            setCarInfoString("")
                                        } else {
                                            setCarInfoString(`Вы выбрали ${row[0]} ${cellName} года`)
                                        }
                                    }}>{cellName}</td>
                                })
                            }
                        </tr>
                    ))
                }
                </tbody>
            </table>
            {carInfoString ? <div>{carInfoString}</div> : null}
        </div>
        </div>
            <div className="footer">
                <p>footer</p>
            </div>
        </div>
    );
}

export default App;

