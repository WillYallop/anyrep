const state = () => ({
    book: {
        appliance: {
            type: '',
            make: '', 
            model: '',
            issue: ''
        },
        personal: {
            fName: '', 
            lName: '', 
            postCode: '', 
            address: '', 
            town: '', 
            county: ''
        },
        contact: {
            phone: '',
            email: ''
        }
    }
})
  
const mutations = {
    // Appliance data
    setAppType(state, data) {
        state.book.appliance.type = data;
    },
    setAppMake(state, data) {
        state.book.appliance.make = data;
    },
    setAppModel(state, data) {
        state.book.appliance.model = data;
    },
    setAppIssue(state, data) {
        state.book.appliance.issue = data;
    },
    // Personal Data
    setFName(state, data) {
        state.book.personal.fName = data;
    },
    setLName(state, data) {
        state.book.personal.lName = data;
    },
    setPostCode(state, data) {
        state.book.personal.postCode = data;
    },
    setAddress(state, data) {
        state.book.personal.address = data;
    },
    setTown(state, data) {
        state.book.personal.town = data;
    },
    setCounty(state, data) {
        state.book.personal.county = data;
    },
    // Contact Data
    setPhone(state, data) {
        state.book.contact.phone = data;
    },
    setEmail(state, data) {
        state.book.contact.email = data;
    },

    // Reset
    resetBooking(state) {
        state.book = {
            appliance: {
                type: '',
                make: '', 
                model: '',
                issue: ''
            },
            personal: {
                fName: '', 
                lName: '', 
                postCode: '', 
                address: '', 
                town: '', 
                county: ''
            },
            contact: {
                phone: '',
                email: ''
            }
        }
    }
}

export default {
    state, 
    mutations
}