import { Routes, Route, Link } from 'react-router-dom'
import Detail from './page/Detail'
import DynamicPage, { DynamicItem } from './page/Dynamic'
import Home from './page/Home'
import SubPath from './page/Home/SubPath'
import SubPath2 from './page/Home/SubPath2'
import SearchPeople from './page/SearchPeople'
import './styles.css'

function App() {
  return (
    <div style={{ border: '1px solid red' }}>
      <h1>Ini Root Apps kita</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Link to="/">Home</Link>
        <Link to="/search-people">Search People</Link>
        <Link to="/detail">Detail</Link>
        <Link to="/dynamic">Dynamic Page</Link>
      </div>
      <div style={{ border: '1px solid blue' }}>
        <Routes>
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>404!</p>
              </main>
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="search-people" element={<SearchPeople />} />
          <Route path="detail" element={<Detail />}>
            <Route path="/detail" element={<SubPath />} />
            <Route path="/detail/sub2" element={<SubPath2 />} />
          </Route>
          <Route path="dynamic" element={<DynamicPage />}>
            <Route path="/dynamic/:number" element={<DynamicItem />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
