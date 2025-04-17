import { View, Text, StyleSheet } from 'react-native';

export default function ReportsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Reports</Text>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.emptyText}>No reports available</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: 'Inter_600SemiBold',
    color: '#1a1a1a',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: '#666666',
  },
});