// useAudioRecorder.js
import {useState, useEffect} from 'react';
import {PermissionsAndroid, Platform} from 'react-native';
import Sound, {
  AudioEncoderAndroidType,
  AudioSourceAndroidType,
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  RecordBackType,
  PlayBackType,
} from 'react-native-nitro-sound';


export const useAudioRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioFile, setAudioFile] = useState(null);
  // const audioRecorderPlayer = new AudioRecorderPlayer();

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

    try {
      const result = await Sound.startRecorder();
      setIsRecording(true);
      setAudioFile(result);
      Sound.addRecordBackListener(e => {
        console.log('Recording...', e);
      });
    } catch (error) {
      console.error('Failed to start recording:', error);
    }
  };

  const stopRecording = async () => {
    if (!isRecording) {
      return;
    }

    try {
      const result = await Sound.stopRecorder();
      Sound.removeRecordBackListener();
      setIsRecording(false);
      setAudioFile(result);
      console.log('Recording stopped, file saved at:', result);
    } catch (error) {
      console.error('Failed to stop recording:', error);
    }
  };

  const recordForDuration = async durationInSeconds => {
    await startRecording();
    setTimeout(() => {
      stopRecording();
    }, durationInSeconds * 1000);
  };

  const startPlayback = async () => {
    if (!audioFile) {
      console.warn('No audio file to play');
      return;
    }

    try {
      await Sound.startPlayer(audioFile);
      Sound.addPlayBackListener(e => {
        console.log('Playing...', e);
      });
    } catch (error) {
      console.error('Failed to start playback:', error);
    }
  };

  const stopPlayback = async () => {
    try {
      await Sound.stopPlayer();
      Sound.removePlayBackListener();
    } catch (error) {
      console.error('Failed to stop playback:', error);
    }
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

