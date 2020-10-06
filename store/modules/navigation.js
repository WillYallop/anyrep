const state = () => ({
    navStatus: false
})
  
const mutations = {
    // Toggle Navigation
    toggleNavigation(state) {
        state.navStatus = !state.navStatus;
    }

}

export default {
    state, 
    mutations
}