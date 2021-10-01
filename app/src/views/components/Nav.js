import React from "react"
import styled from "styled-components"
import { Link, useHistory, useLocation } from "react-router-dom"
import { FiSearch } from "react-icons/fi"

const Nav = () => {
  const [searchOpen, setSearchOpen] = React.useState(false)
  const [searchValue, setSearchValue] = React.useState("")
  const history = useHistory()
  const { pathname } = useLocation()
  const [YOffset, setYOffset] = React.useState(0)

  const handleFormSubmit = (event) => {
    event.preventDefault()

    alert("You are looking for " + searchValue)
  }

  const changeOffSet = () => {
    setYOffset(window.pageYOffset)
  }

  React.useEffect(() => {
    window.addEventListener("scroll", changeOffSet)

    return () => {
      window.removeEventListener("scroll", changeOffSet)
    }
  })

  return (
    <NavWrapper offSet={YOffset} searchOpen={searchOpen}>
      <div className="menu">
        <p onClick={() => history.push("/")}> Neftlix</p>
        <ul>
          <Link to="/" className={pathname === "/" ? "active" : ""}>
            Home
          </Link>
          <Link to="/movies" className={pathname === "/movies" ? "active" : ""}>
            Movies
          </Link>
          <Link to="/new" className={pathname === "/new" ? "active" : ""}>
            New and popular
          </Link>
          <Link to="/myList" className={pathname === "/myList" ? "active" : ""}>
            My list
          </Link>
        </ul>
      </div>
      <div className="searchBar">
        <form onSubmit={handleFormSubmit}>
          <input type="search" placeholder="Search for movies, series..." />
        </form>
        <FiSearch onClick={() => setSearchOpen(!searchOpen)} />
      </div>
    </NavWrapper>
  )
}

export default Nav

const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  transition: 0.3s ease-in background;
  background: ${(props) =>
    props.offSet < 40 ? "transparent" : props.theme.bgNav};
  z-index: 2;

  > div.menu {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 45px;

    > p {
      color: #ff0101;
      font-size: 1.3rem;
      font-weight: 600;
      letter-spacing: 2px;
      cursor: pointer;
      text-shadow: 1px 1px hsl(2523, 40%, 35%), 1px 1px hsl(25, 20%, 10%);
      font-family: "Source Sans Pro", Helvetica, Arial, sans-serif;
    }
    > ul {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      > a {
        text-decoration: none;
        display: inline-block;
        list-style: none;
        letter-spacing: 2px;
        font-size: 0.9rem;
        font-weight: 300;
        padding: 0 20px;
        color: ${(props) => props.theme.fontColor};
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

        &.active {
          color: ${(props) => props.theme.neftlixColor};
        }

        &:hover {
          font-weight: 300;
        }
      }
    }
  }

  > div.searchBar {
    margin-right: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    > form > input {
      opacity: ${(props) => (props.searchOpen === true ? "100%" : "0%")};
      height: 25px;
      width: 220px;
      margin-right: 35px;
      border-radius: 1px;
      background: rgba(0, 0, 0, 0.35);
      transition: 0.15s ease-out opacity;
      font-size: 0.8rem;
      border: 1px solid
        ${(props) =>
          props.theme.name === "darkMode"
            ? `rgba(0, 0, 0, 10)`
            : `rgba(255, 255, 255, 100)`};
      color: ${(props) => props.theme.fontColor};
    }

    > svg {
      height: 28px;
      width: 30px;
      color: ${(props) => props.theme.fontColor};
      cursor: pointer;
    }
  }
`
