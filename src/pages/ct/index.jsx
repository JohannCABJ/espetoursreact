import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/layout";


function Vehicle() {
  const { id } = useParams();
  const { Placa } = useParams();
  console.log(id);

  const [vehicleInfo, setVehicleInfo] = useState(null);

  useEffect(() => {
    // Realiza una solicitud a la API para obtener la información del vehículo
    fetch(`https://appespetours.fly.dev/api/v1/vehicles/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Respuesta de la API:", data);
        setVehicleInfo(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [id]);

  return (
    <Layout>
      <div>
        <h2 className="text-center mb-6" >Detalles del Vehículo</h2>
        {vehicleInfo && (
          <div>
            <figure className="px-6">
              <img
                className="w-80 h-40  rounded-lg"
                src={vehicleInfo.Image}
                alt={Placa}
              />
            </figure>
            <p className="flex flex-col p-6">
              <span className="font-light text-md mt-2">
                Placa: {vehicleInfo.Placa}
              </span>
              <span className="font-light text-md mt-2">
                No. Interno: {vehicleInfo.Interno}
              </span>
              <span className="font-light text-md mt-2">
                Modelo: {vehicleInfo.Modelo}
              </span>
              <span className="font-light text-md mt-2">
                Marca: {vehicleInfo.Marca}
              </span>
              <span className="font-light text-md mt-2">
                Clase: {vehicleInfo.Clase}
              </span>
              <span className="font-light text-md mt-2">
                Linea: {vehicleInfo.Linea}
              </span>
              <span className="font-light text-md mt-2">
                Color: {vehicleInfo.Color}
              </span>
              <span className="font-light text-md mt-2">
                Serie: {vehicleInfo.Serie}
              </span>
              <span className="font-light text-md mt-2">
                Chasis: {vehicleInfo.Chasis}
              </span>
              <span className="font-light text-md mt-2">
                Motor: {vehicleInfo.Motor}
              </span>
              <span className="font-light text-md mt-2">
                Carroceria: {vehicleInfo.Carroceria}
              </span>
              <span className="font-light text-md mt-2">
                Capacidad: {vehicleInfo.Capacidad}
              </span>
              <span className="font-light text-md mt-2">
                Licencia Tránsito: {vehicleInfo.LicTransito}
              </span>
              <span className="font-light text-md mt-2">
                No.Tarj. de operación: {vehicleInfo.TarjetaOp}
              </span>
              <span className="font-light text-md mt-2">
                Tecnomecánica: {vehicleInfo.Tecno}
              </span>
              <span className="font-light text-md mt-2">
                SOAT: {vehicleInfo.Soat}
              </span>
              <span className="font-light text-md mt-2">
                Tarj.Operación: {new Date(vehicleInfo.Operacion).toISOString().split('T')[0]}
              </span>
              <span className="font-light text-md mt-2">
                Póliza Contractual: {vehicleInfo.Contractual}
              </span>
              <span className="font-light text-md mt-2">
                Póliza Extracontractual: {vehicleInfo.Extracontractual}
              </span>
              <span className="font-light text-md mt-2">
                Mtto preventivo programado: {vehicleInfo.MttoPrev}
              </span>
              <span className="font-light text-md mt-2">
                Ultimo cambio aceite (km): {vehicleInfo.UltimoKmAceite}
              </span>
              <span className="font-light text-md mt-2">
                Km.Actual: {vehicleInfo.KmActual}
              </span>
              <span className="font-light text-md mt-2">
                Tipo Capacidad: {vehicleInfo.TipoCapacidad}
              </span>
              <span className="font-light text-md mt-2">
                Estado: {vehicleInfo.Estado}
              </span>
              <span className="font-light text-md mt-2">
                Convenio Colaboración: {vehicleInfo.Convenio}
              </span>
              <span className="font-light text-md mt-2">
                Propietario: {vehicleInfo.Propietario}
              </span>
              <span className="font-light text-md mt-2">
                Id Propietario: {vehicleInfo.IdPropietario}
              </span>
              <span className="font-light text-md mt-2">
                Tarjeta de Propiedad: (pdf):{" "}
                <a
                  href={vehicleInfo.Propiedadimg}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click aquí para ver el documento
                </a>
              </span>
              <span className="font-light text-md mt-2">
                Tenicomecánica (pdf):{" "}
                <a
                  href={vehicleInfo.Tecnoimg}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click aquí para ver el documento
                </a>
              </span>
              <span className="font-light text-md mt-2">
                SOAT (pdf):{" "}
                <a
                  href={vehicleInfo.SOATimg}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click aquí para ver el documento
                </a>
              </span>
              <span className="font-light text-md mt-2">
                Tarjeta Operación: (pdf):{" "}
                <a
                  href={vehicleInfo.Operacionimg}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click aquí para ver el documento
                </a>
              </span>
              <span className="font-light text-md mt-2">
                Poliza Contractual: (pdf):{" "}
                <a
                  href={vehicleInfo.Contractualimg}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click aquí para ver el documento
                </a>
              </span>
              <span className="font-light text-md mt-2">
                Poliza Extracontractual: (pdf):{" "}
                <a
                  href={vehicleInfo.Extraconimg}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click aquí para ver el documento
                </a>
              </span>
              <span className="font-light text-md mt-2">
                Ultima revision preventiva: (pdf):{" "}
                <a
                  href={vehicleInfo.BimestralIMG}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click aquí para ver el documento
                </a>
              </span>
              <span className="font-light text-md mt-2">
                Ficha: (pdf):{" "}
                <a
                  href={vehicleInfo.Ficha}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click aquí para ver el documento
                </a>
              </span>
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Vehicle;
