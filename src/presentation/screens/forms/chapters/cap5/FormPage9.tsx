import React, { useContext } from 'react';
import { View, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { Formik, FormikHelpers } from 'formik';
import { Prevcomponent } from '../../../../components/shared/PrevComponent';
import { NextComponent } from '../../../../components/shared/NextComponent';
import { globalStyles } from '../../../../theme/theme';
import { SurveyContext } from '../../../../../context/SurveyContext';
import { UseSaveData } from '../../../../hooks/UseSaveData';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { FormTemplate } from '../../../../../utils/FormInterfaces';
import { fileName } from '../../../../../utils/generateFilename';
import { getInitialValuesPage6, getInitialValuesPage9 } from '../../../../../utils/initialValues';
import { ErrorMessage } from '../../../../components/shared/ErrorComponent';
import { YesNoInput } from '../../../../components/shared/DoubeTextDrop'; // Asegúrate de importar el nuevo componente
import { InputComponent } from '../../../../components/shared/InputComponent';

export interface FormValues {
    P24: FormTemplate;
    P25: FormTemplate;
    P26: FormTemplate;
    P27: FormTemplate;
    P28: FormTemplate;
    P29: FormTemplate;
}

export const FormPage9 = () => {
    const navigation = useNavigation();
    const { saveAllData } = UseSaveData();
    const { surveyId } = useContext(SurveyContext);
    const finalSurveyId = surveyId ?? "defaultSurveyId";
    const initialValues: FormValues = getInitialValuesPage9();

    function setFieldTouched(arg0: string): void {
        throw new Error('Function not implemented.');
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <ScrollView contentContainerStyle={globalStyles.FomsContainer}>
                <View style={globalStyles.CapTitle}>
                    <Text style={globalStyles.Title}>Capítulo 5. Conflictividades</Text>
                </View>

                <Formik
                    initialValues={initialValues}
                    onSubmit={async (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
                        try {
                            await saveAllData(`${fileName}.json`, values, finalSurveyId);
                        } finally {
                            setSubmitting(false);
                            navigation.navigate('page2' as never);
                        }
                    }}
                >
                    {({ setFieldValue, values, errors, touched }) => (
                        <View>
                            <YesNoInput
                                questionTitle="P24. ¿Existe desde la comunidad a la que usted representa alguna alianza o espacios de coordinación con la institucionalidad u operadores de justicia del municipio para atender los casos o problemas que se presentan? "
                                subQuestion1="P25. 	Puede usted mencionar brevemente ¿en qué consisten esos espacios de coordinación o alianza?"
                                subQuestion2="¿Cuáles son las instituciones que hacen parte de esa coordinación o alianza con las autoridades étnicas? "
                                selectedAnswer={values.P24.response[0].idoptresponse}
                                onAnswerChange={(value) => setFieldValue('P24.response[0].idoptresponse', value)}
                                answer1={values.P24.response[0].subQuestion1Responses?.problem1 || ""}
                                answer2={values.P24.response[0].subQuestion1Responses?.problem2 || ""}
                                onAnswer1Change={(value) => {
                                    const updatedResponses = { ...values.P24.response[0].subQuestion1Responses };
                                    updatedResponses.problem1 = value;
                                    setFieldValue('P24.response[0].subQuestion1Responses', updatedResponses);
                                }}
                                onAnswer2Change={(value) => {
                                    const updatedResponses = { ...values.P24.response[0].subQuestion1Responses };
                                    updatedResponses.problem2 = value;
                                    setFieldValue('P24.response[0].subQuestion1Responses', updatedResponses);
                                }}
                                errors={errors.P24?.response?.[0]}
                                touched={touched.P24?.response?.[0]}
                            />
                            <ErrorMessage errors={errors} touched={touched} fieldName="P24" />

                            <InputComponent
                                info='P27' 
                                textTitle='P27. ¿Por qué no existen esas alianzas o protocolos de coordinación?'
                                handleChange={(value: string) => setFieldValue('P27.response[0].responseuser[0]', value)}
                                handleBlur={() => setFieldTouched('P27.response[0].responseuser[0]')}
                                values={values.P27.response[0].responseuser} 
                            />
                            <ErrorMessage errors={errors} touched={touched} fieldName="P27" />

                            <InputComponent
                                info='P28' 
                                textTitle='P28. ¿Qué apoyo o articulación necesitan con la institucionalidad municipal, departamental o nacional para el manejo de estos casos?'
                                handleChange={(value: string) => setFieldValue('P28.response[0].responseuser[0]', value)}
                                handleBlur={() => setFieldTouched('P28.response[0].responseuser[0]')}
                                values={values.P28.response[0].responseuser} 
                            />
                            <ErrorMessage errors={errors} touched={touched} fieldName="P28" />

                            <InputComponent
                                info='P29' 
                                textTitle='P29. Para finalizar esta encuesta, ¿desearía agregar algún comentario o recomendación?'
                                handleChange={(value: string) => setFieldValue('P29.response[0].responseuser[0]', value)}
                                handleBlur={() => setFieldTouched('P29.response[0].responseuser[0]')}
                                values={values.P29.response[0].responseuser} 
                            />
                            <ErrorMessage errors={errors} touched={touched} fieldName="P29" />
                        </View>
                    )}
                </Formik>

                <View style={globalStyles.buttonsBanner}>
                    <Prevcomponent onPrevPressed={() => navigation.navigate('page8' as never)} />
                    <NextComponent onNextPress={() => navigation.navigate('page10' as never)} />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};