import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/layout";

function programmed() {
  const [vehicleData, setVehicleData] = useState([]);

  useEffect(() => {
    fetch("https://appespetours.fly.dev/api/v1/prevents/")
      .then((response) => response.json())
      .then((data) => {
        // Almacenamos todos los vehículos en el estado vehicleData
        setVehicleData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const getTrueMonthsData = (vehicle) => {
    const trueMonthsData = [];
    Object.keys(vehicle).forEach((month) => {
      if (month !== "_id" && month !== "Placa" && vehicle[month] === true) {
        trueMonthsData.push({
          month,
          status: vehicle[`${month}Status`],
          url: vehicle[`${month}Url`],
        });
      }
    });
    return trueMonthsData;
  };

  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-4 text-center sm:text-center">
          Cronograma de mantenimiento preventivo
        </h1>
        <div className="overflow-x-auto">
          <table className="w-full min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-2 text-left">Placa</th>
                <th className="py-3 px-2 text-left">Meses programados</th>
                <th className="py-3 px-2 text-left">Status</th>
                <th className="py-3 px-2 text-left">Url</th>
              </tr>
            </thead>
            <tbody>
              {vehicleData.map((vehicle, vehicleIndex) => (
                <tr key={vehicleIndex}>
                  <td className="py-3 px-2">{vehicle.Placa}</td>
                  <td className="py-3 px-2">
                    {getTrueMonthsData(vehicle)
                      .filter(
                        (monthData) => !monthData.month.endsWith("Status")
                      )
                      .map((monthData) => monthData.month)
                      .join(", ")}
                  </td>
                  <td className="py-3 px-2">
                    {getTrueMonthsData(vehicle)
                      .filter(
                        (monthData) => !monthData.month.endsWith("Status")
                      )
                      .map((monthData) =>
                        monthData.status ? "Realizado" : "Pendiente"
                      )
                      .join(", ")}
                  </td>
                  <td className="py-3 px-2">
                    {getTrueMonthsData(vehicle).map((monthData, index) => (
                      <div key={index}>
                      <a href={monthData.url} target="_blank" rel="noopener noreferrer">
                        {monthData.url}
                      </a>
                    </div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}

export default programmed;
