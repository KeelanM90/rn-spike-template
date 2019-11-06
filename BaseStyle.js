import {
  StyleSheet,
} from 'react-native';

export const loginStyle = {
  backgroundColor: '#00f',
  height: 'auto'
};

export const createStyleSheet = (obj) => StyleSheet.create(obj || {});

export default { createStyleSheet, loginStyle };
