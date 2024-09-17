import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { globalStyles } from '../../theme/theme';

interface DoubleDropdownInputProps {
  categoryTitle: string;
  subcategoryTitle: string;
  categories: { label: string; value: string }[];
  selectedCategory: string;
  selectedSubcategory: string;
  onCategoryChange: (value: string) => void;
  onSubcategoryChange: (value: string) => void;
  errors?: any;
  touched?: any;
}

export const DoubleDropdownInput = ({
  categoryTitle,
  subcategoryTitle,
  categories,
  selectedCategory,
  selectedSubcategory,
  onCategoryChange,
  onSubcategoryChange,
  errors,
  touched,
}: DoubleDropdownInputProps) => {
  const specificCategoryValue = '61'; // Cambia esto al valor específico que deseas

  return (
    <View>
      <Text style={globalStyles.questionTitle}>{categoryTitle}</Text>
      <View style={globalStyles.picker}>
        <Picker
          selectedValue={selectedCategory}
          onValueChange={(value) => {
            onCategoryChange(value);
            if (value !== specificCategoryValue) {
              onSubcategoryChange(''); // Reset text input when category changes and is not specificCategoryValue
            }
          }}
        >
          <Picker.Item label="Seleccione una opción" value="" />
          {categories.map((category) => (
            <Picker.Item key={category.value} label={category.label} value={category.value} />
          ))}
        </Picker>
        {errors?.category && touched?.category && (
          <Text style={{ color: 'red' }}>{errors.category}</Text>
        )}
      </View>
      {selectedCategory === specificCategoryValue && (
        <>
          <Text style={globalStyles.questionTitle}>{subcategoryTitle}</Text>
          <View style={globalStyles.picker}>
            <TextInput
              value={selectedSubcategory}
              onChangeText={(text) => onSubcategoryChange(text)}
              placeholder="Ingrese texto aquí"
              style={globalStyles.input} // Asegúrate de definir estilos para `textInput`
            />
            {errors?.subcategory && touched?.subcategory && (
              <Text style={{ color: 'red' }}>{errors.subcategory}</Text>
            )}
          </View>
        </>
      )}
    </View>
  );
};