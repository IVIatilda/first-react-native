import Button from '../../../shared/components/button';
import H2 from '../../../shared/components/h2';
import {Screens} from '../../../navigation/screens';
import Container from '../../../shared/components/container';
import {Text, View} from 'react-native';
import styles from './styles';

export default function QuestionsScreen({navigation}) {
  return (
    <Container>
      <Button
        title="О сервисе"
        onSubmit={() => navigation.navigate(Screens.About)}
      />
      <H2 title="Вопросы" />
      <View style={styles.questionItem}>
        <Text style={styles.question}>
          Как я могу оставить отзыв о компании?
        </Text>
        <Text style={styles.answer}>
          Чтобы оставить отзыв о компании, найдите ее профиль в приложении и
          нажмите на кнопку "Оставить отзыв". Затем вы сможете написать свой
          отзыв и оценить компанию.
        </Text>
      </View>
      <View style={styles.questionItem}>
        <Text style={styles.question}>Как приложение фильтрует отзывы?</Text>
        <Text style={styles.answer}>
          Приложение позволяет фильтровать отзывы по различным параметрам, таким
          как категория компании или регион. Вы можете установить необходимые
          фильтры для получения более точных результатов.
        </Text>
      </View>
      <View style={styles.questionItem}>
        <Text style={styles.question}>
          Могу ли я получить контактные данные компании из приложения?
        </Text>
        <Text style={styles.answer}>
          Да, приложение предоставляет контактные данные компании, которые можно
          найти на ее профиле. Вы увидите информацию о телефоне, электронной
          почте и адресе компании.
        </Text>
      </View>
    </Container>
  );
}
