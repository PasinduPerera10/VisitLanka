import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const ViewBeach = () => {
  const { id } = useParams();
  const [beach, setBeach] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get(`http://localhost:8060/beaches/beach/view/${id}`)
      .then((response) => {
        setBeach(response.data);
        setLoading(false);
        setError('');
      })
      .catch((error) => {
        setLoading(false);
        setError('Error while fetching beach details.');
        console.error("Error while fetching beach details:", error);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!beach) {
    return <div>Beach not found</div>;
  }

  // Generate a unique class name based on the beach ID
  const cardClass = `unique-card-${beach.id}`;

  return (
    <CenteredDiv>
      <div>
        {/* <h1>Beach Details</h1> */}
        <CustomCard className={cardClass}>
          <CustomCardTitle>{beach.title}</CustomCardTitle>
          <CustomImage variant="top" src={`/beachimages/${beach.image1}`} alt="Beach" />
          <CardBody>
            <CustomText>{beach.description}</CustomText>
            <CustomText>Province: {beach.province}</CustomText>
            <CustomText>District: {beach.district}</CustomText>
            <CustomText>Category: {beach.category}</CustomText>
          </CardBody>
        </CustomCard>
      </div>
    </CenteredDiv>
  );
};

export default ViewBeach;

// Styled-components styles

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const CustomCard = styled.div`
  width: 18rem;
  border: 1px solid #ccc;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px;
  padding: 20px;
`;

const CustomCardTitle = styled.h2`
  color: #000; /* Orange color */
  font-size: 24px;
  margin-bottom: 10px;
`;

const CustomImage = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const CardBody = styled.div`
  max-height: 200px;
  overflow: hidden;
`;

const CustomText = styled.p`
  text-align: center;
  margin-bottom: 5px;
`;