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
import { subcategories16e } from '../../../../../utils/cap1/categoriesp16';
import { subcategories16f } from '../../../../../utils/cap1/categoriesp16';
import { subcategories16g } from '../../../../../utils/cap1/categoriesp16';
import { subcategories16h } from '../../../../../utils/cap1/categoriesp16';
import { DoubleDropdownSubcat } from '../../../../components/shared/DoubleDropdownSubcat';

export interface FormValues{
    P16e:FormTemplate
    P16f:FormTemplate
    P16g:FormTemplate
    P16h:FormTemplate

}


export const FormPage5 = () => {
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
            {/* <View style={globalStyles.CapTitle}>
                <Text style={globalStyles.Title}>Capítulo 3. Barreras de acceso a la justicia</Text>
            </View> */}

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
                        questionTitle="P16.5. Económicas"
                        subcategoryTitle="Seleccione lo que aplica"
                        subcategories={subcategories16e}  // Cambia esta lista según la pregunta
                        selectedCategory={values.P16e.response[0].idoptresponse}
                        selectedSubcategories={values.P16e.response[0].responseuser || []}
                        onCategoryChange={(value) => setFieldValue('P16e.response[0].idoptresponse', value)}
                        onSubcategoryChange={(value) => setFieldValue('P16e.response[0].responseuser', value)}
                        onTextChange={(text) => setFieldValue('P16e.response[0].additionalText', text)} // Manejamos el texto del input
                        errors={errors.P16e?.response?.[0]}
                        touched={touched.P16e?.response?.[0]}
                        />
                            <ErrorMessage errors={errors} touched={touched} fieldName="P16e"/>
                        
                        <DoubleDropdownSubcat
                        questionTitle="P16.6. Geográficas"
                        subcategoryTitle="Seleccione lo que aplica"
                        subcategories={subcategories16f}  // Cambia esta lista según la pregunta
                        selectedCategory={values.P16f.response[0].idoptresponse}
                        selectedSubcategories={values.P16f.response[0].responseuser || []}
                        onCategoryChange={(value) => setFieldValue('P16f.response[0].idoptresponse', value)}
                        onSubcategoryChange={(value) => setFieldValue('P16f.response[0].responseuser', value)}
                        onTextChange={(text) => setFieldValue('P16f.response[0].additionalText', text)} // Manejamos el texto del input
                        errors={errors.P16f?.response?.[0]}
                        touched={touched.P16f?.response?.[0]}
                        />
                            <ErrorMessage errors={errors} touched={touched} fieldName="P16f"/>
                            
                        <DoubleDropdownSubcat
                        questionTitle="P16.7. Institucionales"
                        subcategoryTitle="Seleccione lo que aplica"
                        subcategories={subcategories16g}  // Cambia esta lista según la pregunta
                        selectedCategory={values.P16g.response[0].idoptresponse}
                        selectedSubcategories={values.P16g.response[0].responseuser || []}
                        onCategoryChange={(value) => setFieldValue('P16g.response[0].idoptresponse', value)}
                        onSubcategoryChange={(value) => setFieldValue('P16g.response[0].responseuser', value)}
                        onTextChange={(text) => setFieldValue('P16g.response[0].additionalText', text)} // Manejamos el texto del input
                        errors={errors.P16f?.response?.[0]}
                        touched={touched.P16f?.response?.[0]}
                        />
                            <ErrorMessage errors={errors} touched={touched} fieldName="P16g"/>
                        
                        <DoubleDropdownSubcat
                        questionTitle="P16.8. Tecnológicas"
                        subcategoryTitle="Seleccione lo que aplica"
                        subcategories={subcategories16h}  // Cambia esta lista según la pregunta
                        selectedCategory={values.P16h.response[0].idoptresponse}
                        selectedSubcategories={values.P16h.response[0].responseuser || []}
                        onCategoryChange={(value) => setFieldValue('P16h.response[0].idoptresponse', value)}
                        onSubcategoryChange={(value) => setFieldValue('P16h.response[0].responseuser', value)}
                        onTextChange={(text) => setFieldValue('P16g.response[0].additionalText', text)} // Manejamos el texto del input
                        errors={errors.P16h?.response?.[0]}
                        touched={touched.P16h?.response?.[0]}
                        />
                            <ErrorMessage errors={errors} touched={touched} fieldName="P16h"/>

                    </View>
                )}
            </Formik>

            <View style={globalStyles.buttonsBanner}>
                <Prevcomponent onPrevPressed={() => navigation.navigate('page4' as never)}/>
                <NextComponent onNextPress={() => navigation.navigate('Home' as never)} />
            </View> 

        </ScrollView>
    </KeyboardAvoidingView>
  )
}
