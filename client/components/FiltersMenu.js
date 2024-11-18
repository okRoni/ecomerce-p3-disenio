import { View, Text } from "react-native";
import { useState } from "react";
import TextInputWithLabel from "./TextInputWithLabel";
import BoolInputWithLabel from "./BoolInputWithLabel";
import ComboBoxWithLabel from "./ComboBoxWithLabel";
import NumberInputWithLabel from "./NumberInputWithLabel";

export default function FiltersMenu({ onFiltersChange }) {
  const [filters, setFilters] = useState({
    modelo: '',
    marca: '',
    año: '',
    precioMin: '',
    precioMax: '',
    largo: '',
    ancho: '',
    alto: '',
    negociable: false,
    recibeOtrosVehiculos: false,
    sensoresTraseros: false,
    sensoresDelanteros: false,
    camaraRetroceso: false,
    camara360: false,
    sensoresLaterales: false,
    vidriosElectricos: false,
    espejosElectricos: false,
    leasing: false,
    tablero: '',
    puertas: '',
    asientos: '',
    motor: '',
    transmision: '',
    tapizado: '',
    sonido: '',
    estado: '',
    transmisionTipo: ''
  });

  const handleChange = (name, value) => {
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  return (
    <View className="flex flex-col bg-white rounded-lg p-4">
      <Text className="text-lg font-bold text-indigo-900">Filtros</Text>
      <TextInputWithLabel label="Modelo" placeholder="Modelo del auto" name="modelo" value={filters.modelo} onChange={handleChange} />
      <TextInputWithLabel label="Marca" placeholder="Marca del auto" name="marca" value={filters.marca} onChange={handleChange} />
      <NumberInputWithLabel label="Año" placeholder="Año del auto" name="año" value={filters.año} onChange={handleChange}
        min={1900} max={new Date().getFullYear()}
      />
      <NumberInputWithLabel label="Precio mínimo" placeholder="100.000,00" name="precioMin" value={filters.precioMin} onChange={handleChange} 
        min={0} max={999999999}
      />
      <TextInputWithLabel label="Precio máximo" placeholder="999.000.000,00" name="precioMax" value={filters.precioMax} onChange={handleChange}
        min={0} max={999999999}
      />
      <NumberInputWithLabel label="Largo" placeholder="Largo en metros" name="largo" value={filters.largo} onChange={handleChange}
        min={0} max={999}
      />
      <TextInputWithLabel label="Ancho" placeholder="Ancho en metros" name="ancho" value={filters.ancho} onChange={handleChange}
        min={0} max={999}
      />
      <TextInputWithLabel label="Alto" placeholder="Alto en metros" name="alto" value={filters.alto} onChange={handleChange}
        min={0} max={999}
      />
      <View className="border-b-2 border-indigo-400 my-4"></View>
      <BoolInputWithLabel label="Negociable" name="negociable" value={filters.negociable} onChange={handleChange} />
      <BoolInputWithLabel label="Recibe otros vehículos" name="recibeOtrosVehiculos" value={filters.recibeOtrosVehiculos} onChange={handleChange} />
      <BoolInputWithLabel label="Sensores de proximidad traseros" name="sensoresTraseros" value={filters.sensoresTraseros} onChange={handleChange} />
      <BoolInputWithLabel label="Sensores de proximidad delanteros" name="sensoresDelanteros" value={filters.sensoresDelanteros} onChange={handleChange} />
      <BoolInputWithLabel label="Cámara de retroceso" name="camaraRetroceso" value={filters.camaraRetroceso} onChange={handleChange} />
      <BoolInputWithLabel label="Cámara 360" name="camara360" value={filters.camara360} onChange={handleChange} />
      <BoolInputWithLabel label="Sensores de proximidad lateral" name="sensoresLaterales" value={filters.sensoresLaterales} onChange={handleChange} />
      <BoolInputWithLabel label="Vidrios eléctricos" name="vidriosElectricos" value={filters.vidriosElectricos} onChange={handleChange} />
      <BoolInputWithLabel label="Espejos eléctricos" name="espejosElectricos" value={filters.espejosElectricos} onChange={handleChange} />
      <BoolInputWithLabel label="Asociado a un leasing" name="leasing" value={filters.leasing} onChange={handleChange} />
      <View className="border-b-2 border-indigo-400 my-4"></View>
      <ComboBoxWithLabel label="Tablero de mando" name="tablero" value={filters.tablero} onChange={handleChange} items={[
        { label: "Análogo", value: "Analágo" },
        { label: "Digital", value: "100% tactil" },
        { label: "Ambos", value: "ambos" }
      ]} />
      <ComboBoxWithLabel label="Cantidad de puertas" name="puertas" value={filters.puertas} onChange={handleChange} items={[
        { label: "2", value: "2" },
        { label: "4", value: "4" },
        { label: "5", value: "5" }
      ]} />
      <ComboBoxWithLabel label="Material de los asientos" name="asientos" value={filters.asientos} onChange={handleChange} items={[
        { label: "Tela", value: "tela" },
        { label: "Cuero", value: "cuero" }
      ]} />
      <ComboBoxWithLabel label="Motor" name="motor" value={filters.motor} onChange={handleChange} items={[
        { label: "Gasolina", value: "gasolina" },
        { label: "Diesel", value: "diesel" },
        { label: "Gas licuado", value: "gas licuado" },
        { label: "Eléctrico", value: "eléctrico" },
        { label: "Híbrido", value: "híbrido" }
      ]} />
      <ComboBoxWithLabel label="Transmisión" name="transmision" value={filters.transmision} onChange={handleChange} items={[
        { label: "Manual", value: "manual" },
        { label: "Automático", value: "automático" },
        { label: "Dual", value: "dual" }
      ]} />
      <ComboBoxWithLabel label="Tapizado" name="tapizado" value={filters.tapizado} onChange={handleChange} items={[
        { label: "Cuero", value: "cuero" },
        { label: "Plástico", value: "plástico" },
        { label: "Tela", value: "tela" }
      ]} />
      <ComboBoxWithLabel label="Sistema de sonido" name="sonido" value={filters.sonido} onChange={handleChange} items={[
        { label: "Estéreo 7.1", value: "estéreo 7.1" },
        { label: "Estándar", value: "estándar" }
      ]} />
      <ComboBoxWithLabel label="Estado del vehículo" name="estado" value={filters.estado} onChange={handleChange} items={[
        { label: "1", value: "1" },
        { label: "2", value: "2" },
        { label: "3", value: "3" },
        { label: "4", value: "4" },
        { label: "5", value: "5" }
      ]} />
      <ComboBoxWithLabel label="Transmisión sencilla o 4x4" name="transmisionTipo" value={filters.transmisionTipo} onChange={handleChange} items={[
        { label: "Sencilla", value: "sencilla" },
        { label: "4x4", value: "4x4" }
      ]} />
    </View>
  );
}