import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/layout";
import UpdateVehicleForm from "../../components/updvehicles";


function Vehicleupd() {
  const { id } = useParams();
  const { Placa } = useParams();
  console.log(id);

  const [vehicleInfo, setVehicleInfo] = useState({ Placa: ''});
  const [error, setError] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [serverResponse, setServerResponse] = useState(null);
  const [isEditing, setIsEditing] = useState({ Placa: false});


const handleInputChange = (e, fieldName) => {
  setVehicleInfo(prevVehicleInfo => ({ ...prevVehicleInfo, [fieldName]: e.target.value }));
};

const handleSaveClick = () => {
  setIsEditing(prevIsEditing => ({ ...prevIsEditing, Placa: false }));

  // Llama a la función onVehicleUpdate con el nuevo valor de vehicleInfo
  onVehicleUpdate(id, vehicleInfo);
};

  useEffect(() => {
    console.log('Server response:', serverResponse);
  }, [serverResponse]);

  {isEditing.Placa ? (
    <>
      <input type="text" value={vehicleInfo.Placa} onChange={e => handleInputChange(e, 'Placa')} />
      <button onClick={handleSaveClick}>Guardar</button>
    </>
  ) : (
    <>
      <span>Placa: {vehicleInfo.Placa}</span>
      <button onClick={() => setIsEditing(prevIsEditing => ({ ...prevIsEditing, Placa: true }))}>🖉</button>
    </>
  )}

  useEffect(() => {
    fetch(`https://appespetours.fly.dev/api/v1/vehicles/${id}`)
      .then((response) => {
        //console.log(response);
        if (!response.ok) {
          // La respuesta no fue exitosa, obtenemos el mensaje de error del cuerpo de la respuesta
          return response.json().then((err) => {
            throw new Error(err.message);
          });
        }
        return response.json();
      })
      .then((data) => {
        console.log("Respuesta de la API:", data);
        setVehicleInfo(data);
      })
      .catch((error) => {
        console.error("Error:", error);
        setError(error.message);
      });
  }, [id]);

  const onVehicleUpdate = (id, data) => {
    fetch(`https://appespetours.fly.dev/api/v1/vehicles/vehicleupdate/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((updatedVehicle) => {
        console.log('Vehicle updated:', updatedVehicle);
        //setVehicleInfo(updatedVehicle);
        setIsUpdating(false); // Cierra el formulario después de la actualización
        setServerResponse(updatedVehicle); // Guarda la respuesta del servidor en el estado
        console.log('Server response:', updatedVehicle); // Imprime la respuesta del servidor
      })
      .catch((error) => {
        console.error('Error:', error);
        setServerResponse(error.toString()); // Guarda el error en el estado si hay uno
      });
  };

  return (
    <Layout>
      <div>
        {error && <p>{error}</p>}
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
              {isEditing.Placa ? (
              <>
                <input type="text" value={vehicleInfo.Placa} onChange={e => handleInputChange(e, 'Placa')} />
                <button onClick={handleSaveClick}>Guardar</button>
              </>
            ) : (
              <>
                <span>Placa: {vehicleInfo.Placa}</span>
                <button onClick={() => setIsEditing(prevIsEditing => ({ ...prevIsEditing, Placa: true }))}>🖉</button>
              </>
            )}
              </span>
              <span className="font-light text-md mt-2">
              {isEditing.Interno ? (
              <input type="text" value={vehicleInfo.Interno} onChange={e => handleInputChange(e, 'Interno')} />
            ) : (
              <span>Interno: {vehicleInfo.Interno}</span>
            )}
            <button onClick={() => setIsEditing(prevIsEditing => ({ ...prevIsEditing, Interno: true }))}>🖉</button>
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
                Tarj.Operación: {vehicleInfo.Operacion}
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
            {!isUpdating ? (
              <button onClick={() => setIsUpdating(true)}>Actualizar</button>
            ) : (
              <UpdateVehicleForm vehicleId={id} onVehicleUpdate={onVehicleUpdate} />
            )}
          </div>
        )}
      </div>
      <div>
        {console.log('Rendering with server response:', serverResponse)}
        {serverResponse && <div>Response from server: {serverResponse.message}</div>}
      </div>
    </Layout>
  );
}

export default Vehicleupd;

