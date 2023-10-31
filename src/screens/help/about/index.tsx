import H2 from '../../../shared/components/h2';
import Button from '../../../shared/components/button';
import { Screens } from '../../../navigation/screens';
import Container from '../../../shared/components/container';
import { Text } from 'react-native';

export default function AboutScreen({navigation}) {
  return (
    <Container>
      <Button
        title="Вопросы"
        onSubmit={() => navigation.navigate(Screens.Questions)}
      />
      <H2 title="О сервисе" />
      <Text>
        Данное приложение предоставляет пользователям возможность оставлять
        отзывы о компаниях, с которыми они имели дело. Отзывы могут быть
        положительными или отрицательными, исходя из опыта каждого пользователя.
        Это позволяет другим пользователям получить объективную информацию о
        компаниях, прежде чем принимать решение о покупке или сотрудничестве с
        ними.
      </Text>
      <Text></Text>
    </Container>
  );
}
