import { useSelector } from 'react-redux'
import { UserState } from '../reducers/userReducers'
import { RootState } from '../store'
import { Link } from 'react-router-dom'
import {useTranslation} from "react-i18next";

const HomeScreen = () => {
  const {t, i18n} = useTranslation()
  const userLogin = useSelector<RootState, UserState>(
    (state: RootState) => state.userLogin
  )

  const { userInfo } = userLogin
  const email = userInfo ? userInfo.email : null

  return email ? (
    <h1 data-testid="password-exist">Welcome {email}</h1>
  ) : (
    <h1 data-testid="password-exist">{t<string>('home')}</h1>
  )
}

export default HomeScreen
