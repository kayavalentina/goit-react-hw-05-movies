import { AppNav, AppNavLink } from './Navigation.styled';

const Navigation = () => {
  return (
    <AppNav>
      <AppNavLink to="/">Home</AppNavLink>
      <AppNavLink to="/movies">Movies</AppNavLink>
    </AppNav>
  );
};

export default Navigation;