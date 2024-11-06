import React, { useContext } from 'react';
import { KeyboardAvoidingView, Platform, Text, View, TextInput } from 'react-native';
import { globalStyles } from '../../../../theme/theme';
import { ScrollView } from 'react-native-gesture-handler';
import { NextComponent } from '../../../../components/shared/NextComponent';
import { useNavigation } from '@react-navigation/native';
import { SurveyContext } from '../../../../../context/SurveyContext';

export const InstructionsPage = () => {
  const navigation = useNavigation();
  const { surveyId } = useContext(SurveyContext);
  const finalSurveyId = surveyId ?? "defaultSurveyId";  // Si no hay surveyId, usa el valor por defecto

  const instructionsHeaderStyle = {
    backgroundColor: '#f0f0f0',
    padding: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  };

  const instructionsContentStyle = {
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#D3D3D3',
    color: 'black',
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={globalStyles.FomsContainer}>
        <View style={globalStyles.CapTitle}>
          <Text style={globalStyles.Title}>ENCUESTA DE NECESIDADES JURÍDICAS - COMUNIDADES ÉTNICAS</Text>
        </View>
        
        {/* Número de Encuesta */}
        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>Número de Encuesta:</Text>
          <TextInput
            value={finalSurveyId}  // Usamos finalSurveyId que viene del contexto
            editable={false}        // No editable
            style={globalStyles.input}
          />
        </View>

        {/* Instrucciones */}
        <View style={instructionsHeaderStyle}>
          <Text style={{ fontSize: 16 }}>Instrucciones generales para el/la encuestador/a</Text>
        </View>
        <View style={instructionsContentStyle}>
          <Text>- Las instrucciones que estén en letra cursiva son para el encuestador. NO se deben leer al entrevistado.</Text>
          <Text>- Si se imprime el cuestionario, se debe utilizar hojas tamaño oficio, verificando que los cortes de página sean iguales al formato original.</Text>
          <Text>- Antes de aplicar el cuestionario es necesario leer todas las instrucciones que se encuentran en el instructivo de diligenciamiento.</Text>
        </View>
        <View style={instructionsContentStyle}>
          <Text>El Ministerio de Justicia y del Derecho viene adelantando la asistencia técnica a distintos actores de la sociedad para promover la implementación, funcionamiento y sostenibilidad de la estrategia Sistemas Locales de Justicia a nivel municipal. El objetivo de esta encuesta es contribuir a la lectura del territorio a través de la identificación de los problemas que afectan particularmente a las comunidades étnicas del municipio a través de la experiencia de sus representantes.</Text>
          <Text>Por lo anterior, solicitamos su valiosa colaboración contestando la siguiente encuesta. La información que usted nos suministre será utilizada únicamente con fines estadísticos y sus resultados se mostrarán de manera agregada en el documento denominado: “Lectura territorial y diagnóstico de conflictividades”, insumo fundamental para la construcción del plan estratégico del Sistema Local de Justicia del municipio (SLJ).</Text>

          <Text>El análisis de estos resultados nos llevará a formular acciones para el fortalecimiento del acceso a la justicia en cada territorio, de ahí la importancia que el diligenciamiento de esta encuesta sea realizado por el Gobernador, Gobernador de Gobernadores, Líder/delegado del Consejo Comunitario o Delegado para asuntos étnicos de la comunidad, labor que no se puede delegar, toda vez que las preguntas van orientadas a las características, competencias y funciones del cargo que se desempeña en cada caso.</Text>

          <Text>Agradecemos de antemano su colaboración.</Text>
        </View>

        {/* Botón para navegar a page1 */}
        <View style={{ marginTop: 20, alignItems: 'center' }}>
          <NextComponent onNextPress={() => navigation.navigate('page1' as never)} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
