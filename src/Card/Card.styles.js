import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  cardContainer: {
    borderRadius: 5,
    padding: 10,
    margin: 10,
    backgroundColor: 'black',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardCompleted: {
    backgroundColor: 'gray',
    opacity: 0.5,
  },
  cardProgress: {
    backgroundColor: 'orange',
  },
  lineThrough: {
    textDecorationLine: 'line-through',
    color: 'white',
  },
  deleteButton: {
    zIndex: 2,
    borderRadius: 10,
    backgroundColor: 'orange',
    flexDirection: 'column',
    width: 20,
    display: 'flex',
  },
  deleteButtonText: {
    textAlign: 'center',
    color: 'white',
  },
});
