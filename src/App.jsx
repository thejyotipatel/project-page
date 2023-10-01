import { useFeatchData } from './components/FeatchData'
import Card from './components/Card'

function App() {
  const { loading, projects } = useFeatchData()

  if (loading) {
    return (
      <section className='section-center'>
        <div className='title-center'>
          <h2 className=''>Loading...</h2>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className='section-center'>
        <div className='title-center'>
          <h2 className=''>Projects</h2>
        </div>

        <div className='card-center'>
          {projects.map((item) => {
            return <Card key={item.id} item={item} />
          })}
        </div>
      </section>
    </>
  )
}

export default App
