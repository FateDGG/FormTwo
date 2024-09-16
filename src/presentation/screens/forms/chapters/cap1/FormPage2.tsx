import React, { useContext } from 'react';
import { View, Text, Button, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { Formik, FormikHelpers } from 'formik';
import { DoubleDropdown } from '../../../../components/shared/DoubleDropComponent';
import { Prevcomponent } from '../../../../components/shared/PrevComponent';
import { NextComponent } from '../../../../components/shared/NextComponent';
import { globalStyles } from '../../../../theme/theme';
import { DropDownComponent } from '../../../../components/shared/DropDownComponent';
import { SurveyContext } from '../../../../../context/SurveyContext';
import { UseSaveData } from '../../../../hooks/UseSaveData';
import { useNavigation } from '@react-navigation/native'
import { InputComponent } from '../../../../components/shared/InputComponent';
import { ScrollView } from 'react-native-gesture-handler';
import { FormTemplate } from '../../../../../utils/FormInterfaces';
import { getInitialValuesPage2 } from '../../../../../utils/initialValues';
import { categories } from '../../../../../utils/cap1/categoriesPage2';
import { subcategories } from '../../../../../utils/cap1/categoriesPage2';
import { fileName } from '../../../../../utils/generateFilename';
import { validationSchemaPage2 } from '../../../../../utils/cap1/validationSchemas';
import { ErrorMessage } from '../../../../components/shared/ErrorComponent';
import { ErrorIdMessage } from '../../../../components/shared/ErrorIdComponent';

export interface FormValues {
  P7: FormTemplate;
  P8: FormTemplate;
  P9: FormTemplate;
  P10: FormTemplate;
  P11: FormTemplate;
  P12: FormTemplate;
  P13: FormTemplate;
}


export const FormPage2 = () => {

  const { surveyId } = useContext(SurveyContext);
  const { saveAllData } = UseSaveData();
  const finalSurveyId = surveyId ?? "defaultSurveyId";
  const navigation = useNavigation();
  const initialValues: FormValues = getInitialValuesPage2();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={globalStyles.FomsContainer}>
      <Formik
            initialValues={initialValues}
            validationSchema={validationSchemaPage2}
            onSubmit={async (
              values: FormValues,
              { setSubmitting }: FormikHelpers<FormValues>
            ) => {
              try {
                await saveAllData(`${fileName}.json`, values, finalSurveyId);
              }
              finally {
                setSubmitting(false);
                navigation.navigate('page3' as never)
              }
            }}>

            {({ handleSubmit, setFieldValue, values, setFieldTouched, errors, touched }) => (
              <View>
                <InputComponent
                  info='P7'
                  textTitle='P7.Nombre municipio:'
                  handleChange={(value: string) => setFieldValue('P7.response[0].responseuser[0]', value)}
                  handleBlur={() => setFieldTouched('P7.response[0].responseuser[0]')}
                  values={values.P7.response[0].responseuser}
                />
                  <ErrorMessage errors={errors} touched={touched} fieldName="P7"/>
                <InputComponent
                  info='P8'
                  textTitle='P8. Código municipio:'
                  handleChange={(value: string) => setFieldValue('P8.response[0].responseuser[0]', value)}
                  handleBlur={() => setFieldTouched('P8.response[0].responseuser[0]')}
                  values={values.P8.response[0].responseuser}
                />
                  <ErrorMessage errors={errors} touched={touched} fieldName="P8"/>

                <DoubleDropdown
                categoryTitle="P9. ¿Qué tipo de actor / operador de justicia usted representa?"
                subcategoryTitle="Seleccione una subcategoría:"
                categories={categories}
                subcategories={subcategories}
                selectedCategory={values.P9.response[0].idoptresponse}
                selectedSubcategory={values.P9.response[0].responseuser[0]}
                onCategoryChange={(value) => setFieldValue('P9.response[0].idoptresponse', value)}
                onSubcategoryChange={(value) => setFieldValue('P9.response[0].responseuser[0]', value)}
                errors={errors.P9?.response?.[0]}
                touched={touched.P9?.response?.[0]}
                />
                  <ErrorIdMessage errors={errors} touched={touched} fieldName="P9"/>
                  <ErrorMessage errors={errors} touched={touched} fieldName="P9"/>

                <DropDownComponent
                  values={values.P10.response[0].responseuser}
                  setFieldValue={(value) => setFieldValue('P10.response[0].responseuser[0]', value)}
                  qTitle='P10. ¿Nos autoriza a realizarle la encuesta?'
                  opValues={['Si', 'No',]}
                />
                  <ErrorMessage errors={errors} touched={touched} fieldName="P10"/>

                <DropDownComponent
                  values={values.P11.response[0].responseuser}
                  setFieldValue={(value) => setFieldValue('P11.response[0].responseuser[0]', value)}
                  qTitle='P11. Señale su rango de edad'
                  opValues={['Entre 18 a 25 años', 'Entre 26 a 35 años', 'Entre 36 a 45 años',
                    'Entre 46 a 55 años', 'Mayor de 56 años']}
                />
                  <ErrorMessage errors={errors} touched={touched} fieldName="P11"/>
                <DropDownComponent
                  values={values.P12.response[0].responseuser}
                  setFieldValue={(value) => setFieldValue('P12.response[0].responseuser[0]', value)}
                  qTitle='P12. De acuerdo con su cultura, pueblo o rasgos físicos... usted se reconoce como:'
                  opValues={['Indígena', 'Gitano / ROM', 'Raizal del archipiélago de San Andrés y Providencia',
                    'Palenquero de San Basilio', 'Negro, mulato, afrodescendiente o afrocolombiano',
                    'Ninguno de los anteriores']}
                />
                  <ErrorMessage errors={errors} touched={touched} fieldName="P12"/>
                <DropDownComponent
                  values={values.P13.response[0].responseuser}
                  setFieldValue={(value) => setFieldValue('P13.response[0].responseuser[0]', value)}
                  qTitle='P13. ¿Cuál es su nivel educativo más alto alcanzado?'
                  opValues={['Ninguno', 'Preescolar', 'Básica primaria (1-5)',
                    'Básica secundaria (6-9)', 'Media (10-13)', 'Técnico', 'Profesional',
                    'Especialista', 'Magister', 'Doctorado', 'No sabe / No informa']}
                />
                  <ErrorMessage errors={errors} touched={touched} fieldName="P13"/>
                <View style={globalStyles.buttonsBanner}>
                  <Prevcomponent onPrevPressed={() => navigation.navigate('page1' as never)}/>
                  <NextComponent onNextPress={handleSubmit} />
                </View>
              </View>
            )}
          </Formik>
    </ScrollView>
    </KeyboardAvoidingView>
  );
};