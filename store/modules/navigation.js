const state = () => ({
    navStatus: false,
    covidPopup: true
})
  
const mutations = {
    // Toggle Navigation
    toggleNavigation(state) {
        state.navStatus = !state.navStatus;
    },
    // Hide covid popup
    hideCovidPopUp(state) {
        state.covidPopup = false
    }

}

export default {
    state, 
    mutations
}