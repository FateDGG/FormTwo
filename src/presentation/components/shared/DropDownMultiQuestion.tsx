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

  // Definir títulos únicos para cada subpregunta (ahora hay 4)
  const questionTitles = [
    ' Frente a este problema ¿cuál es la acción que con más frecuencia adoptan los miembros de su comunidad?',
    '¿En qué zonas del municipio considera usted que se presenta este tipo de problema o conflicto?',
    'P22. Sobre este problema ¿es común que la jurisdicción ordinaria o la justicia estatal reclame competencia? ',
    'P23. ¿El problema se solucionó? ',
  ];

  // Ejemplo de opciones de respuesta diferentes para cada pregunta
  const getOptionsForQuestion = (questionIndex: number) => {
    switch (questionIndex) {
      case 0:
        return [
          { label: 'Acuden a la justicia propia de su comunidad', value: '175' },
          { label: 'Acuden a una institución, autoridad o persona particular ', value: '176' },
          { label: 'Intentó llegar a un acuerdo directamente con quien tuvo el problema  ', value: '177' },
          { label: 'Actuó de forma violenta  ', value: '178' },
          { label: 'Acudió a un actor ilegal ', value: '179' },
          { label: 'No hizo nada  ', value: '180' },
        ];
      case 1:
        return [
          { label: 'Urbano', value: '53' },
          { label: 'Rural', value: '54' },
          { label: 'Ambas', value: '55' },
        ];
      case 2:
        return [
          { label: 'Si', value: 'Si' },
          { label: 'No', value: 'No' },
        ];
      case 3:
        return [
          { label: 'Si', value: 'Si' },
          { label: 'No', value: 'No' },
        ];
      default:
        return [{ label: 'Opción por defecto', value: 'default' }];
    }
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
                <Text style={globalStyles.Title2}>Subpreguntas para {subcategory.label}</Text>
                {Array.from({ length: 4 }, (_, index) => (  // Ahora son 4 preguntas
                  <View key={index}>
                    {/* Título personalizado para cada subpregunta */}
                    <Text style={globalStyles.questionTitle}>
                      {questionTitles[index] || `Pregunta ${index + 1} para ${subcategory.label}`}
                    </Text>
                    <Picker
                      selectedValue={selectedSubQuestions[subcategory.value]?.[index] || ''}
                      onValueChange={(value: string) => onSubQuestionChange(index, subcategory.value, value)}
                    >
                      <Picker.Item label={`Seleccione una opción para`} value="" />
                      {/* Aquí llamamos a las opciones específicas de cada pregunta */}
                      {getOptionsForQuestion(index).map(option => (
                        <Picker.Item key={option.value} label={option.label} value={option.value} />
                      ))}
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
