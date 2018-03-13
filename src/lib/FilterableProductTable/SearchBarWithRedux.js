import { connect } from 'react-redux';

import SearchBarComponent from './components/SearchBar';
import { filterTextChanged, inStockOnlyChanged } from '../actions';

const SearchBarWithRedux = connect(
  function mapStateToProps(state) {
    // buscamos los valores que nos interesan para el SearchBar
    // fíjate que el SearchBar no tiene por qué saber nada de los productos
    const {
      filterText, // Ver en reducers
      inStockOnly
    } = state.AppReducer;

    // y devolvemos las nuevas props
    return {
      filterText,
      inStockOnly
    };
  },
  // El segundo parámetro de `connect` es `mapDispatchToProps`.
  // El el mundo Redux al llamar a un `action creator` lo único que obtenemos
  // es un objeto que expresa que es lo que ha sucedido, pero no dispara la acción.
  // Para esto necesitas llamar a la función `dispatch` del store.
  // Esto es lo que hace `mapDispatchToProps` mapea llamadas a `dispatch` para
  // tus `action creators`
  function mapDispatchToProps(dispatch) {  // Se  usa por convención. Para hacer comunicación de las acciones con los events del usuario ha programado
    return {
      setFilterText(newFilterText) { // setFilterText se crea recén en este archivo
        dispatch(filterTextChanged(newFilterText)); // filterTextChanged está definido en las acciones
      },
      setInStockOnly(newValue) {
        dispatch(inStockOnlyChanged(newValue));
      }
    };
  }
)(SearchBarComponent);

export default SearchBarWithRedux;