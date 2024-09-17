import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { globalStyles } from '../../theme/theme';
import CheckBox from '@react-native-community/checkbox';

interface DoubleDropdownSubcatProps {
  questionTitle: string;
  subcategoryTitle: string;
  subcategories: { label: string; value: string }[]; // Subcategorías dinámicas como array de objetos con label y value
  selectedCategory: string; // Para controlar "Sí" o "No"
  selectedSubcategories: string[]; // Array para múltiples subcategorías seleccionadas
  onCategoryChange: (value: string) => void; // Maneja el cambio de categoría principal ("Sí" o "No")
  onSubcategoryChange: (values: string[]) => void; // Maneja las subcategorías seleccionadas
  onTextChange?: (text: string) => void; // Función para manejar el texto si se selecciona una subcategoría específica
  errors?: any;
  touched?: any;
}

export const DoubleDropdownSubcat = ({
  questionTitle,
  subcategoryTitle,
  subcategories, // Lista de subcategorías dinámicas
  selectedCategory, // "Sí" o "No"
  selectedSubcategories, // Subcategorías seleccionadas
  onCategoryChange,
  onSubcategoryChange, // Para manejar las selecciones de checkbox
  onTextChange, // Para manejar el input de texto si es necesario
  errors,
  touched,
}: DoubleDropdownSubcatProps) => {
  const specificSubcategoryValue = '61'; // Cambia esto al valor de la subcategoría específica que activará el campo de texto

  // Función para manejar la selección de múltiples checkboxes
  const handleCheckboxChange = (value: string) => {
    let newSelectedSubcategories = [...selectedSubcategories];
    if (newSelectedSubcategories.includes(value)) {
      // Si ya está seleccionado, lo eliminamos
      newSelectedSubcategories = newSelectedSubcategories.filter((item) => item !== value);
    } else {
      // Si no está seleccionado, lo añadimos
      newSelectedSubcategories.push(value);
    }
    onSubcategoryChange(newSelectedSubcategories); // Actualizamos la selección de subcategorías
  };

  return (
    <View>
      {/* Título de la pregunta */}
      <Text style={globalStyles.questionTitle}>{questionTitle}</Text>

      {/* Dropdown de "Sí" o "No" */}
      <View style={globalStyles.picker}>
        <Picker
          selectedValue={selectedCategory}
          onValueChange={(value) => onCategoryChange(value)}
        >
          <Picker.Item label="Seleccione una opción" value="" />
          <Picker.Item label="Sí" value="yes" />
          <Picker.Item label="No" value="no" />
        </Picker>
        {errors?.category && touched?.category && (
          <Text style={{ color: 'red' }}>{errors.category}</Text>
        )}
      </View>

      {/* Si se selecciona "Sí", mostramos las subcategorías con checkboxes */}
      {selectedCategory === 'yes' && (
        <>
          <Text style={globalStyles.questionTitle}>{subcategoryTitle}</Text>
          {subcategories.map((subcategory) => (
            <View key={subcategory.value} style={globalStyles.checkboxContainer}>
              <CheckBox
                value={selectedSubcategories.includes(subcategory.value)} // Checkbox checked si está en las seleccionadas
                onValueChange={() => handleCheckboxChange(subcategory.value)}
              />
              <Text>{subcategory.label}</Text>
            </View>
          ))}
          {errors?.subcategory && touched?.subcategory && (
            <Text style={{ color: 'red' }}>{errors.subcategory}</Text>
          )}

          {/* Mostrar campo de texto si se selecciona una subcategoría específica */}
          {selectedSubcategories.includes(specificSubcategoryValue) && (
            <View style={globalStyles.picker}>
              <TextInput
                onChangeText={onTextChange}
                placeholder="Especifica tu respuesta"
                style={globalStyles.input} // Asegúrate de definir estilos para `textInput`
              />
            </View>
          )}
        </>
      )}
    </View>
  );
};
