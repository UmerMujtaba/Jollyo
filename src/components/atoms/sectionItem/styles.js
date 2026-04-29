import { StyleSheet } from 'react-native';
import {
  rfs,
  rhp,
  rwp
} from '../../../constants';

export const styles = StyleSheet.create({
  sectionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: rhp(5),
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#F8F1ED',
  },
  leftContainer: {
    // height: rhp(40),
    paddingVertical: 10,
    width: rwp(40),
    backgroundColor: '#AF704C',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginRight: rwp(10),
  },

  sectionTitle: {
    flex: 1,
    fontSize: rfs(14),
    color: '#000',
  },
  downloadContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  downloadText: {
    marginRight: rwp(5),
    fontSize: rfs(14),
    color: '#401903',
  },
  downloadIcon: {
    width: rwp(16),
    height: rhp(16),
  },
});
