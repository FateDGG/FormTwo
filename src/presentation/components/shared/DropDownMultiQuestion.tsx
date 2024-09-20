import React from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import CheckBox from '@react-native-community/checkbox';
import { globalStyles } from '../../theme/theme';

interface DropDownMultiQuestionProps {
  questionTitle: string;
  subcategoryTitle: string;
  subcategories: { label: string; value: string }[];
  selectedCategory: string;
  selectedSubcategories: string[];
  onCategoryChange: (value: string) => void;
  onSubcategoryChange: (values: string[]) => void;
  onSubQuestionChange: (index: number, subcategoryValue: string, value: string) => void;
  selectedSubQuestions: { [key: string]: string[] }; // Clave por valor de subcategoría
  errors?: any;
  touched?: any;
}

export const DropDownMultiQuestion = ({
  questionTitle,
  subcategoryTitle,
  subcategories,
  selectedCategory,
  selectedSubcategories,
  onCategoryChange,
  onSubcategoryChange,
  onSubQuestionChange,
  selectedSubQuestions,
  errors,
  touched,
}: DropDownMultiQuestionProps) => {
  
  const handleCheckboxChange = (value: string) => {
    const newSelectedSubcategories = selectedSubcategories.includes(value)
      ? selectedSubcategories.filter(item => item !== value)
      : [...selectedSubcategories, value];

    onSubcategoryChange(newSelectedSubcategories);
  };

  return (
    <View>
      <Text style={globalStyles.questionTitle}>{questionTitle}</Text>
      <View style={globalStyles.picker}>
        <Picker
          selectedValue={selectedCategory}
          onValueChange={(value) => onCategoryChange(value)}
        >
          <Picker.Item label="Seleccione una opción" value="" />
          <Picker.Item label="Sí" value="yes" />
          <Picker.Item label="No" value="no" />
        </Picker>
      </View>
      {errors?.category && touched?.category && <Text style={{ color: 'red' }}>{errors.category}</Text>}

      {selectedCategory === 'yes' && (
        <>
          <Text style={globalStyles.questionTitle}>{subcategoryTitle}</Text>
          {subcategories.map((subcategory) => (
            <View key={subcategory.value} style={globalStyles.checkboxContainer}>
              <CheckBox
                value={selectedSubcategories.includes(subcategory.value)}
                onValueChange={() => handleCheckboxChange(subcategory.value)}
              />
              <Text>{subcategory.label}</Text>
            </View>
          ))}
          {errors?.subcategory && touched?.subcategory && <Text style={{ color: 'red' }}>{errors.subcategory}</Text>}

          {subcategories.map((subcategory) => (
            selectedSubcategories.includes(subcategory.value) && (
              <View key={subcategory.value}>
                <Text style={globalStyles.questionTitle}>Subpreguntas para {subcategory.label}</Text>
                {Array.from({ length: 3 }, (_, index) => (
                  <View key={index}>
                    <Picker
                      selectedValue={selectedSubQuestions[subcategory.value]?.[index] || ''}
                      onValueChange={(value: string) => onSubQuestionChange(index, subcategory.value, value)}
                    >
                      <Picker.Item label={`Seleccione una opción para ${subcategory.label} - Pregunta ${index + 1}`} value="" />
                      <Picker.Item label="Opción 1" value="option1" />
                      <Picker.Item label="Opción 2" value="option2" />
                    </Picker>
                  </View>
                ))}
              </View>
            )
          ))}
        </>
      )}
    </View>
  );
};
