const state = {
  subjects: {
    'ID1': {
      name: 'Português',
    },
    'ID2': {
      name: 'Quimica',
    },
    'ID3': {
      name: 'Biologia',
    },
    'ID4': {
      name: 'Matematica',
    },
    'ID5': {
      name: 'Fisica',
    },
    'ID6': {
      name: 'Geografia',
    },
  }
}

const mutations = {

}

const actions = {

}

const getters = {
  subjects: (state) => {
    console.log(state.subjects)
    return state.subjects
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
