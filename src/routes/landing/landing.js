import './landing.css'
import { useEffect } from "react"
import Collapsible from '../../components/landing/collapsible'
import GetStartedForm from '../../components/landing/get-started-form'
import Footer from './footer'

export default function Landing() {
  useEffect( () => {
    document.title = 'Netflix United States - Watch TV Shows Online, Watch Movies Online'
  }, [])
  
  return (
    <div className='landing-page'>
      <div className='landing-header'>
        <div className='landing-header-overlay'>
          <div className='landing-header-navbar'>
            <svg viewBox="0 0 111 30" className="landing-header-logo" focusable="false"><g id="netflix-logo"><path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z" id="Fill-14"></path></g></svg>
            <button className='landing-button'>Sign In</button>
          </div>

          <div className='landing-section landing-header-content'>
            <div className='section-container landing-header-container'>
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