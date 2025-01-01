// useAudioRecorder.js
import {useState, useEffect} from 'react';
import {PermissionsAndroid, Platform} from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';

const useAudioRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioFile, setAudioFile] = useState(null);
  const audioRecorderPlayer = new AudioRecorderPlayer();

  const requestPermissions = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true; // For iOS, permissions are handled automatically
  };

  const startRecording = async () => {
    const hasPermission = await requestPermissions();
    if (!hasPermission) {
      console.warn('Permission denied');
      return;
    }

    const result = await audioRecorderPlayer.startRecorder();
    setIsRecording(true);
    setAudioFile(result); // Save the file path to state
    audioRecorderPlayer.addRecordBackListener(e => {
      console.log('Recording...', e);
    });
  };

  const stopRecording = async () => {
    // if (!isRecording) return;
    console.log('stop here');
    const result = await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
    setIsRecording(false);
    setAudioFile(result); // Save the recorded file path
    console.log('Recording stopped, file saved at:', result);
  };

  const recordForDuration = async durationInSeconds => {
    await startRecording();
    console.log('record');
    // Stop the recording after the specified duration
    setTimeout(() => {
      console.log('time');
      stopRecording();
    }, durationInSeconds * 1000); // Convert seconds to milliseconds
  };

  const startPlayback = async () => {
    if (!audioFile) {
      console.warn('No audio file to play');
      return;
    }

    await audioRecorderPlayer.startPlayer(audioFile);
    audioRecorderPlayer.addPlayBackListener(e => {
      console.log('Playing...', e);
    });
  };

  const stopPlayback = async () => {
    await audioRecorderPlayer.stopPlayer();
  };

  return {
    isRecording,
    audioFile,
    startRecording,
    stopRecording,
    recordForDuration, // Expose the new function
    startPlayback,
    stopPlayback,
  };
};

export default useAudioRecorder;
