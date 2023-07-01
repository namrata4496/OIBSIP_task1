import React, {useState} from 'react'
import Login2 from '../components/Login2';
import Register2 from '../components/Register2';

export default function SignInScreen() {

    const [currentView,setView] = useState("logIn")

   const changeView = (view) => {
       setView(view)
      }

    const  currentPage = () => {
        switch(currentView) {
          case "signUp":
            return (
              <Register2 changeView={changeView}></Register2>
            )
            break
          case "logIn":
            return (
             <Login2 changeView={changeView}></Login2>
            )
            break
          case "PWReset":
            return (
              <form>
              <h2>Reset Password</h2>
              <fieldset>
                <legend>Password Reset</legend>
                <ul>
                  <li>
                    <em>A reset link will be sent to your inbox!</em>
                  </li>
                  <li>
                    <label for="email">Email:</label>
                    <input type="email" id="email" required/>
                  </li>
                </ul>
              </fieldset>
              <button>Send Reset Link</button>
              <button type="button" onClick={ () =>changeView("logIn")}>Go Back</button>
            </form>
            )
          default:
            break
        }
      }
    
    


  return (
    <div>
      <section id="entry-page">
        {currentPage()}
      </section>
    </div>
  )
}
 










