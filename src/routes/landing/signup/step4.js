import { Link, useLocation } from "react-router-dom";

export default function SignUp() {
  const { state } = useLocation()

  return (
    <div className='signup-step'>
      <div className='step-container wide'>
        <label className='current-step-number'>STEP <b>4</b> OF <b>4</b></label>
        <h1 className='signup-step-title'>Choose the plan that’s right for you</h1>
        <p className='signup-step-details-item'>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-check2" viewBox="0 0 16 16">
            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
          </svg>
          Watch all you want. Ad-free.
        </p>
        <p className='signup-step-details-item'>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-check2" viewBox="0 0 16 16">
            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
          </svg>
          Recomendations just for you.
        </p>
        <p className='signup-step-details-item'>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-check2" viewBox="0 0 16 16">
            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
          </svg>
          Change or cancel your plan anytime.
        </p>

        <table className='plans-table'>
          <tbody>
            <tr>
              <td></td>
              <td>
                <div className='plan active'>Basic</div>
              </td>
              <td>
                <div className='plan'>Standard</div>
              </td>
              <td>
                <div className='plan'>Premium</div>
              </td>
            </tr>
            <tr>
              <td>Monthly price</td>
              <td>$7.99</td>
              <td>$10.99</td>
              <td>$13.99</td>
            </tr>
            <tr>
              <td>Video quality</td>
              <td>Good</td>
              <td>Better</td>
              <td>Best</td>
            </tr>
            <tr>
              <td>Resolution</td>
              <td>480p</td>
              <td>1080p</td>
              <td>4K + HDR</td>
            </tr>
            <tr>
              <td>Watch on your TV, computer, mobile phone and tablet</td>
              <td>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-check2" viewBox="0 0 16 16">
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                </svg>
              </td>
              <td>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-check2" viewBox="0 0 16 16">
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                </svg>
              </td>
              <td>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-check2" viewBox="0 0 16 16">
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                </svg>
              </td>
            </tr>
          </tbody>
        </table>

        <p className='notes'>
          HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions, See out Terms of Use for more details.
        </p>

        <p className='notes'>
          Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard and 1 with Basic.
        </p>

        <div  style={{display: 'flex'}}>
          <Link to='/signup/step4' state={state} className='signup-button wide'>Next</Link>
        </div>
      </div>
    </div>
  )
}