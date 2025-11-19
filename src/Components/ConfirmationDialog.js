import { Alert } from 'react-native';

const ConfirmationDialog = ({ title, message, onConfirm, onCancel }) => {
  Alert.alert(title, message, [
    { text: 'No', style: 'cancel', onPress: onCancel },
    { text: 'Yes', onPress: onConfirm }
  ], { cancelable: true });
};

export default ConfirmationDialog;