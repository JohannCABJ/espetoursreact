import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/layout";
import { ShoppingCartContext } from "../../context";

function PreventsMonth() {
  let {month}  = useParams ()
  const [contenido, setContenido] = useState('');

  useEffect(() => {
    fetch(`https://appespetours.fly.dev/api/v1/prevents/monthly/${month}`)
      .then(response => response.json())
      .then(data => {
        setContenido(data);
      })
      .catch(error => {
        console.error('Error al obtener el contenido:', error);
      });
  }, []);

  console.log(contenido);
  const { programados, realizados, pendientes, placaData } = contenido;

  return (
    <Layout>
      <div>
        <h1>Vehículos para el mes de {month}</h1>
        <table className="w-full border-collapse border border-gray-300">
          {/* ... Código de la tabla */}
          <tbody>
            {placaData ? (
              placaData.map((vehicle, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
                >
                  <td className="px-6 py-4">{vehicle.Placa}</td>
                  <td className="px-6 py-4">
                    {vehicle.Status ? (
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
                    {vehicle.url ? (
                      <a
                        href={vehicle.url}
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
              ))
            ) : (
              <tr>
                <td colSpan="3">No se encontraron datos</td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="flex justify-center">
          <div className="text-center mr-4">
            <p className="font-semibold">Programados</p>
            <p className="text-xl">{programados}</p>
          </div>
          <div className="text-center mr-4">
            <p className="font-semibold">Realizados</p>
            <p className="text-xl text-green-500">{realizados}</p>
          </div>
          <div className="text-center">
            <p className="font-semibold">Pendientes</p>
            <p className="text-xl text-red-500">{pendientes}</p>
          </div>
        </div>
      </div>
    </Layout>
  ); 
}


export default PreventsMonth;
