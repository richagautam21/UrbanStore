import { NavbarScroller } from "./Navbar.styles";
import { Brand } from "./Navbar.styles";
import { Ul } from "./Navbar.styles";
import { Li } from "./Navbar.styles";



const Navbar = (props: {
  brand: { name: string; to: string };
  links: Array<{ name: string; to: string }>;
}) => {
  const { brand, links } = props;
  const NavLinks: any = () =>
    links.map((link: { name: string; to: string }) => (
      <Li key={link.name}>
        <a href={link.to}>{link.name}</a>
      </Li>
    ));
  return (
    <NavbarScroller>
      <Brand href={brand.to}>{brand.name}</Brand>
      <Ul>
        <NavLinks />
      </Ul>
    </NavbarScroller>
  );
};

export default Navbar;
