//bu dosyada tüm navigasyon işlemleri dönecek
import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginScreen from './screens/login';
import ShelvesScreen from './screens/shelves';
import EmptyShelvesScreen from './screens/emptyShelves';
import StockQueryScreen from './screens/stockQuery';
import EmptyLocationScreen from './screens/emptyLocation';
import EmptyProductScreen from './screens/emptyProduct';
import HomeScreen from './screens/home';
import TabMenu from './screens/tabMenu';


const RouterComp = () => {
    return (
        <Router titleStyle={{ color: '#000' }}  >
            <Scene key='root' hideNavBar={true}>
                <Scene key='main'>
                    <Scene key='login'
                        component={LoginScreen}
                        title='Giriş'
                        hideNavBar={true}
                        animation='fade'
                        initial
                    />
                    <Scene key='shelves'
                        component={ShelvesScreen}
                        title='Raflar'
                        animation='fade'
                        hideNavBar={true}
                    />
                     <Scene key='emptyShelves'
                        component={EmptyShelvesScreen}
                        title='Boş Raflar'
                        animation='fade'
                        hideNavBar={true}
                    />
                    <Scene key='stockQuery'
                        component={StockQueryScreen}
                        title='Stok Sorgulama'
                        animation='fade'
                        hideNavBar={true}
                    />
                    <Scene key='emptyLocation'
                        component={EmptyLocationScreen}
                        title='Detaylar'
                        animation='fade'
                        hideNavBar={true}
                    />
                     <Scene key='emptyProduct'
                        component={EmptyProductScreen}
                        title='Detaylar'
                        animation='fade'
                        hideNavBar={true}
                    />
                      <Scene key='home'
                        component={HomeScreen}
                        title='Anasayfa'
                        animation='fade'
                        hideNavBar={true}
                    />
                </Scene>
            </Scene>
        </Router>
    )
}
export default RouterComp