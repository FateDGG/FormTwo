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

export const EmailInputComponent = ({ textTitle, info, handleBlur, handleChange, values }: Props) => {

  const stringValue = Array.isArray(values) ? values[0] || '' : values || '';
  
  return (
    <View>
      <Text style={globalStyles.questionTitle}>{textTitle}</Text>
      <TextInput
        onChangeText={(value) => {
          // Filtra los espacios y solo deja los caracteres permitidos
          const noSpaces = value.replace(/\s/g, '');
          handleChange(noSpaces);
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
