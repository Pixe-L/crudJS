// Crear un estado
const state = {
    currentPage: 0,
    users: [],
}

// Crear metodos con nombres autoexplicativos
const loadNextPage = async() => {
    throw new Error('Not implemented');
}

const loadPreviousPage = async() => {
    throw new Error('Not implemented');
}

//TODO: implementar
const onUserChange = () => {
    throw new Error('Not implemented');
}

const reloadPage = async() => {
    throw new Error('Not implemented');
}

export default {
    loadNextPage,
    loadPreviousPage,
    onUserChange,
    reloadPage,

    // Tener acceso desde fuera del store para saber la página actual y el user
    // Objetos por referencia
    getUsers: () => [...state.users],
    // Valores primitivos pasan por valor
    getCurrentPage: () => state.currentPage,
}