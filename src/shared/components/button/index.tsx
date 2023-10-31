import {Text, TouchableOpacity} from 'react-native';
import styles from './style';

export default function Button({title, onSubmit}: {title: string, onSubmit?: () => any}) {
  return (
    <TouchableOpacity style={styles.button} onPress={onSubmit}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}
