import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  item: {
    backgroundColor: '#ffaea0',
    padding: 15,
    marginVertical: 8,
  },
  itemHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    flexShrink: 1,
  },
  text: {
    fontSize: 16,
  },
  image: {
    borderRadius: 50,
  },
});
