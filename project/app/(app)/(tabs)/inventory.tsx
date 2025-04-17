import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Plus, Search, CreditCard as Edit2, Trash2 } from 'lucide-react-native';
import { useState } from 'react';

interface Product {
  id: string;
  name: string;
  barcode: string;
  buyPrice: number;
  sellPrice: number;
  stock: number;
  category: string;
  image?: string;
}

const dummyProducts: Product[] = [
  {
    id: '1',
    name: 'Indomie Goreng',
    barcode: '089686010947',
    buyPrice: 2500,
    sellPrice: 3500,
    stock: 50,
    category: 'Makanan',
    image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: '2',
    name: 'Aqua 600ml',
    barcode: '089686010948',
    buyPrice: 2000,
    sellPrice: 3000,
    stock: 100,
    category: 'Minuman',
    image: 'https://images.unsplash.com/photo-1616118132534-381148898bb4?w=800&auto=format&fit=crop&q=60'
  },
];

export default function InventoryScreen() {
  const [products, setProducts] = useState<Product[]>(dummyProducts);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    barcode: '',
    buyPrice: '',
    sellPrice: '',
    stock: '',
    category: '',
    image: ''
  });

  const handleAdd = () => {
    setFormData({
      name: '',
      barcode: '',
      buyPrice: '',
      sellPrice: '',
      stock: '',
      category: '',
      image: ''
    });
    setSelectedProduct(null);
    setShowAddModal(true);
  };

  const handleEdit = (product: Product) => {
    setFormData({
      name: product.name,
      barcode: product.barcode,
      buyPrice: product.buyPrice.toString(),
      sellPrice: product.sellPrice.toString(),
      stock: product.stock.toString(),
      category: product.category,
      image: product.image || ''
    });
    setSelectedProduct(product);
    setShowAddModal(true);
  };

  const handleSave = () => {
    const newProduct = {
      id: selectedProduct?.id || Date.now().toString(),
      name: formData.name,
      barcode: formData.barcode,
      buyPrice: Number(formData.buyPrice),
      sellPrice: Number(formData.sellPrice),
      stock: Number(formData.stock),
      category: formData.category,
      image: formData.image
    };

    if (selectedProduct) {
      setProducts(products.map(p => p.id === selectedProduct.id ? newProduct : p));
    } else {
      setProducts([...products, newProduct]);
    }

    setShowAddModal(false);
  };

  const handleDelete = (id: string) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.barcode.includes(searchQuery)
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Inventory</Text>
        <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
          <Plus color="#ffffff" size={24} />
          <Text style={styles.addButtonText}>Add Product</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <Search size={20} color="#666666" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search products..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <ScrollView style={styles.productList}>
        {filteredProducts.map(product => (
          <View key={product.id} style={styles.productCard}>
            <Image
              source={{ uri: product.image }}
              style={styles.productImage}
            />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productBarcode}>Barcode: {product.barcode}</Text>
              <Text style={styles.productPrice}>
                Buy: Rp {product.buyPrice.toLocaleString()} | Sell: Rp {product.sellPrice.toLocaleString()}
              </Text>
              <Text style={styles.productStock}>Stock: {product.stock}</Text>
            </View>
            <View style={styles.actionButtons}>
              <TouchableOpacity
                style={[styles.actionButton, styles.editButton]}
                onPress={() => handleEdit(product)}
              >
                <Edit2 size={16} color="#2E8B57" />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.actionButton, styles.deleteButton]}
                onPress={() => handleDelete(product.id)}
              >
                <Trash2 size={16} color="#FF3B30" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      {showAddModal && (
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <Text style={styles.modalTitle}>
              {selectedProduct ? 'Edit Product' : 'Add New Product'}
            </Text>
            
            <TextInput
              style={styles.input}
              placeholder="Product Name"
              value={formData.name}
              onChangeText={(text) => setFormData({...formData, name: text})}
            />
            
            <TextInput
              style={styles.input}
              placeholder="Barcode"
              value={formData.barcode}
              onChangeText={(text) => setFormData({...formData, barcode: text})}
            />
            
            <TextInput
              style={styles.input}
              placeholder="Buy Price"
              value={formData.buyPrice}
              onChangeText={(text) => setFormData({...formData, buyPrice: text})}
              keyboardType="numeric"
            />
            
            <TextInput
              style={styles.input}
              placeholder="Sell Price"
              value={formData.sellPrice}
              onChangeText={(text) => setFormData({...formData, sellPrice: text})}
              keyboardType="numeric"
            />
            
            <TextInput
              style={styles.input}
              placeholder="Stock"
              value={formData.stock}
              onChangeText={(text) => setFormData({...formData, stock: text})}
              keyboardType="numeric"
            />
            
            <TextInput
              style={styles.input}
              placeholder="Category"
              value={formData.category}
              onChangeText={(text) => setFormData({...formData, category: text})}
            />
            
            <TextInput
              style={styles.input}
              placeholder="Image URL"
              value={formData.image}
              onChangeText={(text) => setFormData({...formData, image: text})}
            />

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setShowAddModal(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={[styles.modalButton, styles.saveButton]}
                onPress={handleSave}
              >
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: 'Inter_600SemiBold',
    color: '#1a1a1a',
  },
  addButton: {
    backgroundColor: '#2E8B57',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    gap: 8,
  },
  addButtonText: {
    color: '#ffffff',
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
  },
  productList: {
    padding: 15,
  },
  productCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
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
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 15,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontFamily: 'Inter_600SemiBold',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  productBarcode: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: '#666666',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 14,
    fontFamily: 'Inter_500Medium',
    color: '#2E8B57',
    marginBottom: 4,
  },
  productStock: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: '#666666',
  },
  actionButtons: {
    flexDirection: 'column',
    gap: 8,
  },
  actionButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
  },
  editButton: {
    backgroundColor: '#E8F5E9',
  },
  deleteButton: {
    backgroundColor: '#FFE5E5',
  },
  modalContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modal: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    width: '100%',
    maxWidth: 500,
    maxHeight: '90%',
  },
  modalTitle: {
    fontSize: 20,
    fontFamily: 'Inter_600SemiBold',
    color: '#1a1a1a',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e1e1e1',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 15,
  },
  modalButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    minWidth: 100,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#f5f5f5',
  },
  cancelButtonText: {
    color: '#666666',
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#2E8B57',
  },
  saveButtonText: {
    color: '#ffffff',
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
  },
});