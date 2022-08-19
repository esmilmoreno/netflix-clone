import './featured-section.css'

export default function FetuaturedSection({ movie }) {
  if(movie) return (
    <section className='featured-section'>
      <img alt="not found" src={movie.trailer} />
      <div className='featured-overlay'>
        <img className='featured-title-image' src={movie.titleImage} alt='not found' />
        <p className='featured-description'>
          {movie.description.slice(0,150)}...
        </p>
        <div className='featured-buttons'>
          <button className='featured-button'>
            <img alt='not found' src='/icons/play.png' />
            Play
          </button>
          <button className='featured-button'>
            <img alt='not found' src='/icons/info.png' />
            More Info
          </button>
        </div>
      </div>
    </section>
  )
}