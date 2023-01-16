function NavList({ children, style }) {
  const listStyle = style === 'main-nav' ? 'main-nav' : 'footer-nav';

  return <ul className={listStyle}>{children}</ul>;
}

export default NavList;
