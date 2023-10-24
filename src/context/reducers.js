export default function reducers(state, action) {

  switch (action.type) {

    case "set":
      return {
        ...state,
        select: state.select = action.lang,
        current: state.current = state.select === "arabic" ? state.english : state.arabic


      }


    default: throw new Error('Error from The reducer ')
  }


}
