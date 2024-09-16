import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { MainButton } from '../../components/shared/MainButton'
import { globalStyles } from '../../theme/theme'
import { useNavigation } from '@react-navigation/native'
import { generateId } from '../../../utils/generateId'
import { SurveyContext } from '../../../context/SurveyContext'
import { UseSaveData } from '../../hooks/UseSaveData'


export const HomeScreen = () => {
  
  const navigation = useNavigation();
    const { setSurveyId } = useContext(SurveyContext);
    const {postNewSurvey} = UseSaveData();

    let now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const fileName = `${year}-${month}-${day}`;

    const handleNewSurvey = async() => {
      const newSurveyId = generateId();
      setSurveyId(newSurveyId);
      console.log("Generated Survey ID:", newSurveyId);
      await postNewSurvey(`${fileName}.json`, newSurveyId);
      navigation.navigate('page1' as never);
    };
    
  return (
    <View style={globalStyles.HomeScreenContainer}>
        <MainButton label='Nueva encuesta' onPress={handleNewSurvey}/>
        <MainButton label='Procesar encuestas' onPress={() => navigation.navigate('page1' as never)}/>
    </View>
  )
}
