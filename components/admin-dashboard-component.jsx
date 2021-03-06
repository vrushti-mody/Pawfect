import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 2.5em;
  color: #663399;
  font-family: 'Times New Roman';
  line-height: 1em;
  text-align: center;
`;

const Lead = styled.p`
font-size: 1.5em;
  color: black;
  line-height: 1em;
  font-family: 'Times New Roman';
`;

const Wrapper = styled.section`
  padding: 4em;
  background: white;
`;

const imgStyle = {
  width: "100%",
  height: "30%",
};

const Dashboard = () => {
  return (
    <div>
      <img
        style={imgStyle}
        src="images/banner-admin-page.jpeg"
        alt="dashboard-head"
      />
      <Wrapper>
        <Title>Welcome to the Admin Panel</Title>
          <Lead>
          <p>You can can do the following here:</p>
      <ol>
        <li>
          Login or logout to the admin panel
        </li>
        <li>
        View all the information stored in the database.
        </li>
        <li>
        View/add/edit/delete orders, users, products and categories.
        </li>
        <li>
        The cart model cannot be modified by you because a cart is either modified by the logged in user before the purchase or deleted after the purchase.
        </li>
      </ol>
      </Lead>


      </Wrapper>
    </div>
  );
};

export default Dashboard;
