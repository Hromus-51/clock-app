import { Provider } from 'react-redux';
//========================================
import Clock from '../Clock/Clock';
//========================================
import GlobalStyles from '../../styles/global';
import { store } from '../../redux/store';

const App = () => {
    return (
        <Provider store={store}>
            <Clock />
            <GlobalStyles />
        </Provider>
    );
}

export default App;