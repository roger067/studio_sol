import styled, { keyframes } from 'styled-components';

interface SkeletonProps {
  width?: string;
  height?: string;
  borderRadius?: string;
}

const shimmer = keyframes`
  0% {
    background-position: -200%;
  }
  100% {
    background-position: 200%;
  }
`;

const Skeleton = styled.div<SkeletonProps>`
  min-width: ${(props) => props.width || '100%'};
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '20px'};
  border-radius: ${(props) => props.borderRadius || '4px'};
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200%;
  animation: ${shimmer} 1.5s infinite;
`;

export default Skeleton;
