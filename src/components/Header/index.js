import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import styles from "./styles";

const options = ['Pomodoro','Short Break','Long Break']

const Header = ({currentTime, setCurrentTime, setTime})=> {
    const handlePress = (index) => {
        const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
        setCurrentTime(index);
        setTime(newTime * 60);
    };

    return (
        <View style={styles.container}>
            {options.map((item, index)=> (
                <TouchableOpacity 
                    key={index} 
                    style={[styles.item, currentTime != index && styles.selectedItem]}
                    onPress={() => handlePress(index)} >
                    <Text style={{fontWeight: 'bold'}}>{item}</Text>
                </TouchableOpacity>    
            ))}
        </View>
    );           
};

export default Header;