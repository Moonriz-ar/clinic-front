import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const UlStyled = styled.ul`
  display: flex;
  gap: 24px;
`;

export const LiStyled = styled.li`
  list-style: none;
`;

export const LinkStyled = styled(Link)`
  color: #2f4031;
  text-decoration: none;
`;
