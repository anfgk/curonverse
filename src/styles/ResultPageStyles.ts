import styled from "styled-components";
import { mbtiCircleColors } from "../data/mbtiData";

export const Container = styled.div`
  width: 375px;
  margin: 0 auto;
  color: white;
  display: flex;
  flex-direction: column;

  /* 모바일에서 콘텐츠가 잘리지 않도록 오버플로우만 처리 */
  @media (max-width: 375px) {
    width: 100vw;
  }

  @media (max-height: 812px) {
    height: 100vh;
  }
`;

export const TopSection = styled.div`
  background: #98c6d0;
  padding-bottom: 20px;
  flex: 1;
`;

export const StyledBottomSection = styled.div`
  min-height: 350px;
  padding: 0 20px;
  width: 100%;
  display: flex;
  bottom: -30px;
  flex-direction: column;
  justify-content: space-between;

`;

export const Header = styled.div`
  text-align: left;

`;

export const PageNumber = styled.div`
  font-size: 18px;
  font-weight: 800;
  margin-top: 24px;
  margin-bottom: 12px;
`;

export const MainTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  line-height: 1.4;
  margin-bottom: 12px;
`;

export const Description = styled.div<{ color?: string }>`
  color: ${(props) => props.color || "inherit"};
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 36px;
  opacity: 0.95;
  white-space: pre-line;
  margin-top: 10px;
  line-height: 1.5;
`;

export const SubTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  line-height: 1.8;
  opacity: 0.9;
  white-space: pre-line;
  max-height: 240px;
  overflow-y: auto;
  padding-right: 8px;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.4);
    border-radius: 2px;
    transition: background 0.2s ease;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.6);
  }

  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.4) rgba(255, 255, 255, 0.1);
`;

export const KeywordSection = styled.div`
`;

export const KeywordContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: -30px;
  margin-bottom: 36px;
  position: relative;


`;

export const KeywordCircle = styled.div.withConfig({
  shouldForwardProp: (prop) => !["index", "mbtiType"].includes(prop),
})<{ index: number; $mbtiType: string }>`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: ${(props) => {
    const colors = mbtiCircleColors[props.$mbtiType] || mbtiCircleColors["EPSA"];
    return props.index === 0
      ? colors.light
      : props.index === 1
      ? colors.medium
      : colors.dark;
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: 600;
  color: #fff;
  position: relative;
  z-index: ${(props) => (props.index === 0 ? 1 : props.index === 1 ? 2 : 3)};
  margin-left: ${(props) => (props.index > 0 ? "-10px" : "0")};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

`;

export const KeywordLabel = styled.div`
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  margin: 12px 0 20px;
  position: relative;
  &::after {
    position: absolute;
    right: 95px;
    bottom: -5px;
    font-size: 16px;
  }
`;

export const AnalysisSection = styled.div`
  width: 100%;
  flex: 1;
`;

export const AnalysisItem = styled.div`
  margin-bottom: 15px;
`;

export const AnalysisHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  cursor: pointer;
`;

export const AnalysisTitle = styled.h4`
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  color: white;
`;

export const AnalysisContent = styled.div<{ isOpen: boolean }>`
  max-height: ${(props) => (props.isOpen ? "500px" : "0")};
  overflow: scroll;
  transition: max-height 0.3s ease-in-out;
`;

export const AnalysisText = styled.p`
  margin: 0;
  padding: 0 0 15px;
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
`;

export const ArrowIcon = styled.span<{ isOpen: boolean }>`
  color: white;
  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0)")};
  transition: transform 0.3s ease;
`;

export const PageIndicator = styled.div`
  text-align: center;
  padding: 20px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const PageIcon = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "↓";
    color: #cb59ff;
    font-size: 18px;
    opacity: 0.8;
  }
`;

export const PageText = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

export const CurationTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: white;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 12px 0 12px 4px;
`;

export const CurationItem = styled.div`
  display: flex;
  padding: 10px 4px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const CurationIcon = styled.span`
  width: 20px;
  height: 20px;
  background: #fff;
  border-radius: 50%;
  color: #000;
  margin-right: 10px;
  padding: 2.5px;
  font-size: 14px;
`;

export const CurationText = styled.p`
  font-size: 16px;
  flex: 1;
`;

export const ScrollWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 16px;
  padding: 20px 16px;
  margin-top: 24px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const VideoWrapper = styled.div`
  width: 100%;
  height: 160px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 16px;
`;

export const VideoThumbnail = styled.div.withConfig({
  shouldForwardProp: (prop) => !["imageUrl"].includes(prop),
})<{ $imageUrl?: string }>`
  width: 100%;
  height: 160px;
  border-radius: 12px;
  background-color: #ddd;
  background-image: ${({ $imageUrl }) =>
    $imageUrl ? `url(${$imageUrl})` : "none"};
  background-size: cover;
  background-position: center;
  margin-bottom: 16px;
`;

export const EmptyVideo = styled.div`
  width: 100%;
  height: 160px;
  border-radius: 12px;
  background: #ddd;
  margin-bottom: 16px;
`;

export const StartButton = styled.button<{ disabled?: boolean }>`
  margin-top: 16px;
  width: 100%;
  height: 40px;
  border-radius: 20px;
  border: none;
  font-weight: bold;
  font-size: 14px;
  background-color: ${({ disabled }) => (disabled ? "#ccc" : "#000")};
  color: ${({ disabled }) => (disabled ? "#666" : "#fff")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;