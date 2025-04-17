import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function DashboardScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=60' }}
          style={styles.logo}
        />
        <View style={styles.headerText}>
          <Text style={styles.storeName}>ALFATIHA</Text>
          <Text style={styles.storeTagline}>Your Trusted Retail Partner</Text>
        </View>
      </View>
      
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>Rp 0</Text>
          <Text style={styles.statLabel}>Today's Sales</Text>
        </View>
        
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>0</Text>
          <Text style={styles.statLabel}>Transactions</Text>
        </View>
      </View>

      <View style={styles.quickActions}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.actionGrid}>
          {['New Sale', 'Add Product', 'Stock Update', 'Daily Report'].map((action) => (
            <View key={action} style={styles.actionCard}>
              <Text style={styles.actionText}>{action}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.recentTransactions}>
        <Text style={styles.sectionTitle}>Recent Transactions</Text>
        <View style={styles.transactionList}>
          <Text style={styles.emptyText}>No recent transactions</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#2E8B57',
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  headerText: {
    flex: 1,
  },
  storeName: {
    fontSize: 24,
    fontFamily: 'Inter_700Bold',
    color: '#ffffff',
  },
  storeTagline: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: '#E0E0E0',
  },
  statsContainer: {
    flexDirection: 'row',
    padding: 15,
    gap: 15,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  statNumber: {
    fontSize: 24,
    fontFamily: 'Inter_700Bold',
    color: '#2E8B57',
    marginBottom: 8,
  },
  statLabel: {
    fontSize: 14,
    fontFamily: 'Inter_500Medium',
    color: '#666666',
  },
  quickActions: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Inter_600SemiBold',
    color: '#333333',
    marginBottom: 15,
  },
  actionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
  },
  actionCard: {
    width: '47%',
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  actionText: {
    fontSize: 16,
    fontFamily: 'Inter_500Medium',
    color: '#2E8B57',
  },
  recentTransactions: {
    padding: 15,
    marginBottom: 20,
  },
  transactionList: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    minHeight: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: '#666666',
  },
});