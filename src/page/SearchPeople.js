import { Component, Fragment } from 'react'
import '../styles.css'

async function getPeople() {
  const res = await fetch('https://ghibliapi.herokuapp.com/people').then((res) =>
    res.json()
  )
  return res
}

class ClassComponent extends Component {
  constructor(props) {
    super(props)
    this.props = props
    this.state = {
      data: [],
      hasilFilter: [],
    }
  }

  handleChange(e) {
    const filter = e.target.value
    const filtered = filter
      ? this.state.data.filter((item) => {
          return item.name.toLowerCase().includes(filter.toLowerCase())
        })
      : []
    this.setState({ hasilFilter: filtered })
  }

  componentDidMount() {
    getPeople().then((res) => {
      this.setState({ data: res })
    })
  }

  render() {
    return (
      <Fragment>
        <div>Cari nama karakter</div>
        <input onChange={(e) => this.handleChange(e)} />
        <pre style={{ textAlign: 'left' }}>
          {JSON.stringify(this.state.hasilFilter, null, 1)}
        </pre>
      </Fragment>
    )
  }
}

export default function SearchPeople() {
  return (
    <div className="App">
      <h1>Cari Nama Karakter</h1>
      <ClassComponent />
    </div>
  )
}
