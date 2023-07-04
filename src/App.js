import './App.css';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux'; // Importez le composant Provider de react-redux
import rootReducer from './reducers'; // Importez le reducer
import rootSaga from './sagas'; // Importez le saga

const sagaMiddleware = createSagaMiddleware(); //installation de redux-saga

const store = configureStore({ //création du store
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga); //lancement de redux-saga

function App() {
  return (
    <Provider store={store}> {/* Ajoutez le composant Provider et fournissez le store */}
      <div className="App">
        BONJOUR !
      </div>
    </Provider>
  );
}

export default App;
