import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, TouchableWithoutFeedback, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MenuNav = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const HasbeenPress = () => {
    Alert.alert('O código foi copiado para a área de transferência');

  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Conteúdo da tela */}
      <View style={styles.container}>
        <TouchableOpacity onPress={toggleDrawer}>
          <Icon name="bars" size={30} style={styles.icon} />
        </TouchableOpacity>
        <Text style={{margin: 10}} >Drawer Navigation, is often used in mobile and web applications to provide a side navigation menu that can be easily opened and closed via gestures or clicks.</Text>
      </View>

      {/* Drawer (menu lateral) */}
      <TouchableWithoutFeedback onPress={closeDrawer}>
        <View style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: isDrawerOpen ? 1 : -1, display: isDrawerOpen ? 'flex' : 'none' }]}>
          <View style={styles.drawer}>
            <TouchableOpacity onPress={HasbeenPress}>
              <Text>Item 1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={HasbeenPress}>
              <Text>Item 2</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={HasbeenPress}>
              <Text>Item 3</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  icon: {
    marginLeft: 10,
  },
  drawer: {
    backgroundColor: '#fff',
    width: 200,
    elevation: 16,
    paddingTop: 50,
    paddingLeft: 20,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
  },
});

export default MenuNav;