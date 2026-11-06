import { StyleSheet } from 'react-native';
import { themes } from '../../global/themes';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 58,
    borderWidth: 1.5,
    borderColor: themes.colors.primary,
    borderRadius: themes.radius.md,
    paddingHorizontal: themes.spacing.md,
    marginBottom: 22,
    backgroundColor: themes.colors.surface,
  },
  label: {
    position: 'absolute',
    top: -10,
    left: 12,
    paddingHorizontal: 6,
    backgroundColor: themes.colors.background,
    color: themes.colors.primary,
    fontSize: themes.fontSize.sm,
    zIndex: 1,
  },
  picker: {
    flex: 1,
    marginLeft: 4,
    color: themes.colors.text,
  },
});