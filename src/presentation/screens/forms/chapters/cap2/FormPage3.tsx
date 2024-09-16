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

export interface FormValues{
    P14:FormTemplate
    P15:FormTemplate
    P16:FormTemplate
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
                <Text style={globalStyles.Title}>Capítulo 2. Información laboral</Text>
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
                        <InputComponent 
                        info='P14'
                        textTitle='P14.¿Cuál es el nombre completo del cargo, ocupación o rol que usted desempeña actualmente?'
                        handleChange={(value: string) => setFieldValue('P14.response[0].responseuser[0]', value)}
                        handleBlur={() => setFieldTouched('P14.response[0].responseuser[0]')}
                        values={values.P14.response[0].responseuser}
                        />
                            <ErrorMessage errors={errors} touched={touched} fieldName="P14" />
                        <DropDownComponent
                        values={values.P15.response[0].responseuser}
                        setFieldValue={(value) => setFieldValue('P15.response[0].responseuser[0]', value)}
                        qTitle='P15. ¿Cuántos años de experiencia tiene en este cargo u ocupación?'
                        opValues={['Menor de 1 año', 'Entre 1 a 3 años', 'Entre 4 a 6 años',
                            'Entre 7 a 9 años', '10 años o mayor']}
                        />
                            <ErrorMessage errors={errors} touched={touched} fieldName="P15"/>
                        <DropDownComponent
                        values={values.P16.response[0].responseuser}
                        setFieldValue={(value) => setFieldValue('P16.response[0].responseuser[0]', value)}
                        qTitle='P16. ¿Las funciones / labores que usted desempeña tiene cobertura?'
                        opValues={['Urbana', 'Rural', 'Ambas']}
                        />
                            <ErrorMessage errors={errors} touched={touched} fieldName="P16"/>
                    </View>
                )}
            </Formik>

            <View style={globalStyles.buttonsBanner}>
                <Prevcomponent onPrevPressed={() => navigation.navigate('page2' as never)}/>
                <NextComponent onNextPress={() => navigation.navigate('page1' as never)} />
            </View> 

        </ScrollView>
    </KeyboardAvoidingView>
  )
}
