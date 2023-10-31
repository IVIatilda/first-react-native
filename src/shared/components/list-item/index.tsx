import {Image, Text, View} from 'react-native';
import { styles } from './styles';

export function ListItem({title, text, image}: ItemProps) {
  return (
    <View style={styles.item}>
      <View style={styles.itemHeader}>
        <Image style={styles.image} source={{uri: image}} width={80} height={80}></Image>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
}