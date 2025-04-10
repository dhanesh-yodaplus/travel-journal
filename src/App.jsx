import Header from './components/header.jsx'
import Entry from './components/entry.jsx'
import data from './data.js'

export default function App() {
  return (
    <>
      <Header />
      {data.map((item, index) => (
        <Entry key={index} {...item} />
      ))}
    </>
  )
}
