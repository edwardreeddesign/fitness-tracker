import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <h2>FITNESS TRACKER</h2>
      <Navigation>
        {/* future login */}
        <li>Login</li>
        <li>Sign-up</li>
      </Navigation>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 4rem;
  background: var(--clr-dark);
  color: var(--clr-light);
  display: flex;
  align-items: center;
  justify-content: space-around;

  h2 {
    margin-left: 4rem;
    font-family: var(--ff-accent);
  }
`;

const Navigation = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;
  width: 10%;
  font-size: 1.5rem;
`;

export default Header;
