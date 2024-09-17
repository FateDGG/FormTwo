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
import { getInitialValuesPage3, getInitialValuesPage4 } from '../../../../../utils/initialValues';
import { ErrorMessage } from '../../../../components/shared/ErrorComponent';
import { DropDownComponent } from '../../../../components/shared/DropDownComponent';
import { DoubleDropdownInput } from '../../../../components/shared/DropDownInputComponent';
import { subcategories16a } from '../../../../../utils/cap1/categoriesp16a';
import { DoubleDropdownSubcat } from '../../../../components/shared/DoubleDropdownSubcat';

export interface FormValues{
    P16a:FormTemplate
    P17:FormTemplate
}


export const FormPage4 = () => {
    const navigation = useNavigation();
    const {saveAllData} = UseSaveData();
    const { surveyId } = useContext(SurveyContext);
    const finalSurveyId = surveyId ?? "defaultSurveyId";
    const initialValues: FormValues = getInitialValuesPage4();
    return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
        <ScrollView contentContainerStyle={globalStyles.FomsContainer}>
            <View style={globalStyles.CapTitle}>
                <Text style={globalStyles.Title}>Capítulo 3. Barreras de acceso a la justicia</Text>
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
                        
                        <Text style={globalStyles.Title}>P16.   Del siguiente listado, ¿Cuáles considera, desde su rol (como representante de la comunidad), que son las principales barreras de acceso a la justicia que se le presentan a los miembros de su comunidad? </Text>


                        <DoubleDropdownSubcat
                        questionTitle="P16.1 Culturales y linguísticas"
                        subcategoryTitle="Seleccione las subcategorías:"
                        subcategories={subcategories16a}  // Cambia esta lista según la pregunta
                        selectedCategory={values.P16a.response[0].idoptresponse}
                        selectedSubcategories={values.P16a.response[0].responseuser || []}
                        onCategoryChange={(value) => setFieldValue('P16a.response[0].idoptresponse', value)}
                        onSubcategoryChange={(value) => setFieldValue('P16a.response[0].responseuser', value)}
                        onTextChange={(text) => setFieldValue('P16a.response[0].additionalText', text)} // Manejamos el texto del input
                        errors={errors.P16a?.response?.[0]}
                        touched={touched.P16a?.response?.[0]}
                        />

                        {/* <DropDownComponent
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
                            <ErrorMessage errors={errors} touched={touched} fieldName="P15"/> */}
                        

                    </View>
                )}
            </Formik>

            <View style={globalStyles.buttonsBanner}>
                <Prevcomponent onPrevPressed={() => navigation.navigate('page3' as never)}/>
                <NextComponent onNextPress={() => navigation.navigate('page5' as never)} />
            </View> 

        </ScrollView>
    </KeyboardAvoidingView>
  )
}
