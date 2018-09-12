const state = () => ({
    modalStatus: {
        adminLogin: false,
        remove: false
    },
    inputs: {
        adminId: '',
        adminPassword: ''
    }
});

const mutations = {
    showModal (state, payload) {
        state.modalStatus[payload] = true;
    },
    hideModal (state, payload) {
        state.modalStatus[payload] = false;
        state.inputs.adminId = "";
        state.inputs.adminPassword = "";
    },
    changeInput (state, payload) {
        const { name, value } = payload;
        state.inputs[name] = value;
    }
};


export default {
    namespaced: true,
    state,
    mutations
}