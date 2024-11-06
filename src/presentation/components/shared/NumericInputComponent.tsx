import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { globalStyles } from '../../theme/theme';

interface Props {
  textTitle: string;
  info: string;
  handleChange: (value: string) => void;
  handleBlur: () => void;
  values: string | string[] | undefined;
}

export const NumericInputComponent = ({ textTitle, info, handleBlur, handleChange, values }: Props) => {

  const stringValue = Array.isArray(values) ? values[0] || '' : values || '';
  
  return (
    <View>
      <Text style={globalStyles.questionTitle}>{textTitle}</Text>
      <TextInput
        onChangeText={(text) => {
          // Filtra cualquier carácter que no sea número
          const onlyNumbers = text.replace(/[^0-9]/g, '');
          handleChange(onlyNumbers);
        }}
        onBlur={handleBlur} 
        value={stringValue}  
        style={globalStyles.input}
        placeholder={info}
        placeholderTextColor="lightgray"
        keyboardType="numeric"
      />
    </View>
  );
};
