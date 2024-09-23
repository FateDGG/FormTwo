import React, { useEffect, useContext } from 'react';
import { Text, View, Alert } from 'react-native';
import { MainButton } from '../../components/shared/MainButton';
import { globalStyles } from '../../theme/theme';
import { useNavigation } from '@react-navigation/native';
import { generateId } from '../../../utils/generateId';
import { SurveyContext } from '../../../context/SurveyContext';
import { UseSaveData } from '../../hooks/UseSaveData';
import RNFS from 'react-native-fs'; // Importar RNFS para manejo de archivos
import NetInfo from '@react-native-community/netinfo'; // Importar NetInfo para verificar conexión a internet
import axios from 'axios'; // Importar axios para enviar datos

export const HomeScreen = () => {
  const navigation = useNavigation();
  const { setSurveyId } = useContext(SurveyContext);
  const { postNewSurvey } = UseSaveData();

  let now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const fileName = `${year}-${month}-${day}`;

  // Carpeta donde se almacenarán los archivos JSON
  const directoryPath = RNFS.DocumentDirectoryPath;

  // Función para enviar archivos a través de axios
  const sendFile = async (filePath: string) => {
    try {
      const fileContent = await RNFS.readFile(filePath);
      const parsedData = JSON.parse(fileContent); // Parsear contenido JSON
      const response = await axios.post('urlApi', parsedData); // Cambiar url de endpoint al api
      if (response.status === 200) {
        // await RNFS.unlink(filePath); // Descomentar si se requiere eliminar el archivo después de enviarlo exitosamente
        // console.log(`Archivo ${filePath} enviado y eliminado con éxito.`);
      }
    } catch (error) {
      console.error('Error enviando archivo:', error);
    }
  };

  // Función para revisar archivos locales y enviarlos si hay conexión
  const checkAndSendFiles = async () => {
    try {
      const files = await RNFS.readDir(directoryPath);
      if (files.length > 0) {
        // Verificar conexión a Internet
        const netInfo = await NetInfo.fetch();
        if (netInfo.isConnected) {
          // Si hay conexión, enviar los archivos
          for (const file of files) {
            if (file.name.endsWith('.json')) {
              await sendFile(file.path); // Llamar a la función para enviar el archivo
            }
          }
        } else {
          console.log('Sin conexión a Internet, no se pueden enviar los archivos.');
        }
      } else {
        console.log('No hay archivos JSON para enviar.');
      }
    } catch (error) {
      console.error('Error revisando archivos locales:', error);
    }
  };

  // useEffect para ejecutar la revisión de archivos al cargar la pantalla
  useEffect(() => {
    checkAndSendFiles();
  }, []);

  const handleNewSurvey = async () => {
    const newSurveyId = generateId();
    setSurveyId(newSurveyId);
    console.log("Generated Survey ID:", newSurveyId);
    await postNewSurvey(`${fileName}.json`, newSurveyId);
    navigation.navigate('page1' as never);
  };

  return (
    <View style={globalStyles.HomeScreenContainer}>
      <MainButton label='Nueva encuesta' onPress={handleNewSurvey} />
      <MainButton label='Procesar encuestas' onPress={() => navigation.navigate('page1' as never)} />
    </View>
  );
};
