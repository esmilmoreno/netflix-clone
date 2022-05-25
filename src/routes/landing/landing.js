import './landing.css'
import { useEffect } from "react"
import Collapsible from '../../components/landing/collapsible'
import GetStartedForm from '../../components/landing/get-started-form'
import Footer from './footer'
import { useAuth } from '../../auth-context'
import Navbar from './navbar'

export default function Landing() {
  const { user } = useAuth()
  
  useEffect( () => {
    document.title = 'Netflix United States - Watch TV Shows Online, Watch Movies Online'
  }, [])
  
  return (
    <div className='landing-page'>
      <div className='landing-header'>
        <div className='landing-header-overlay'>
          <Navbar />

          <div className='landing-section landing-header-content'>
            <div className='section-container landing-header-container'>
              {user && <h2 className='heading-2' style={{marginBottom: '0'}}>Welcome back!</h2>}
              <h1 className='heading-1'>Unlimited movies, TV shows, and more.</h1>
              <h2 className='heading-2'>Watch anywhere. Cancel anytime.</h2>

              <GetStartedForm />
            </div>
          </div>
        </div>
        
        <img className='landing-header-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/6e32b96a-d4be-4e44-a19b-1bd2d2279b51/a4b5113a-9691-4f7a-9c7d-a8f1559624e0/DO-en-20220516-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="not found" />
      </div>

      <section className='landing-section'>
        <div className='section-container row'>
          <div className='section-column'>
            <h1 className='section-title-heading'>Enjoy on your TV.</h1>
            <h2 className='section-content-heading'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
          </div>
          <div className='section-column'>
            <div className='miniplayer-1'>
              <video loop autoPlay muted>
                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" />
              </video>
              <img alt='not found' src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png' />
            </div>
          </div>
        </div>
      </section>

      <section className='landing-section'>
        <div className='section-container row'>
          <div className='section-column first'>
            <div className='miniplayer-1'>
              <img alt='not found' src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg' />
            </div>
          </div>
          <div className='section-column'>
            <h1 className='section-title-heading'>Download your shows to watch offline.</h1>
            <h2 className='section-content-heading'>Save your favorites easily and always have something to watch.</h2>
          </div>
        </div>
      </section>

      <section className='landing-section'>
        <div className='section-container row'>
          <div className='section-column'>
            <h1 className='section-title-heading'>Watch everywhere.</h1>
            <h2 className='section-content-heading'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</h2>
          </div>
          <div className='section-column'>
            <div className='miniplayer-2'>
              <video loop autoPlay muted>
                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4" />
              </video>
              <img alt='not found' src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png' />
            </div>
          </div>
        </div>
      </section>

      <section className='landing-section'>
        <div className='section-container row'>
          <div className='section-column first'>
            <div className='miniplayer-1'>
              <img alt='not found' src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/kidsValueProp.png' />
            </div>
          </div>
          <div className='section-column'>
            <h1 className='section-title-heading'>Create profiles for kids.</h1>
            <h2 className='section-content-heading'>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h2>
          </div>
        </div>
      </section>

      <section className='landing-section'>
        <div className='section-container'>
          <h1 className='section-title-heading' style={{textAlign: 'center'}}>Frequently Asked Questions</h1>
          
          <div className='faqs'>
            <Collapsible title='What is Netflix?'>
              Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.<br /><br />You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
            </Collapsible>
            <Collapsible title='How much does Netflix cost?'>
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD7.99 to USD13.99 a month. No extra costs, no contracts.
            </Collapsible>
            <Collapsible title='Where can I watch?'>
              Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.<br /><br />You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
            </Collapsible>
            <Collapsible title='How do I cancel?'>
              Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
            </Collapsible>
            <Collapsible title='What can I watch on Netflix?'>
              Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
            </Collapsible>
            <Collapsible title='Is Netflix good for kids?'>
              The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.<br /><br />Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
            </Collapsible>
          </div>

          <GetStartedForm />
        </div>
      </section>

      <Footer />
    </div>
  )
}