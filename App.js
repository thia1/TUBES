import * as React from 'react';
import { View, Text, Button, Image, TextInput, TouchableOpacity, Touchable, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();


function HomeTabScreen() {
  return (
    <Tab.Navigator barStyle={{backgroundColor: '#FFFFFF'}}>
      <Tab.Screen 
      name="Home" 
      component={HomeScreen} 
      options={{
        tabBarIcon: ({focused}) => (
          <Icon name="home" color={focused ? "#FA4A0C" : "#DADADA"} size={26}/>
        ),
      }}
      />
      <Tab.Screen 
      name="Upload Gambar" 
      component={UploadGambarScreen} 
      options={{
        tabBarIcon: ({focused}) => (
          <Icon name="camera" color={focused ? "#FA4A0C" : "#DADADA"} size={26} />
        ),
      }}
      />
      <Tab.Screen 
      name="Profile" 
      component={Profile} 
      options={{
        tabBarIcon: ({focused}) => (
          <Icon name="user" color={focused ? "#FA4A0C" : "#DADADA"} size={26} />
        ),
      }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name= "Login" component={LoginScreen} />
        <Stack.Screen options={{headerShown: false}} name="goHome" component={HomeTabScreen} />
        <Stack.Screen 
        options={{    
          headerStyle: {
          backgroundColor: '#FA4A0C',
          elevation: null
        },
        headerTitleStyle: {
          color: '#ffffff',
        },
        headerTintColor: '#fff'
        }} 
        name="Account Registration" 
        component={AccountRegistration} />

        <Stack.Screen 
        options={{    
          headerStyle: {
          backgroundColor: '#FA4A0C',
          elevation: null
        },
        headerTitleStyle: {
          color: '#ffffff',
        },
        headerTintColor: '#fff'
        }} 
        name="QR Payment" 
        component={QRPayment} />

        <Stack.Screen 
        options={{    
          headerStyle: {
          backgroundColor: '#FA4A0C',
          elevation: null
        },
        headerTitleStyle: {
          color: '#ffffff',
        },
        headerTintColor: '#fff'
        }} 
        name="Payment Confirmation" 
        component={QRPayConfirm} />

      <Stack.Screen options={{headerShown: false}} name="Pay Succes" component={PaySuccesScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


function LoginScreen({ navigation }) {
  const [email, setEmail] = React.useState()
  const [password, setPassword] = React.useState()
  return (
    <View>
      <View style={{alignItems: 'center', paddingTop: 50}}>
        <Image source={require('./assets/logo/logo.png')} style={{height: 205, width: '50%'}} />
      </View>
      <View style={{paddingHorizontal: 25, paddingTop: 20}}>
        <TextInput style={{borderWidth: 1, borderRadius: 6, borderColor: "#C3C3C3", fontSize: 16, fontWeight: 'normal'}}
        placeholder= "Email"
        onChangeText={text => setEmail(text)}
        />
      </View>
      <View style={{paddingHorizontal: 25, paddingTop: 20}}>
        <TextInput secureTextEntry={true} style={{borderWidth: 1, borderRadius: 6, borderColor: "#C3C3C3", fontSize: 16, fontWeight: 'normal'}}
        placeholder= "Password"
        onChangeText={text => setPassword(text)}
        />
      </View>
      <View style={{flexDirection: 'row', marginBottom: 16, marginTop: 25, paddingHorizontal: 16}}>
            <Text style={{paddingLeft: 1,fontSize: 17, fontWeight: 'bold', color: '#FA4A0C'}}>Lupa Password?</Text>
            <TouchableOpacity>
               <Text style={{fontSize: 17, fontWeight: 'bold', color: '#FA4A0C'}}>  Klik Disini!</Text>
            </TouchableOpacity>
          </View>
      <View style={{ paddingHorizontal: 45, paddingTop: 75, borderRadius: 35}}>
        <Button title="Login" color='#FA4A0C' 
          onPress={()=> {
          navigation.navigate('goHome')
        }}
        />
      </View>
      <View style={{marginTop: 25, alignItems: 'center'}}>
        <Text onPress={()=> { navigation.navigate('Account Registration')}}> Registration </Text>
      </View>
    </View>
  )
}

function HomeScreen({ navigation }) {
  return (
    <View>
      <ScrollView>
        <View style={{paddingTop: 5}}>
          <View style={{backgroundColor: '#F2F2F2', paddingLeft: 15, flexDirection: 'row', paddingBottom: 10, alignItems: 'flex-start',paddingLeft: 15}}>
            <Image source={require('./assets/icon/lingkaran.png')} style={{height: 35, width: 35, marginVertical: 15}} />
            <View style={{flex: 1, alignItems: 'flex-end', marginEnd: 10}}>
                <Text style={{paddingTop: 20, fontSize: 15, fontWeight: '300', fontWeight: 'bold', color: '#FA4A0C'}}>Hi, Bahrul Raziq!</Text>
            </View>
          </View>
      </View>
      {/*Search bar*/}
      <View style={{marginHorizontal: 17, flexDirection: 'row', paddingTop: 15}}>
          <View style={{position: 'relative'}}>
            <TextInput placeholder= "Cari disini ...." style={{borderWidth: 1, borderColor: '#FFFFFF', borderRadius: 25, height: 40, fontSize: 13, paddingLeft: 45, paddingRight: 230, backgroundColor: '#FFFFFF', marginRight: 19}}/>
            <Image source={require('./assets/icon/search.png')} style={{position: 'absolute',top: 8, left: 12}}/>
          </View>
        </View>
        {/*Halaman Pilihan Pakaian*/}
        <View>
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 16, paddingHorizontal: 16, paddingTop:50}}>
            <TouchableOpacity onPress={()=> {
                navigation.navigate('HomeScreen')
                }}>
               <Text style={{fontSize: 14, fontWeight: 'bold', color: '#1C1C1C'}}>Kantor</Text>
            </TouchableOpacity>
            <TouchableOpacity>
               <Text style={{fontSize: 14, fontWeight: 'bold', color: '#1C1C1C'}}>Olahraga</Text>
            </TouchableOpacity>
           <TouchableOpacity>
             <Text style={{fontSize: 14, fontWeight: 'bold', color: '#1C1C1C'}}>Pernikahan</Text>
           </TouchableOpacity>
            <TouchableOpacity>
               <Text style={{fontSize: 14, fontWeight: 'bold', color: '#1C1C1C'}}>Nongkrong</Text>
            </TouchableOpacity>
           <TouchableOpacity>
             <Text style={{fontSize: 14, fontWeight: 'bold', color: '#1C1C1C'}}>Pantai</Text>
           </TouchableOpacity>
          </View>
          <ScrollView horizontal style={{flexDirection: 'row', paddingLeft: 40, paddingBottom:20, paddingTop:10}}>
            <View style={{marginRight: 16}}>
              <View style={{width: 170, height: 170}}>
                <Image source={require('./assets/dummy/kulot.png')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 10, backgroundColor:'#FFFFFF'}}/>
              </View>
              <View style= {{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16, paddingHorizontal: 5}}>
                <Text style={{fontSize: 13, fontWeight: 'bold', color: '#1C1C1C', marginTop: 12}}>Kulot</Text>
                <TouchableOpacity onPress={()=> {
                navigation.navigate('')
                }} 
               style={{backgroundColor: '#FA4A0C', paddingHorizontal: 20, paddingVertical: 5, borderRadius: 18, marginLeft: 20, elevation: 5, marginTop:8}}>
                <Text style={{fontSize: 13, fontWeight: 'bold', color: '#FFFFFF', textAlign: 'center'}}>Detail</Text>
              </TouchableOpacity>
              </View>
            </View>
            <View style={{marginRight: 16}}>
              <View style={{width: 170, height: 170}}>
                <Image source={require('./assets/dummy/blazer.png')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 10, backgroundColor:'#FFFFFF'}}/>
              </View>
              <View style= {{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16, paddingHorizontal: 5}}>
                <Text style={{fontSize: 13, fontWeight: 'bold', color: '#1C1C1C', marginTop: 12}}>Blazer</Text>
                <TouchableOpacity onPress={()=> {
                navigation.navigate('')
                }} 
               style={{backgroundColor: '#FA4A0C', paddingHorizontal: 20, paddingVertical: 5, borderRadius: 18, marginLeft: 20, elevation: 5, marginTop:8}}>
                <Text style={{fontSize: 13, fontWeight: 'bold', color: '#FFFFFF', textAlign: 'center'}}>Detail</Text>
              </TouchableOpacity>
              </View>
            </View>
          </ScrollView>

          <ScrollView horizontal style={{flexDirection: 'row', paddingLeft: 40}}>
            <View style={{marginRight: 16}}>
              <View style={{width: 170, height: 170}}>
                <Image source={require('./assets/dummy/blouse.png')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 10, backgroundColor:'#FFFFFF'}}/>
              </View>
              <View style= {{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16, paddingHorizontal: 5}}>
                <Text style={{fontSize: 13, fontWeight: 'bold', color: '#1C1C1C', marginTop: 12}}>Blouse</Text>
                <TouchableOpacity onPress={()=> {
                navigation.navigate('')
                }} 
               style={{backgroundColor: '#FA4A0C', paddingHorizontal: 20, paddingVertical: 5, borderRadius: 18, marginLeft: 20, elevation: 5, marginTop:8}}>
                <Text style={{fontSize: 13, fontWeight: 'bold', color: '#FFFFFF', textAlign: 'center'}}>Detail</Text>
              </TouchableOpacity>
              </View>
            </View>
            <View style={{marginRight: 16}}>
              <View style={{width: 170, height: 170}}>
                <Image source={require('./assets/dummy/celana-hitam.png')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 10, backgroundColor:'#FFFFFF'}}/>
              </View>
              <View style= {{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16, paddingHorizontal: 5}}>
                <Text style={{fontSize: 13, fontWeight: 'bold', color: '#1C1C1C', marginTop: 12}}>Jas</Text>
                <TouchableOpacity onPress={()=> {
                navigation.navigate('')
                }} 
               style={{backgroundColor: '#FA4A0C', paddingHorizontal: 20, paddingVertical: 5, borderRadius: 18, marginLeft: 20, elevation: 5, marginTop:8}}>
                <Text style={{fontSize: 13, fontWeight: 'bold', color: '#FFFFFF', textAlign: 'center'}}>Detail</Text>
              </TouchableOpacity>
              </View>
            </View>
          </ScrollView>

        
          <View style={{paddingBottom: 16, borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginHorizontal: 16, marginBottom: 20}}></View>
        </View>
        </View>
        </ScrollView>
        </View>
  );
}

function AccountRegistration({ navigation }) {
  const [email, setEmail] = React.useState()
  const [password, setPhone] = React.useState()
  const [name, setName] = React.useState()
  const [phone, setPassword] = React.useState()
  return (
    <View style={{}}>
      <View>
        <View style={{paddingHorizontal: 25, paddingTop: 45}}>
          <TextInput style={{borderWidth: 1, borderRadius: 6, borderColor: "#C3C3C3", fontSize: 16, fontWeight: 'normal'}}
          placeholder= "Email"
          onChangeText={text => setEmail(text)}
          />
        </View>
        <View style={{paddingHorizontal: 25, paddingTop: 45}}>
          <TextInput secureTextEntry={true} style={{borderWidth: 1, borderRadius: 6, borderColor: "#C3C3C3", fontSize: 16, fontWeight: 'normal'}}
          placeholder= "No. Handphone"
          onChangeText={text => setPhone(text)}
          />
        </View>
        <View style={{paddingHorizontal: 25, paddingTop: 45}}>
          <TextInput style={{borderWidth: 1, borderRadius: 6, borderColor: "#C3C3C3", fontSize: 16, fontWeight: 'normal'}}
          placeholder= "Username"
          onChangeText={text => setName(text)}
          />
        </View>
        <View style={{paddingHorizontal: 25, paddingTop: 45}}>
          <TextInput style={{borderWidth: 1, borderRadius: 6, borderColor: "#C3C3C3", fontSize: 16, fontWeight: 'normal'}}
          placeholder= "Password"
          onChangeText={text => setPassword(text)}
          />
        </View>
      </View>
      <View>
        <View style={{ paddingHorizontal: 45, paddingTop: 65}}>
          <Button title="Daftar" color='#FA4A0C' 
            onPress={()=> {
            navigation.navigate('Login')
          }}
          />
        </View>
      </View>
    </View>
  );
}

function UploadGambarScreen() {
  return (
    <View>
      <View style={{paddingTop: 70, alignContent: 'center', paddingLeft: 18}}>
      <TouchableOpacity onPress={()=> { navigation.navigate('Payment Confirmation')}}>
        <View style={{backgroundColor: '#C4C4C4', height: '85%', width: '95%', alignItems: 'center', justifyContent: 'center'}}>
          <Image source={require('./assets/icon/camera.png')} style={{height: 25, width: 25}} />
        </View>
      </TouchableOpacity>
    </View>
    </View>
  );
}

function Profile() {
  return (
    <View>
        <View style={{paddingTop: 25}}>
          <View style={{backgroundColor: '#F2F2F2', paddingLeft: 15, flexDirection: 'row', paddingBottom: 10}}>
            <Image source={require('./assets/icon/lingkaran.png')} style={{height: 35, width: 35, marginVertical: 15}} />
            <View style={{alignItems: 'flex-start', paddingTop: 10, paddingLeft: 15}}>
              <Text style={{paddingTop: 10,fontSize: 15, fontWeight: '300', fontWeight:'bold', textAlign: 'center'}}>Bahrul Raziq M</Text>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end', marginEnd: 10}}>
              <TouchableOpacity>
                <Text style={{paddingTop: 20, fontSize: 15, fontWeight: '300', fontWeight: 'bold', color: '#FA4A0C'}}>Keluar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      <View style={{paddingTop: 40, allignItems: 'center'}}>
        <Text style={{marginLeft: 15, fontSize: 14, color: '#FA4A0C', fontWeight: 'bold'}}>Data Pribadi</Text>
        <Text style={{marginLeft: 15, fontSize: 14, color: '#000000', fontWeight: 'bold'}}>Email</Text>
        <Text style={{marginLeft: 15, fontSize: 14, color: '#000000'}}>bahrulraziq@gmail.com</Text>
        <Text style={{marginLeft: 15, fontSize: 14, color: '#000000', fontWeight: 'bold'}}>No. Handphone</Text>
        <Text style={{marginLeft: 15, fontSize: 14, color: '#000000'}}>0812399941239</Text>
        <Text style={{marginLeft: 15, fontSize: 14, color: '#000000', fontWeight: 'bold'}}>Tanggal Lahir</Text>
        <Text style={{marginLeft: 15, fontSize: 14, color: '#000000'}}>01 September 2001</Text>
        <Text style={{marginLeft: 15, fontSize: 14, color: '#000000', fontWeight: 'bold'}}>Jenis Kelamin</Text>
        <Text style={{marginLeft: 15, fontSize: 14, color: '#000000'}}>Laki-laki</Text>
        <Text style={{marginLeft: 15, fontSize: 14, color: '#000000', fontWeight: 'bold'}}>Pekerjaan</Text>
        <Text style={{marginLeft: 15, fontSize: 14, color: '#000000'}}>Mahasiswa</Text>
      </View>
      <View style={{paddingTop: 260, paddingBottom: 10, paddingHorizontal: 50}}>
        <TouchableOpacity style={{backgroundColor: '#FFFFFF' , borderRadius: 34, marginTop: 45, height: 55, justifyContent: 'center'}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: '#FA4A0C', textAlign: 'center'}}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


function QRPayment({ navigation }) {
  return (
    <View style={{paddingTop: 100, alignContent: 'center', paddingLeft: 18, paddingTop: 150}}>
      <TouchableOpacity onPress={()=> { navigation.navigate('Payment Confirmation')}}>
        <View style={{backgroundColor: '#C4C4C4', height: '85%', width: '95%', alignItems: 'center', justifyContent: 'center'}}>
          <Image source={require('./assets/icon/camera.png')} style={{height: 25, width: 25}} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

function QRPayConfirm({ navigation }) {
  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <View style={{alignItems: 'center', paddingTop: 25}}>
        <Image source={require('./assets/icon/konfirmasi-pembayaran.png')} style={{height: 250, width: 250}} />
      </View>
      <View style={{paddingTop: 10, paddingBottom: 10, borderBottomWidth: 1, marginHorizontal: 35, borderColor: '#B2B2B2'}}>
          <Text style={{fontSize: 28, textAlign: 'center'}}>Rp. 60,000</Text>
      </View>
      <View style={{backgroundColor: '#4982C1', marginHorizontal: 35, marginTop: 25, height: 150, borderRadius: 6}}>
        <Text style={{textAlign: 'center', fontSize: 20, color:'#FFF', fontWeight: '200', paddingTop: 13}}>Payment To :</Text>
        <Text style={{textAlign: 'center', fontSize: 28, color:'#FFF', fontWeight: '400', paddingTop: 13}}>Basicschool</Text>
        <Text style={{textAlign: 'center', fontSize: 20, color:'#FFF', fontWeight: '300', paddingTop: 2}}>Jl. Ciparay No 20B, Kota Bandung</Text>
      </View>
      <View style={{marginHorizontal: 35, marginTop: 25}}>
        <Button title="SUBMIT" color='#4982C1' 
          onPress={()=> {
          navigation.navigate("Pay Succes")
          }}
        />
      </View>
    </View>
  );
}

function PaySuccesScreen({ navigation }) {
  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <View style={{alignItems: 'center', paddingTop: 25}}>
        <Image source={require('./assets/icon/konfirmasi-pembayaran.png')} style={{height: 250, width: 250}} />
      </View>
      <View>
        <Text style={{fontSize: 28, textAlign: 'center'}}>Payment Complete!</Text>
      </View>
      <View style={{paddingTop: 10, paddingBottom: 10, borderBottomWidth: 1, marginHorizontal: 35, borderColor: '#B2B2B2'}}>
          <Text style={{fontSize: 28, textAlign: 'center'}}>Rp. 60,000</Text>
      </View>
      <View style={{backgroundColor: '#4982C1', marginHorizontal: 35, marginTop: 25, height: 150, borderRadius: 6}}>
        <Text style={{textAlign: 'center', fontSize: 20, color:'#FFF', fontWeight: '400', paddingTop: 13}}>20 August 2020</Text>
        <Text style={{textAlign: 'center', fontSize: 20, color:'#FFF', fontWeight: '400', paddingTop: 13}}>Merchant : Basicschool</Text>
        <Text style={{textAlign: 'center', fontSize: 20, color:'#FFF', fontWeight: '400', paddingTop: 13}}>Jl. Ciparay No 20B, Kota Bandung</Text>
      </View>
      <View style={{marginHorizontal: 35, marginTop: 25}}>
        <Button title="FINISH" color='#4982C1' 
          onPress={()=> {
          navigation.navigate("goHome")
          }}
        />
      </View>
    </View>
  );
}


export default App;
