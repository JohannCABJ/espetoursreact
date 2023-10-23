import { useContext } from "react";
import { Link } from "react-router-dom";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";

import { ShoppingCartContext } from "../../context";
import "./styles.css";

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);
  const shareVehicleInfo = () => {
    const vehiculo = context.productToShow; // Obtén la placa del vehículo
    console.log(vehiculo._id);
    if (vehiculo && vehiculo._id) {
      const url = `./vehicle/${encodeURIComponent(vehiculo._id)}`;

      window.location.href = url;
      console.log(url);
      <Link to={url}>Ver Detalles del Vehículo</Link>;
    } else {
      console.error("El ID del vehículo no está definido o es inválido.");
    }
  };

  return (
    <aside
      className={`${
        context.isProductDetailOpen ? "flex" : "hidden"
      } product-detail scrollable-cards flex-col fixed right-0 border border-black rounded-lg bg-white w-full lg:w-1/3 xl:w-1/4`}
    >
      <div className="overflow-y-auto max-h-[80vh]">
        <div className="flex justify-between items-center p-6">
          <h2 className="font-medium text-xl">Detail</h2>
          <div>
            <ChevronDoubleDownIcon
              className="h-6 w-6 text-blue-500"
              onClick={() => context.closeProductDetail()}
            />
          </div>
        </div>
        <figure className="px-6">
          <img
            className="w-full h-full rounded-lg"
            src={context.productToShow.Image}
            alt={context.productToShow.Placa}
          />
        </figure>
        <p className="flex flex-col p-6">
          <span className="font-medium text-2xl mb-2">
            {context.productToShow.Placa}
          </span>
          <span className="font-medium text-md">
            Interno: {context.productToShow.Interno}
          </span>
          <span className="font-light text-md">
            Modelo: {context.productToShow.Modelo}
          </span>
          <span className="font-light text-md">
            Marca: {context.productToShow.Marca}
          </span>
          <span className="font-light text-md">
            Clase: {context.productToShow.Clase}
          </span>
          <span className="font-light text-md">
            Linea: {context.productToShow.Linea}
          </span>
          <span className="font-light text-md">
            Color: {context.productToShow.Color}
          </span>
          <span className="font-light text-md">
            Serie: {context.productToShow.Serie}
          </span>
          <span className="font-light text-md">
            Chasis: {context.productToShow.Chasis}
          </span>
          <span className="font-light text-md">
            Motor: {context.productToShow.Motor}
          </span>
          <span className="font-light text-md">
            Carroceria: {context.productToShow.Carroceria}
          </span>
          <span className="font-light text-md">
            No.Pasajeros {context.productToShow.Capacidad}
          </span>
          <span className="font-light text-md">
            No. Licencia Tránsito: {context.productToShow.LicTransito}
          </span>
          <span className="font-light text-md">
            No.Tarjeta Operación: {context.productToShow.TarjetaOp}
          </span>
          <span className="font-light text-md">
            Tecnomecánica: {context.productToShow.Tecno}
          </span>
          <span className="font-light text-md">
            SOAT: {context.productToShow.Soat}
          </span>
          <span className="font-light text-md">
            Tarjeta operacion: {context.productToShow.Operacion}
          </span>
          <span className="font-light text-md">
            Poliza Contractual: {context.productToShow.Contractual}
          </span>
          <span className="font-light text-md">
            Poliza Extracontractual: {context.productToShow.Extracontractual}
          </span>
          <span className="font-light text-md">
            Mantenimiento preventivo: {context.productToShow.MttoPrev}
          </span>
          <span className="font-light text-md">
            Ultimo cambio aceite: {context.productToShow.UltimoKmAceite}
          </span>
          <span className="font-light text-md">
            Km.Actual: {context.productToShow.KmActual}
          </span>
          <span className="font-light text-md">
            Tipo Capacidad: {context.productToShow.TipoCapacidad}
          </span>
          <span className="font-light text-md">
            Estado: {context.productToShow.Estado}
          </span>
          <span className="font-light text-md">
            Convenio Colaboración: {context.productToShow.Convenio}
          </span>
          <span className="font-light text-md">
            Propietario: {context.productToShow.Propietario}
          </span>
          <span className="font-light text-md">
            Id Propietario: {context.productToShow.IdPropietario}
          </span>
          <span className="font-light text-md">
            Dir.Propietario: {context.productToShow.DirPropietario}
          </span>
          <span className="font-light text-md">
            Correo: {context.productToShow.Correo}
          </span>
          <span className="font-light text-md">
            Teléfono: {context.productToShow.Tel}
          </span>
        </p>
        <div className="flex items-center justify-center">
          <button
            className="share-button bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg shadow-md"
            onClick={shareVehicleInfo}
          >
            Generar enlace
          </button>
        </div>
      </div>
    </aside>
  );
};

export default ProductDetail;
