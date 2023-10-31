import {SafeAreaView, View} from 'react-native';
import styles from './styles';

export default function Container({children}) {
  return (
    <SafeAreaView>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
}
