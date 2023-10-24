import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/layout";

let busaut = 16;
let busetaaut = 1;
let microaut = 9;
let swaut = 3;
let dcaut = 5;

function Vehicle() {
  const [vehicleInfo, setVehicleInfo] = useState([]);

  useEffect(() => {
    // Realiza una solicitud a la API para obtener la información del vehículo
    fetch(`https://appespetours.fly.dev/api/v1/vehicles/`)
      .then((response) => response.json())
      .then((data) => {
        const filteredVehicles = data.filter((vehicle) => {
          return (
            (vehicle.TipoCapacidad === "FLOTANTE" ||
              vehicle.TipoCapacidad === "FIJA") &&
            vehicle.Status === true
          );
        });

        setVehicleInfo(filteredVehicles);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  let bus = vehicleInfo.filter((vehiculo) => vehiculo.Clase === "BUS").length;
  const resultbus = busaut - bus;

  let buseta = vehicleInfo.filter(
    (vehiculo) => vehiculo.Clase === "BUSETA"
  ).length;
  const resultbuseta = buseta - busetaaut;

  let microbus = vehicleInfo.filter(
    (vehiculo) => vehiculo.Clase === "MICROBUS"
  ).length;
  const resultmicro = microaut - microbus;

  let stationw = vehicleInfo.filter(
    (vehiculo) => vehiculo.Clase === "STATION WAGON"
  ).length;
  const resultsw = swaut - stationw;

  let dc = vehicleInfo.filter(
    (vehiculo) => vehiculo.Clase === "DOBLE CABINA"
  ).length;
  const resultdc = dcaut - dc;

  console.log(buseta, "busetas actuales");

  return (
    <Layout>
      <div className="p-6 ">
        <h1 className="text-2xl font-semibold mb-4 text-center sm:text-center">
          Capacidad Transportadora asignada a Espetours Resolución
          20224730066085 de 2022-11-02
        </h1>
        <div className="overflow-x-auto md:w-full">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-2 md:px-4 text-left">Placa</th>
                <th className="py-3 px-2 md:px-4 text-left">Clase</th>
                <th className="py-3 px-2 md:px-4 text-left">Tipo Capacidad</th>
                <th className="py-3 px-2 md:px-4 text-left">Pasajeros</th>
              </tr>
            </thead>
            <tbody>
              {vehicleInfo.map((vehiculo, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="py-3 px-2">{vehiculo.Placa}</td>
                  <td className="py-3 px-2">{vehiculo.Clase}</td>
                  <td className="py-3 px-2">{vehiculo.TipoCapacidad}</td>
                  <td className="py-3 px-2">{vehiculo.Capacidad}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <table className="mt-4 w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 text-center">Tipo de Vehículo</th>
                <th className="py-2 px-4 text-center">Capacidad Autorizada</th>
                <th className="py-2 px-4 text-center">Total Disponible</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="py-2 px-4 text-center">Bus</td>
                <td className="py-2 px-4 text-center">{busaut}</td>
                <td className="py-2 px-4 text-center">{resultbus}</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="py-2 px-4 text-center">Buseta</td>
                <td className="py-2 px-4 text-center">{busetaaut}</td>
                <td className="py-2 px-4 text-center">{resultbuseta}</td>
              </tr>
              <tr className="bg-white">
                <td className="py-2 px-4 text-center">Microbus</td>
                <td className="py-2 px-4 text-center">{microaut}</td>
                <td className="py-2 px-4 text-center">{resultmicro}</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="py-2 px-4 text-center">Station Wagon</td>
                <td className="py-2 px-4 text-center">{swaut}</td>
                <td className="py-2 px-4 text-center">{resultsw}</td>
              </tr>
              <tr className="bg-white">
                <td className="py-2 px-4 text-center">Doble Cabina</td>
                <td className="py-2 px-4 text-center">{dcaut}</td>
                <td className="py-2 px-4 text-center">{resultdc}</td>
              </tr>
            </tbody>
          </table>
        </div>
        
      </div>
    </Layout>
  );
}

export default Vehicle;
