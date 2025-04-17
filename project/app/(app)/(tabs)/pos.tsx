import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import { Search, Barcode } from 'lucide-react-native';

export default function POSScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>ALFATIHA POS</Text>
        <Text style={styles.headerSubtitle}>New Transaction</Text>
      </View>
      
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Search size={20} color="#666666" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search products..."
            placeholderTextColor="#666666"
          />
          <Barcode size={20} color="#2E8B57" />
        </View>
      </View>

      <ScrollView style={styles.cartContainer}>
        <Text style={styles.sectionTitle}>Shopping Cart</Text>
        <View style={styles.emptyCart}>
          <Text style={styles.emptyText}>No items in cart</Text>
          <Text style={styles.emptySubtext}>Scan or search for products to add</Text>
        </View>
      </ScrollView>

      <View style={styles.totalSection}>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Subtotal</Text>
          <Text style={styles.totalAmount}>Rp 0</Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Tax (11%)</Text>
          <Text style={styles.totalAmount}>Rp 0</Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.grandTotalLabel}>Total</Text>
          <Text style={styles.grandTotalAmount}>Rp 0</Text>
        </View>
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
    backgroundColor: '#2E8B57',
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: 'Inter_700Bold',
    color: '#ffffff',
  },
  headerSubtitle: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: '#E0E0E0',
    marginTop: 5,
  },
  searchContainer: {
    padding: 15,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
  },
  cartContainer: {
    flex: 1,
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Inter_600SemiBold',
    color: '#333333',
    marginBottom: 15,
  },
  emptyCart: {
    backgroundColor: '#ffffff',
    padding: 30,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 200,
  },
  emptyText: {
    fontSize: 18,
    fontFamily: 'Inter_500Medium',
    color: '#666666',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: '#999999',
  },
  totalSection: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#E5E5EA',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  totalLabel: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: '#666666',
  },
  totalAmount: {
    fontSize: 16,
    fontFamily: 'Inter_500Medium',
    color: '#333333',
  },
  grandTotalLabel: {
    fontSize: 18,
    fontFamily: 'Inter_600SemiBold',
    color: '#333333',
  },
  grandTotalAmount: {
    fontSize: 18,
    fontFamily: 'Inter_700Bold',
    color: '#2E8B57',
  },
});