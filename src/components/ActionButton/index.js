import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const ActionButton = ({isActive, handleStartStop}) => {
    const buttonText = isActive ? 'STOP' : 'START'

    return (
        <TouchableOpacity style={styles.button} onPress={handleStartStop}>
            <Text style={styles.text}>{buttonText}</Text>
        </TouchableOpacity>
    )
};

export default ActionButton;