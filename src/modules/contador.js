export default {
    namespaced: true,
    state : {
        contador : 0,
    }, 
    mutations: {
       sum(state, payload) {
           state.contador = state.contador + payload
       }
}
}