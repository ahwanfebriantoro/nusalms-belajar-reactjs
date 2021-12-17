import { Link, Outlet } from 'react-router-dom'

function Detail() {
  return (
    <>
      <h1>Ini detail</h1>
      <div>
        <Link to="/detail">sub1</Link>
        <Link to="/detail/sub2">sub2</Link>
      </div>
      <div style={{ border: '1px dotted black' }}>
        <Outlet />
      </div>
    </>
  )
}

export default Detail
