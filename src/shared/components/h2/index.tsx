import {Text} from 'react-native';
import styles from './styles';

export default function H2({title}: {title: string}) {
  return <Text style={styles.title}>{title}</Text>;
}
