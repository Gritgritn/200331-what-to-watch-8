import Logo from '../logo/logo';
import PageFooter from '../page-footer/page-footer';
import PageTitle from '../title/title';
import PageHeader from '../header/header';

function LoginScreen(): JSX.Element {
  return (
    <div className="user-page">
      <PageHeader className="user-page__head">
        <Logo />

        <PageTitle hidden>WTW</PageTitle>
      </PageHeader>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form">
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <PageFooter />
    </div>
  );
}

export default LoginScreen;
