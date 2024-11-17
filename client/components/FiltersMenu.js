import { View, Text, TextInput } from "react-native";
import TextInputWithLabel from "./TextInputWithLabel";
import BoolInputWithLabel from "./BoolInputWithLabel";
import ComboBoxWithLabel from "./ComboBoxWithLabel";

export default function FiltersMenu() {
  return (
    <View className="flex flex-col bg-white rounded-lg p-4">
      <Text className="text-lg font-bold text-indigo-900">Filtros</Text>
      <TextInputWithLabel label="Modelo" placeholder="Modelo del auto" />
      <TextInputWithLabel label="Marca" placeholder="Marca del auto" />
      <TextInputWithLabel label="Año" placeholder="Año del auto" />
      <TextInputWithLabel label="Precio mínimo" placeholder="100.000,00" />
      <TextInputWithLabel label="Precio máximo" placeholder="999.000.000,00" />
      <TextInputWithLabel label="Largo" placeholder="Largo en metros" />
      <TextInputWithLabel label="Ancho" placeholder="Ancho en metros" />
      <TextInputWithLabel label="Alto" placeholder="Alto en metros" />
      <View className="border-b-2 border-indigo-400 my-4"></View>
      <BoolInputWithLabel label="Usado" />
      <BoolInputWithLabel label="Negociable" />
      <BoolInputWithLabel label="Recibe otros vehículos" />
      <BoolInputWithLabel label="Sensores de proximidad traseros" />
      <BoolInputWithLabel label="Sensores de proximidad delanteros" />
      <BoolInputWithLabel label="Cámara de retroceso" />
      <BoolInputWithLabel label="Cámara 360" />
      <BoolInputWithLabel label="Sensores de proximidad lateral" />
      <BoolInputWithLabel label="Vidrios eléctricos" />
      <BoolInputWithLabel label="Espejos eléctricos" />
      <BoolInputWithLabel label="Asociado a un leasing" />
      <View className="border-b-2 border-indigo-400 my-4"></View>
      <ComboBoxWithLabel label="Tablero de mando" items={[
        { label: "Análogo", value: "análogo" },
        { label: "Digital", value: "100% táctil" },
        { label: "Ambos", value: "ambos" }
      ]} />
      <ComboBoxWithLabel label="Cantidad de puertas" items={[
        { label: "2", value: "2" },
        { label: "4", value: "4" },
        { label: "5", value: "5" }
      ]} />
      <ComboBoxWithLabel label="Material de los asientos" items={[
        { label: "Tela", value: "tela" },
        { label: "Cuero", value: "cuero" }
      ]} />
      <ComboBoxWithLabel label="Motor" items={[
        { label: "Gasolina", value: "gasolina" },
        { label: "Diesel", value: "diesel" },
        { label: "Gas licuado", value: "gas licuado" },
        { label: "Eléctrico", value: "eléctrico" },
        { label: "Híbrido", value: "híbrido" }
      ]} />
      <ComboBoxWithLabel label="Transmisión" items={[
        { label: "Manual", value: "manual" },
        { label: "Automático", value: "automático" },
        { label: "Dual", value: "dual" }
      ]} />
      <ComboBoxWithLabel label="Tapizado" items={[
        { label: "Cuero", value: "cuero" },
        { label: "Plástico", value: "plástico" },
        { label: "Tela", value: "tela" }
      ]} />
      <ComboBoxWithLabel label="Sistema de sonido" items={[
        { label: "Estéreo 7.1", value: "estéreo 7.1" },
        { label: "Estándar", value: "estándar" }
      ]} />
      <ComboBoxWithLabel label="Estado del vehículo" items={[
        { label: "1", value: "1" },
        { label: "2", value: "2" },
        { label: "3", value: "3" },
        { label: "4", value: "4" },
        { label: "5", value: "5" }
      ]} />
      <ComboBoxWithLabel label="Transmisión sencilla o 4x4" items={[
        { label: "Sencilla", value: "sencilla" },
        { label: "4x4", value: "4x4" }
      ]} />
    </View>
  );
}