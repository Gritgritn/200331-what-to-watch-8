import PageHeader from '../header/header';
import Logo from '../logo/logo';
import PageTitle from '../title/title';
import LoginForm from '../login-form/login-form';
import PageFooter from '../page-footer/page-footer';

function LoginScreen(): JSX.Element {
  return (
    <div className="user-page">
      <PageHeader className="user-page__head">
        <Logo />

        <PageTitle IsHidden>WTW</PageTitle>
      </PageHeader>

      <LoginForm className="user-page__content" />

      <PageFooter />
    </div>
  );
}

export default LoginScreen;
