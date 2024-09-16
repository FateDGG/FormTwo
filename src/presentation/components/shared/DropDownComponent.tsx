import React from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { globalStyles } from '../../theme/theme';

interface DropDownProps {
  values: string[]; 
  setFieldValue: (value: string) => void; 
  qTitle: string;
  opValues: string[];
}

export const DropDownComponent = ({ values, setFieldValue, qTitle, opValues }: DropDownProps) => {
  return (
    <View>
      <Text style={globalStyles.questionTitle}>{qTitle}</Text>
      <View style={globalStyles.picker}>
        <Picker
          selectedValue={values[0]}  
          onValueChange={(value) => setFieldValue(value)}  
        >
          <Picker.Item label="Seleccione una opción" value="" />
          {opValues.map((option, index) => (
            <Picker.Item label={option} value={option} key={index} />
          ))}
        </Picker>
      </View>
    </View>
  );
};