import React from "react"
import styled from "styled-components"
const MyList = () => {
  return (
    <MyListWrapper>
      <h1 className="topTitle">My list</h1>
      <p>some content here</p>
    </MyListWrapper>
  )
}

export default MyList

const MyListWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.fontColor};
`
