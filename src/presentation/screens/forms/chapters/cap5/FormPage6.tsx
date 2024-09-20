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
import { getInitialValuesPage6 } from '../../../../../utils/initialValues';
import { ErrorMessage } from '../../../../components/shared/ErrorComponent';
import { DropDownMultiQuestion } from '../../../../components/shared/DropDownMultiQuestion';
import { subcategories18a } from '../../../../../utils/cap1/categoriesp18';

export interface FormValues {
    P18: FormTemplate;
}

export const FormPage6 = () => {
    const navigation = useNavigation();
    const { saveAllData } = UseSaveData();
    const { surveyId } = useContext(SurveyContext);
    const finalSurveyId = surveyId ?? "defaultSurveyId";
    const initialValues: FormValues = getInitialValuesPage6();

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
                    {({ handleChange, handleBlur, handleSubmit, values, setFieldValue, setFieldTouched, errors, touched }) => (
                        <View>
                            <DropDownMultiQuestion
                                questionTitle="P18. Económicas"
                                subcategoryTitle="Seleccione lo que aplica"
                                subcategories={subcategories18a}  // Lista de subcategorías
                                selectedCategory={values.P18.response[0].idoptresponse}
                                selectedSubcategories={values.P18.response[0].responseuser || []}
                                onCategoryChange={(value) => setFieldValue('P18.response[0].idoptresponse', value)}
                                onSubcategoryChange={(value) => setFieldValue('P18.response[0].responseuser', value)}
                                onSubQuestionChange={(index, subcategoryValue, value) => {
                                    const updatedResponses = { ...values.P18.response[0].subQuestion1Responses };
                                    updatedResponses[subcategoryValue] = updatedResponses[subcategoryValue] || [];
                                    updatedResponses[subcategoryValue][index] = value;
                                    setFieldValue('P18.response[0].subQuestion1Responses', updatedResponses);
                                }}
                                selectedSubQuestions={values.P18.response[0].subQuestion1Responses || {}} // Inicializa con respuestas vacías
                                errors={errors.P18?.response?.[0]}
                                touched={touched.P18?.response?.[0]}
                            />

                            <ErrorMessage errors={errors} touched={touched} fieldName="P18" />
                        </View>
                    )}
                </Formik>

                <View style={globalStyles.buttonsBanner}>
                    <Prevcomponent onPrevPressed={() => navigation.navigate('page5' as never)} />
                    <NextComponent onNextPress={() => navigation.navigate('Home' as never)} />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};
