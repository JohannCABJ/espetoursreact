import React, { useState } from 'react';

function UpdateVehicleForm({ vehicleId, onVehicleUpdate }) {
  const [Placa, setPlaca] = useState('');
/*   const [Tecno, setTecno] = useState('');
  const [Soat, setSoat] = useState(''); */
  // Agrega más estados aquí para los demás campos

  const handleSubmit = (event) => {
    event.preventDefault();
    onVehicleUpdate(vehicleId, { Placa,/*Tecno, Soat , y los demás campos aquí */ });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          InternoS:
          <input
            type="text"
            value={Placa}
            onChange={(e) => setPlaca(e.target.value)}
          />
        </label>
      </div>
{/*       <div>
        <label>
          Tecno:
          <input
            type="text"
            value={Tecno}
            onChange={(e) => setTecno(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Soat:
          <input
            type="text"
            value={Soat}
            onChange={(e) => setSoat(e.target.value)}
          />
        </label>
      </div> */}
      {/* Agrega más campos de entrada aquí para los demás campos */}
      <button type="submit">Update Vehicle</button>
    </form>
  );
}

export default UpdateVehicleForm;