import { useState } from "react";
import { useAuth } from "../../../auth-context";
import Loader from "../../../components/landing/loader";

const plans = [
  {
    name: 'Basic',
    price: '7.99',
    quality: 'Good',
    resolution: '480p'
  },
  {
    name: 'Standard',
    price: '10.99',
    quality: 'Better',
    resolution: '1080p'
  },
  {
    name: 'Premium',
    price: '13.99',
    quality: 'Best',
    resolution: '4K + HDR'
  },
]

export default function SignUp() {
  const [currentPlan, setCurrentPlan] = useState(plans[0])
  const [loading, setLoading] = useState(false)

  const { createAccount } = useAuth()

  const startMembership = async () => {
    setLoading(true)

    try {
      await createAccount(currentPlan.name)
    } catch (err) {
      console.log(err);
      setLoading(false)
    }
  }
  
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
              {plans.map( (plan, ind) => {
                return (
                  <td key={ind} onClick={ () => setCurrentPlan(plan) }>
                    <div className={`plan ${currentPlan.name === plan.name && 'active'}`}>{plan.name}</div>
                  </td>
                )
              })}
            </tr>
            <tr>
              <td>Monthly price</td>
              {plans.map( (plan, ind) => {
                return (
                  <td key={ind} className={`plan-detail ${currentPlan.name === plan.name && 'active'}`}>${plan.price}</td>
                )
              })}
            </tr>
            <tr>
              <td>Video quality</td>
              {plans.map( (plan, ind) => {
                return (
                  <td key={ind} className={`plan-detail ${currentPlan.name === plan.name && 'active'}`}>{plan.quality}</td>
                )
              })}
            </tr>
            <tr>
              <td>Resolution</td>
              {plans.map( (plan, ind) => {
                return (
                  <td key={ind} className={`plan-detail ${currentPlan.name === plan.name && 'active'}`}>{plan.resolution}</td>
                )
              })}
            </tr>
            <tr>
              <td>Watch on your TV, computer, mobile phone and tablet</td>
              {plans.map( (plan, ind) => {
                return (
                  <td key={ind} className={`plan-detail ${currentPlan.name === plan.name && 'active'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-check2" viewBox="0 0 16 16">
                      <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                    </svg>
                  </td>
                )
              })}
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
          <button disabled={loading} className='signup-button wide' onClick={startMembership}>
          {loading ? 
            <Loader />
            :
            'Start Membership'
          }
          </button>
        </div>
      </div>
    </div>
  )
}