import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const UlStyled = styled.ul`
  display: flex;
  gap: 24px;
`;
UlStyled.displayName = 'UlStyled';

export const LiStyled = styled.li`
  list-style: none;
`;
LiStyled.displayName = 'LiStyled';

export const LinkStyled = styled(Link)`
  color: #2f4031;
  text-decoration: none;
`;
LinkStyled.displayName = 'LinkStyled';
