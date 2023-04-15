import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";
import shipments from "../src/assets/Shipments.txt";
import ShipmentsTable from "./components/ShipmentsTable";

function App() {

  const [shipmentsData, setShipmentsData] = useState('');

  useEffect(() => {
      axios.get(shipments)
              .then(response => {
                  setShipmentsData(response.data)
              });
  }, []);

  function onDelete(updatedTableData) {
      setShipmentsData(updatedTableData)
  }

    const updateShipmentData = (updatedShipment) => {
      let flag = true;
        const updatedShipmentsData = shipmentsData.map(shipment => {
            if (!flag) {
                return shipment;
            }
            if (shipment.orderNo === updatedShipment.orderNo) {
                flag = false;
                return updatedShipment;
            } else {
                return shipment;
            }
        });
        setShipmentsData(updatedShipmentsData);
    };


    return (
        <div className="App">
          {(shipmentsData.length > 0) &&
              <div>
                <div className="App-header"></div>
                <ShipmentsTable shipmentsData={shipmentsData} onDelete={onDelete} updateShipmentData={updateShipmentData}/>
              </div>
          }
        </div>
  );
}
export default App;


