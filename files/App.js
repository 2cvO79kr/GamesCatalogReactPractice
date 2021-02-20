import { useEffect, useReducer } from 'react';
import { gamesAPI } from './api/api';
import style from './App.module.css';
import ContentContainer from './components/Content/ContentContainer';
import SearchPanelContainer from './components/SearchPanel/SearchPanelContainer';
import SortPanelContainer from './components/SortPanel/SortPanelContainer';
import contentReducer, {
  getActiveTagAC, getDataAC, setCurrentTagsAC,
  setParametrsAC, setPlatformAC, sortAC,
  setCurrentGameIdAC, setCurrentGameAC, setClearCardAC,
  setCurrentPageAC, setInputValueAC
} from './redux/contentReducer';
import { Context } from './context'
import { BrowserRouter } from 'react-router-dom';

const App = () => {

  const defaultState = {
    inputValue: '',
    data: [],
    defaultParametrs: {
      tag: null,
      category: null,
      platform: null,
      'sort-by': null,
    },
    currentGameId: null,
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
    },
    currentTags: [],
    sortBy: [
      { type: 'alphabetical', choosen: false },
      { type: 'relevance', choosen: false },
      { type: 'popularity', choosen: false },
      { type: 'release-date', choosen: false },
    ],
    platforms: [
      { platform: 'pc', choosen: false },
      { platform: 'browser', choosen: false }
    ],
    tags: [
      { tag: 'mmorpg', choosen: false },
      { tag: 'shooter', choosen: false },
      { tag: 'strategy', choosen: false },
      { tag: 'moba', choosen: false },
      { tag: 'racing', choosen: false },
      { tag: 'sports', choosen: false },
      { tag: 'social', choosen: false },
      { tag: 'sandbox', choosen: false },
      { tag: 'open-world', choosen: false },
      { tag: 'survival', choosen: false },
      { tag: 'pvp', choosen: false },
      { tag: 'pve', choosen: false },
      { tag: 'pixel', choosen: false },
      { tag: 'voxel', choosen: false },
      { tag: 'zombie', choosen: false },
      { tag: 'turn-based', choosen: false },
      { tag: 'first-person', choosen: false },
      { tag: 'third-Person', choosen: false },
      { tag: 'top-down', choosen: false },
      { tag: 'tank', choosen: false },
      { tag: 'space', choosen: false },
      { tag: 'sailing', choosen: false },
      { tag: 'side-scroller', choosen: false },
      { tag: 'superhero', choosen: false },
      { tag: 'permadeath', choosen: false },
      { tag: 'card', choosen: false },
      { tag: 'battle-royale', choosen: false },
      { tag: 'mmo', choosen: false },
      { tag: 'mmofps', choosen: false },
      { tag: 'mmotps', choosen: false },
      { tag: '3d', choosen: false },
      { tag: '2d', choosen: false },
      { tag: 'anime', choosen: false },
      { tag: 'fantasy', choosen: false },
      { tag: 'sci-fi', choosen: false },
      { tag: 'fighting', choosen: false },
      { tag: 'action-rpg', choosen: false },
      { tag: 'action', choosen: false },
      { tag: 'military', choosen: false },
      { tag: 'martial-arts', choosen: false },
      { tag: 'flight', choosen: false },
      { tag: 'low-spec', choosen: false },
      { tag: 'tower-defense', choosen: false },
      { tag: 'horror', choosen: false },
      { tag: 'mmorts', choosen: false }
    ],
    listParametrs: {
      pageSize: 10,
      currentPage: 1
    }
  }

  const [state, dispatch] = useReducer(contentReducer, defaultState)

  const getSort = (event) => {
    let text = event.currentTarget.innerHTML.toString().toLowerCase()
    dispatch(sortAC(text))

    dispatch(setParametrsAC())
  }

  const getPlatform = (event) => {
    let text = event.currentTarget.innerHTML.toString().toLowerCase()
    dispatch(setPlatformAC(text))
    dispatch(setParametrsAC())
  }

  const setTag = (event) => {
    let value = event.currentTarget.innerHTML.toString()
    dispatch(getActiveTagAC(value))
    dispatch(setCurrentTagsAC())
    dispatch(setParametrsAC())
  }

  const getInfo = (event) => {
    let text = event.currentTarget.value
    dispatch(setInputValueAC(text))
    console.log(state.inputValue)
  }

  const setId = (event) => {
    let value = event.currentTarget.innerHTML.toString()
    dispatch(setCurrentGameIdAC(value))
  }

  const changePage = (event) => {
    let page = event.currentTarget.innerHTML
    dispatch(setCurrentPageAC(page))
  }

  const setCurrentGame = (result) => {
    return dispatch(setCurrentGameAC(result.data))
  }

  const setClearCard = () => {
    dispatch(setClearCardAC())
  }


  useEffect(() => {
    state.defaultParametrs.tag == null
      ? gamesAPI.getModifyList(state.defaultParametrs)
        .then(result => result.status == 200
          ? dispatch(getDataAC(result.data))
          : dispatch(getDataAC([])))
      : gamesAPI.getTagFiter(state.defaultParametrs)
        .then(result => result.status == 200
          ? dispatch(getDataAC(result.data))
          : dispatch(getDataAC([])))
  }, [state.defaultParametrs])

  /* .getModifyList() c null-выми параметрами работает как .getList() */

  return (
    <BrowserRouter>
      <Context.Provider value={{
        getSort,
        getPlatform,
        setTag,
        getInfo,
        setId,
        setCurrentGame,
        changePage,
        tags: state.tags,
        platforms: state.platforms,
        sortBy: state.sortBy,
        gameData: state.currentGameData,
        currentId: state.currentGameId,
        listParametrs: state.listParametrs,
        data: state.data,
        errorStatus: state.errorStatus,
        inputValue: state.inputValue
      }}>
        <div className={style.container}>
          <SearchPanelContainer />
          <ContentContainer data={state.data}
            setClearCard={setClearCard} />
          <SortPanelContainer />
        </div>
      </Context.Provider>
    </BrowserRouter>
  )
}

export default App;
