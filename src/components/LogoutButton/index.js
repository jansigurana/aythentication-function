// Write your JS code here
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const LogoutButon = props => {
  const onClickLogout = () => {
    const {histroy} = props
    Cookies.remove('jwt_token')
    histroy.replace('/login')
  }
  return (
    <button type="button" className="logout-button" onClick={onClickLogout}>
      Logout
    </button>
  )
}
export default withRouter(LogoutButon)