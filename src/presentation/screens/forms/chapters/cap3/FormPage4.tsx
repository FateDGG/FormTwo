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
import { subcategories16a } from '../../../../../utils/cap1/categoriesp16';
import { subcategories16b } from '../../../../../utils/cap1/categoriesp16';
import { subcategories16c } from '../../../../../utils/cap1/categoriesp16';
import { subcategories16d } from '../../../../../utils/cap1/categoriesp16';
import { subcategories16e } from '../../../../../utils/cap1/categoriesp16';
import { subcategories16f } from '../../../../../utils/cap1/categoriesp16';
import { subcategories16g } from '../../../../../utils/cap1/categoriesp16';
import { subcategories16h } from '../../../../../utils/cap1/categoriesp16';
import { DoubleDropdownSubcat } from '../../../../components/shared/DoubleDropdownSubcat';

export interface FormValues{
    P16a:FormTemplate
    P16b:FormTemplate
    P16c:FormTemplate
    P16d:FormTemplate
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
                        
                        <Text style={globalStyles.Title2}>P16.   Del siguiente listado, ¿Cuáles considera, desde su rol (como representante de la comunidad), que son las principales barreras de acceso a la justicia que se le presentan a los miembros de su comunidad? </Text>


                        <DoubleDropdownSubcat
                        questionTitle="P16.1. Culturales y linguísticas"
                        subcategoryTitle="Seleccione lo que aplica"
                        subcategories={subcategories16a}  // Cambia esta lista según la pregunta
                        selectedCategory={values.P16a.response[0].idoptresponse}
                        selectedSubcategories={values.P16a.response[0].responseuser || []}
                        onCategoryChange={(value) => setFieldValue('P16a.response[0].idoptresponse', value)}
                        onSubcategoryChange={(value) => setFieldValue('P16a.response[0].responseuser', value)}
                        onTextChange={(text) => setFieldValue('P16a.response[0].additionalText', text)} // Manejamos el texto del input
                        errors={errors.P16a?.response?.[0]}
                        touched={touched.P16a?.response?.[0]}
                        />
                            <ErrorMessage errors={errors} touched={touched} fieldName="P16a"/>
                        
                        <DoubleDropdownSubcat
                        questionTitle="P16.2. De género"
                        subcategoryTitle="Seleccione lo que aplica"
                        subcategories={subcategories16b}  // Cambia esta lista según la pregunta
                        selectedCategory={values.P16b.response[0].idoptresponse}
                        selectedSubcategories={values.P16b.response[0].responseuser || []}
                        onCategoryChange={(value) => setFieldValue('P16b.response[0].idoptresponse', value)}
                        onSubcategoryChange={(value) => setFieldValue('P16b.response[0].responseuser', value)}
                        onTextChange={(text) => setFieldValue('P16b.response[0].additionalText', text)} // Manejamos el texto del input
                        errors={errors.P16b?.response?.[0]}
                        touched={touched.P16b?.response?.[0]}
                        />
                            <ErrorMessage errors={errors} touched={touched} fieldName="P16b"/>
                            
                        <DoubleDropdownSubcat
                        questionTitle="P16.3. De seguridad, orden público o asociadas al conflicto armado"
                        subcategoryTitle="Seleccione lo que aplica"
                        subcategories={subcategories16c}  // Cambia esta lista según la pregunta
                        selectedCategory={values.P16c.response[0].idoptresponse}
                        selectedSubcategories={values.P16c.response[0].responseuser || []}
                        onCategoryChange={(value) => setFieldValue('P16c.response[0].idoptresponse', value)}
                        onSubcategoryChange={(value) => setFieldValue('P16c.response[0].responseuser', value)}
                        onTextChange={(text) => setFieldValue('P16c.response[0].additionalText', text)} // Manejamos el texto del input
                        errors={errors.P16b?.response?.[0]}
                        touched={touched.P16b?.response?.[0]}
                        />
                            <ErrorMessage errors={errors} touched={touched} fieldName="P16c"/>
                        
                        <DoubleDropdownSubcat
                        questionTitle="P16.4. Discapacidad"
                        subcategoryTitle="Seleccione lo que aplica"
                        subcategories={subcategories16d}  // Cambia esta lista según la pregunta
                        selectedCategory={values.P16d.response[0].idoptresponse}
                        selectedSubcategories={values.P16d.response[0].responseuser || []}
                        onCategoryChange={(value) => setFieldValue('P16d.response[0].idoptresponse', value)}
                        onSubcategoryChange={(value) => setFieldValue('P16d.response[0].responseuser', value)}
                        onTextChange={(text) => setFieldValue('P16c.response[0].additionalText', text)} // Manejamos el texto del input
                        errors={errors.P16d?.response?.[0]}
                        touched={touched.P16d?.response?.[0]}
                        />
                            <ErrorMessage errors={errors} touched={touched} fieldName="P16c"/>

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
