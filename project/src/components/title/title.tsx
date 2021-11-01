import classNames from 'classnames';

type PageTitleProps = {
  IsHidden?: boolean
  children: React.ReactNode,
  className?: string,
}

function PageTitle({className, children, IsHidden = false}:PageTitleProps): JSX.Element {
  return <h1 className={classNames(IsHidden ? 'visually-hidden' : 'page-title', className)}>{children}</h1>;
}

export default PageTitle;
