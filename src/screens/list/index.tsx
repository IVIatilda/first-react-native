import {FlatList, SafeAreaView} from 'react-native';
import data from '../../shared/data/data';
import {ListItem} from '../../shared/components/list-item';
import H2 from '../../shared/components/h2';
import Container from '../../shared/components/container';

export default function ListScreen() {
  return (
    <Container>
      <FlatList
        windowSize={11}
        data={data}
        renderItem={({item}) => (
          <ListItem title={item.name} text={item.text} image={item.image} />
        )}
        keyExtractor={item => item.id}
        ListHeaderComponent={<H2 title={'Список'} />}
      />
    </Container>
  );
}
