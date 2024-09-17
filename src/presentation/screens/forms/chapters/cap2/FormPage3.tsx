import React, { useContext } from 'react';
import { View, Text, Button, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { Formik, FormikHelpers } from 'formik';
import { Prevcomponent } from '../../../../components/shared/PrevComponent';
import { NextComponent } from '../../../../components/shared/NextComponent';
import { globalStyles } from '../../../../theme/theme';
import { SurveyContext } from '../../../../../context/SurveyContext';
import { UseSaveData } from '../../../../hooks/UseSaveData';
import { useNavigation } from '@react-navigation/native'
import { InputComponent } from '../../../../components/shared/InputComponent';
import { ScrollView } from 'react-native-gesture-handler';
import { FormTemplate } from '../../../../../utils/FormInterfaces';
import { fileName } from '../../../../../utils/generateFilename';
import { getInitialValuesPage3 } from '../../../../../utils/initialValues';
import { ErrorMessage } from '../../../../components/shared/ErrorComponent';
import { DropDownComponent } from '../../../../components/shared/DropDownComponent';
import { DoubleDropdownInput } from '../../../../components/shared/DropDownInputComponent';
import { categories } from '../../../../../utils/cap1/categoriesPage3';

export interface FormValues{
    P13:FormTemplate
    P14:FormTemplate
    P15:FormTemplate
}


export const FormPage3 = () => {
    const navigation = useNavigation();
    const {saveAllData} = UseSaveData();
    const { surveyId } = useContext(SurveyContext);
    const finalSurveyId = surveyId ?? "defaultSurveyId";
    const initialValues: FormValues = getInitialValuesPage3();
    return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
        <ScrollView contentContainerStyle={globalStyles.FomsContainer}>
            <View style={globalStyles.CapTitle}>
                <Text style={globalStyles.Title}>Capítulo 2. Información De la Comunidad</Text>
            </View>

            <Formik
                initialValues={initialValues}
                onSubmit={ async(
                values: FormValues,
                {setSubmitting} : FormikHelpers<FormValues>
                ) => {
                try{
                    await saveAllData(`${fileName}.json`,values,finalSurveyId);
                }
                finally{
                    setSubmitting(false);
                    navigation.navigate('page2' as never)
                }}
                }>
                {({handleChange, handleBlur,handleSubmit,values, setFieldValue, setFieldTouched, errors, touched}) =>(
                    <View>
                        
                        
                        <DropDownComponent
                        values={values.P13.response[0].responseuser}
                        setFieldValue={(value) => setFieldValue('P13.response[0].responseuser[0]', value)}
                        qTitle='P13. De acuerdo con su cultura, pueblo o rasgos físicos... ¿cuál de las siguientes categorías enmarca su comunidad?:'
                        opValues={['Indígena', 'Gitano / ROM', 'Raizal del archipiélago de San Andrés y Providencia',
                            'Palenquero de San Basilio', 'Negro, mulato, afrodescendiente o afrocolombiano',
                            'Ninguno de los anteriores']}
                        />
                            <ErrorMessage errors={errors} touched={touched} fieldName="P13"/>

                        <DoubleDropdownInput
                        categoryTitle="P14. ¿Cual es el tamaño de su comunidad?"
                        subcategoryTitle="Ingrese una subcategoría:"
                        categories={categories}  // Asegúrate de definir `categories` como un array de objetos { label: string, value: string }
                        selectedCategory={values.P14.response[0].idoptresponse}
                        selectedSubcategory={values.P14.response[0].responseuser[0]}
                        onCategoryChange={(value) => setFieldValue('P14.response[0].idoptresponse', value)}
                        onSubcategoryChange={(value) => setFieldValue('P14.response[0].responseuser[0]', value)}
                        errors={errors.P14?.response?.[0]}
                        touched={touched.P14?.response?.[0]}
                        />
                            <ErrorMessage errors={errors} touched={touched} fieldName="P14" />
                        <DropDownComponent
                        values={values.P15.response[0].responseuser}
                        setFieldValue={(value) => setFieldValue('P15.response[0].responseuser[0]', value)}
                        qTitle='P15. ¿La comunidad a la que usted pertenece es?'
                        opValues={['Urbana', 'Rural', 'Ambas']}
                        />
                            <ErrorMessage errors={errors} touched={touched} fieldName="P15"/>
                    </View>
                )}
            </Formik>

            <View style={globalStyles.buttonsBanner}>
                <Prevcomponent onPrevPressed={() => navigation.navigate('page2' as never)}/>
                <NextComponent onNextPress={() => navigation.navigate('page4' as never)} />
            </View> 

        </ScrollView>
    </KeyboardAvoidingView>
  )
}
