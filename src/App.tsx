import ArticleList from './components/ArticleList'
import Header from './components/Header'
import { ArticleProvider } from './context/ArticleContext/ArticleProvider'
import { MenuProvider } from './context/MenuContext/MenuProvider'

function App() {
  return (
    <>
      <ArticleProvider>
        <MenuProvider>
          <Header />
        </MenuProvider>
        <ArticleList />
      </ArticleProvider>
    </>
  )
}

export default App
