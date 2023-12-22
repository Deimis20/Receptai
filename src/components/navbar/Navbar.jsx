import { Container, Navbar, Nav, NavLink } from "react-bootstrap";
import './navBar.scss';
import { ReactComponent as Lupa } from "../svg/lupa.svg";
import { ReactComponent as Logotipas } from "../svg/logo.svg";
import { ReactComponent as Account } from "../svg/accPerson.svg";
import { useEffect } from "react";
import { useState } from "react";

const NavBars=()=>{
  const menuData = [
    {
      patch: "/",
      name: "Home",
    },
    {
      patch: "/recipes",
      name: "Recipes",
    },
        {
      patch: "/categories",
      name: "Categories",
    },
    {
      patch: "/community",
      name: "Community",
    },
    {
      patch: "/about",
      name: "About us",
    }
    
  ];


  


  const [categories, setCategories] = useState([]);
const [search, setsearch] = useState(false)
const handleSearch=(data)=>{
  setsearch(data);
}
  useEffect(() => {{
    if(search)
    try{
        fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
          .then(response => 
            console.log(response)
            
          .then(data => setCategories(data)));
        }catch (msg) {
          console.log(msg);
        }
  }}, [search]);






  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Logotipas></Logotipas> <span className="logotype">Recipedia</span>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {menuData.map((item) => (
              <NavLink to={item.patch} key={item.name}>
                <div className="list_item">{item.name}</div>
              </NavLink>
            ))}
          </Nav>
          <Nav className="ms-auto">
            <Lupa></Lupa>
            <Account></Account>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBars;