import { Link, useParams } from 'react-router-dom'

function getData() {
  return [
    {
      name: 'Santa Monica',
      number: 1995,
      amount: '$10,800',
      due: '12/05/1995',
    },
    {
      name: 'Stankonia',
      number: 2000,
      amount: '$8,000',
      due: '10/31/2000',
    },
    {
      name: 'Ocean Avenue',
      number: 2003,
      amount: '$9,500',
      due: '07/22/2003',
    },
    {
      name: 'Tubthumper',
      number: 1997,
      amount: '$14,000',
      due: '09/01/1997',
    },
    {
      name: 'Wide Open Spaces',
      number: 1998,
      amount: '$4,600',
      due: '01/27/2998',
    },
  ]
}

function DynamicPage() {
  const data = getData()
  return (
    <section>
      <h1>DynamicPage</h1>
      {data.map((el) => (
        <Link key={el.number} to={`/dynamic/${el.number}`}>
          {el.number}
        </Link>
      ))}
      <DynamicItem />
    </section>
  )
}

export function DynamicItem() {
  const params = useParams()
  return (
    <h1>
      Item <pre>{JSON.stringify(params)}</pre>
    </h1>
  )
}

export default DynamicPage
