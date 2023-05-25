import { Ionicons } from '@expo/vector-icons';

const TabBarIcon = ({ name, size, focused }) => {
  return <Ionicons name={name} size={size} color={focused ? '#ff6347' : '#999999'}/>
}

export { TabBarIcon }
