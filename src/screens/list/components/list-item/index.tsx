import {Image, Text, View} from 'react-native';
import {styles} from './styles';
import Button from '../../../../shared/components/button';
import {ItemProps} from './models';

export function ListItem({item, buttonPress}: ItemProps) {
  return (
    <View style={styles.item}>
      <View style={styles.itemHeader}>
        <Image
          style={styles.image}
          source={{uri: item.image}}
          width={80}
          height={80}></Image>
        <Text style={styles.title}>{item.name}</Text>
      </View>
      <Button onSubmit={() => buttonPress()} title="Читать отзыв" />
    </View>
  );
}
