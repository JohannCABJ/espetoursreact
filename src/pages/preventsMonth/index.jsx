import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/layout";
import { ShoppingCartContext } from "../../context";

function PreventsMonth() {
  let programadosCount = 0;
  let realizadosCount = 0;
  let pendientesCount = 0;

  const context = useContext(ShoppingCartContext);
  const vehicleData = context.vehicleData;

  const { month } = useParams(); // Obtiene el mes de los parámetros de la ruta

  const vehiclesWithSelectedMonth = vehicleData.filter( (vehicle) => vehicle[month]
  );

  vehiclesWithSelectedMonth.forEach((vehicle) => {
    if (vehicle[`${month}Status`]) {
      realizadosCount++;
    } else {
      pendientesCount++;
    }
    programadosCount++;
  });

  console.log(vehiclesWithSelectedMonth);

  return (
    <Layout>
      <div>
        <h1>Vehículos para el mes de {month}</h1>
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left">Placa</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Url</th>
            </tr>
          </thead>
          <tbody>
            {vehiclesWithSelectedMonth.map((vehicle, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
              >
                <td className="px-6 py-4">{vehicle.Placa}</td>
                <td className="px-6 py-4">
                  {vehicle[`${month}Status`] ? (
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full">
                      Realizado
                    </span>
                  ) : (
                    <span className="bg-red-500 text-white px-2 py-1 rounded-full">
                      Pendiente
                    </span>
                  )}
                </td>
                <td className="px-6 py-4">
                  {vehicle[`${month}Url`] ? (
                    <a
                      href={vehicle[`${month}Url`]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Ver PDF
                    </a>
                  ) : (
                    "N/A"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center">
          <div className="text-center mr-4">
            <p className="font-semibold">Programados</p>
            <p className="text-xl">{programadosCount}</p>
          </div>
          <div className="text-center mr-4">
            <p className="font-semibold">Realizados</p>
            <p className="text-xl text-green-500">{realizadosCount}</p>
          </div>
          <div className="text-center">
            <p className="font-semibold">Pendientes</p>
            <p className="text-xl text-red-500">{pendientesCount}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}


export default PreventsMonth;
