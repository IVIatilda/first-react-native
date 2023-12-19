import {FlatList} from 'react-native';
import data from '../../../../shared/data/data';
import {ListItem} from '../../components/list-item';
import H2 from '../../../../shared/components/h2';
import Container from '../../../../shared/components/container';
import Animated, {
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import {Screens} from '../../../../navigation/screens';

export default function ListPage({navigation}) {
  const opacity = useSharedValue(1);

  const handlePress = (item: any) => {
    opacity.value = withSequence(withTiming(0, { duration: 500 }), withTiming(1));
    setTimeout(() => {
      navigation.navigate(Screens.Review, item);
    }, 400);
  };

  return (
    <Container>
      <Animated.View
        style={{
          opacity,
        }}>
        <FlatList
          windowSize={11}
          data={data}
          renderItem={({item}) => (
            <ListItem item={item} buttonPress={() => handlePress(item)} />
          )}
          keyExtractor={item => item.id}
          ListHeaderComponent={<H2 title={'Список'} />}
        />
      </Animated.View>
    </Container>
  );
}
