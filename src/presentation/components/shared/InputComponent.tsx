import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { globalStyles } from '../../theme/theme';

interface Props {
  textTitle: string;
  info: string;
  handleChange: (value: string) => void;  // Cambié aquí para que solo acepte el valor del input
  handleBlur: () => void;  // handleBlur no necesita un argumento aquí
  values: string | string[] | undefined;
}

export const InputComponent = ({ textTitle, info, handleBlur, handleChange, values }: Props) => {

  const stringValue = Array.isArray(values) ? values[0] || '' : values || '';
  
  return (
    <View>
      <Text style={globalStyles.questionTitle}>{textTitle}</Text>
      <TextInput
        onChangeText={(value) => {
          // Filtra números y solo deja letras y otros caracteres permitidos
          const onlyLetters = value.replace(/[0-9]/g, '');
          handleChange(onlyLetters);
        }}
        onBlur={handleBlur}
        value={stringValue}
        style={globalStyles.input}
        placeholder={info}
        placeholderTextColor="lightgray"
      />
    </View>
  );
};
