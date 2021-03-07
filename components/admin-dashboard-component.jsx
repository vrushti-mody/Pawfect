import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 2.5em;
  color: black;
  line-height: 1em;
  text-align: center;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`;

const Wrapper = styled.section`
  font-family: sans-serif;
  padding: 4em;
  height: 100vh;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  font-size: 1.5rem;
  line-height: 1.6;
  display: inline-block;
  text-align: center;
  padding: 5%;
  margin: 20px 20px;
  background: white;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

  .card-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px;
    font-size: 3rem;
  }

  &:hover {
    border: 1px solid #4268f6;
    box-shadow: 0 4px 12px 0 rgba(137, 138, 154, 0.4);
  }
`;

const Dashboard = () => {
  return (
    <div>
      <Wrapper>
        <Title>Welcome to the Admin Panel</Title>
        <CardWrapper>
          <Card>
            <div className="card-icon">👤</div>
            Login or logout to the admin panel
          </Card>
          <Card>
            <div className="card-icon">💻</div>
            View all information stored in the database
          </Card>
          <Card>
            <div className="card-icon">📑</div>
            Manage orders, users, products and categories
          </Card>
        </CardWrapper>
      </Wrapper>
    </div>
  );
};

export default Dashboard;
