import { Tabs } from 'expo-router';
import { ShoppingCart, LayoutGrid, Package, FileText, Settings } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#2E8B57',
        tabBarInactiveTintColor: '#8E8E93',
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: '#E5E5EA',
          height: 60,
          paddingBottom: 8,
        },
        tabBarLabelStyle: {
          fontFamily: 'Inter_500Medium',
          fontSize: 12,
        },
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color, size }) => (
            <LayoutGrid size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="pos"
        options={{
          title: 'POS',
          tabBarIcon: ({ color, size }) => (
            <ShoppingCart size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="inventory"
        options={{
          title: 'Inventory',
          tabBarIcon: ({ color, size }) => (
            <Package size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="reports"
        options={{
          title: 'Reports',
          tabBarIcon: ({ color, size }) => (
            <FileText size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Settings size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}