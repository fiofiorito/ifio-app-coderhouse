import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  const fem = 'a';
  const masc = 'o';
  const name = 'Fiorella';

  const handlePress = () => {
    console.log('clickeaste')
  }

  return (<ScrollView style={styles.main}>
    <View style={styles.container}>
      {/* Deberia tener un condicional para que sepa si es hombre o mujer el usuario */}
      <Text style={styles.title}>Bienvenid{fem} {name}!</Text>
      <Text style={styles.secondary}>Hola Coder!</Text>
      <Image style={styles.img} source={{
        url: 'https://www.freepnglogos.com/uploads/coffee-png/coffee-png-transparent-images-png-only-31.png',
      }} />
      <Button style={styles.btn} title='ADD' onPress={handlePress} />
      <StatusBar style="auto" />
    </View>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#F3F3F3',
    paddingTop: 70,
    paddingLeft: 20,
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    color: '#313131',
  },
  title: {
    fontSize: 35,
    fontWeight: '500',
    paddingBottom: 8,
  },
  secondary: {
    color: '#8A8B8C',
  },
  img: {
    width: 180,
    height: 144,
    marginLeft: 180,
  },
  btn: {
    backgroundColor: '#EAEBEE',
    color: '#DEC5A7'
  }
});

/* COLORES:
https://coolors.co/dec5a7-d0d0d2-8a8b8c-313131-f3f3f3-eaebee-ca9568-582f03-351a0c

Font colors:
- Main #313131
- Secondary texts #8A8B8C
- Tertiary/search bar vibes #D0D0D2
- Accesory & contrast #DEC5A7

Background colors:
- Main #F3F3F3
- Buttons and stufff #EAEBEE
- Primary buttons #CA9568
- Cards gradient 1 #582F03
- Cards gradient 2 #351A0C
*/