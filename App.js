import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Platform } from 'react-native';
import Header from './src/components/Header';
import Timer from './src/components/Timer';
import ActionButton from './src/components/ActionButton';

const colors = ['#F7DC6F','#A2D9CE','#D7BDE2']

export default function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState('POMO' | 'SHORT' | 'BREAK');
  const [isActive, setIsActive] = useState(false);
 
  useEffect(()=>{
    let interval = null;

    if(isActive) {
      interval = setInterval( ()=> {
        setTime(time-1);
      }, 1000);

    } else {
      clearInterval(interval);
    };
    
    if(time === 0) {
      setIsActive(false);
      setIsRunning((prev) => !prev);
      setTime(isRunning ? 300 : 1500);
    };

    return () => clearInterval(interval);
  }, [isActive, time]);

  const handleStartStop = ()=> {
      setIsActive(!isActive);
  }

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: colors[currentTime]}]}>
      <View style= { { flex: 1, paddingHorizontal: 15, paddingTop: Platform.OS === 'android' && 30}}>
        <Text style={styles.title}>Pomodoro</Text>
        <Header currentTime={currentTime} setCurrentTime={setCurrentTime} setTime={setTime}/>
        <Timer time={time}/>
        <ActionButton isActive={isActive} handleStartStop={handleStartStop} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});
