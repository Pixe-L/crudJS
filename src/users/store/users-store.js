import { loadUsers } from "../use-cases/load-users-by-page";

// Crear un estado
const state = {
    currentPage: 0,
    users: [],
}

// Crear metodos con nombres autoexplicativos
const loadNextPage = async() => {
    const users = await loadUsers(state.currentPage + 1)
    if (users.length === 0) return;
    state.currentPage += 1;
    state.users = users;
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

    /**
     * 
     * @returns {User[]}
     */
    // Tener acceso desde fuera del store para saber la página actual y el user
    // Objetos por referencia
    getUsers: () => [...state.users],
    /**
     * 
     * @returns {Number}
     */
    // Valores primitivos pasan por valor
    getCurrentPage: () => state.currentPage,
}