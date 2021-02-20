let GET_LIST = 'GET_LIST'
let ACTION_TAG = 'ACTION_TAG'
let CURRENT_TAGS = 'CURRENT_TAGS'
let SORT = 'SORT'
let SET_PLATFORM = 'SET_PLATFORM'
let SET_PARAMETRS = 'SET_PARAMETRS'
let SET_CURRENT_GAME = 'SET_CURRENT_GAME'
let SET_CURRENT_GAME_ID = 'SET_CURRENT_GAME_ID'
let SET_CLEAR_CARD = 'SET_CLEAR_CARD'
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
let GET_FIND_LIST = 'GET_FIND_LIST'

let contentReducer = (state, action) => {
    switch (action.type) {
        case GET_LIST:
            {
                return {
                    ...state,
                    data: action.data
                }
            }
        case ACTION_TAG:
            {
                return {
                    ...state,
                    tags: [...state.tags.map(item => item.tag == action.value
                        ? {
                            tag: item.tag,
                            choosen: !item.choosen
                        }
                        : item
                    )],
                }
            }
        case CURRENT_TAGS: {
            return {
                ...state,
                currentTags: [...state.tags
                    .filter(item => item.choosen)
                    .map(name => name.tag)
                ]
            }
        }
        case SORT: {
            return {
                ...state,
                sortBy: [...state.sortBy
                    .map(item => item.type == action.value && !item.choosen
                        ? {
                            ...item,
                            type: item.type,
                            choosen: true
                        }
                        : {
                            ...item,
                            type: item.type,
                            choosen: false
                        }
                    )]
            }
        }
        case SET_PLATFORM: {
            return {
                ...state,
                platforms: [...state.platforms.map(item => item.platform == action.value && !item.choosen
                    ? {
                        ...item,
                        platform: item.platform,
                        choosen: true
                    }
                    : {
                        ...item,
                        platform: item.platform,
                        choosen: false
                    }
                )]
            }
        }
        case SET_PARAMETRS: {
            return {
                ...state,
                defaultParametrs: {
                    platform: [...state.platforms.filter(item => item.choosen).map(item => item.platform)].length != 0
                        ? [...state.platforms.filter(item => item.choosen).map(item => item.platform)].join()
                        : null,
                    tag: [...state.currentTags].length > 1 ? [...state.currentTags].join('.') : null,
                    category: [...state.currentTags].length == 1 ? state.currentTags.join() : null,
                    'sort-by': [...state.sortBy.filter(item => item.choosen).map(item => item.type)].length != 0
                        ? [...state.sortBy.filter(item => item.choosen).map(item => item.type)].join()
                        : null,
                },
                listParametrs: {
                    ...state.listParametrs,
                    currentPage: 1
                }
            }
        }
        case SET_CURRENT_GAME_ID: {
            return {
                ...state,
                currentGameId: [...state.data
                    .filter(item => item.title === action.value)
                    .map(item => item.id)
                ].toString()
            }
        }
        case SET_CURRENT_GAME: {
            return {
                ...state,
                currentGameData: action.data
            }
        }
        case SET_CLEAR_CARD: {
            return {
                ...state,
                currentGameData: {
                    id: '',
                    title: '',
                    status: '',
                    developer: '',
                    genre: '',
                    platform: '',
                    publisher: '',
                    release_date: '',
                    description: '',
                    short_description: '',
                    screenshots: [],
                    minimum_system_requirements: '',
                    game_url: '',
                    freetogame_profile_url: '',
                    thumbnail: '',
                }
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                listParametrs: {
                    ...state.listParametrs,
                    currentPage: action.value
                }
            }
        }
        case GET_FIND_LIST: {
            return {
                ...state,
                inputValue: action.text,
                data: state.data.sort((a, b) => {
                    return a.title.toLowerCase().includes(action.text, 0)
                        ? -1
                        : b.title.toLowerCase().includes(action.text, 0)
                            ? 1
                            : 0
                })
            }
        }
        default:
            return state;
    }
}

export const getDataAC = (data) => {
    return {
        type: GET_LIST,
        data
    }
}

export const getActiveTagAC = (value) => {
    return {
        type: ACTION_TAG,
        value
    }
}

export const setCurrentTagsAC = () => {
    return {
        type: CURRENT_TAGS
    }
}

export const setParametrsAC = () => {
    return {
        type: SET_PARAMETRS
    }
}

export const sortAC = (value) => {
    return {
        type: SORT,
        value
    }
}

export const setPlatformAC = (value) => {
    return {
        type: SET_PLATFORM,
        value
    }
}

export const setCurrentGameIdAC = (value) => {
    return {
        type: SET_CURRENT_GAME_ID,
        value
    }
}

export const setCurrentGameAC = (data) => {
    return {
        type: SET_CURRENT_GAME,
        data
    }
}

export const setClearCardAC = () => {
    return {
        type: SET_CLEAR_CARD
    }
}

export const setCurrentPageAC = (value) => {
    return {
        type: SET_CURRENT_PAGE,
        value
    }
}

export const setInputValueAC = (text) => {
    return {
        type: GET_FIND_LIST,
        text
    }
}

export default contentReducer