import Card from './components/Card'

function App() {
  return (
    <>
      <section className='section-center'>
        <div className='title-center'>
          <h2 className=''>Projects</h2>
        </div>

        <div className='card-center'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </>
  )
}

export default App
