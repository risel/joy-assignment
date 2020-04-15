import styled from 'styled-components';
export const StyledColumn = styled.div`
`; 
export const ListContainer = styled(StyledColumn)`
	overflow-y: auto;
	width: 646px;
	height: auto;
	margin-top: 3px;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 2px 0 0 ${p=> p.theme.colors.border};
`;