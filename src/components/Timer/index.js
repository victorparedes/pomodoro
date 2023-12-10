import { View, Text } from "react-native"

import styles from "./styles";
 
const Timer = ({time})=> {
    const parseTimeToMMSS = (currentSeconds) => {
        const minutes = Math.floor(currentSeconds / 60).toString().padStart(2, '0');
        const seconds = (currentSeconds % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    }

    return(
        <View style={styles.container}>
            <Text style={styles.time}>{parseTimeToMMSS(time)}</Text>
        </View>
    )
};

export default Timer;