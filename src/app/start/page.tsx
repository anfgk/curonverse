"use client";

import React from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import Title from "@/components/Title";
import Description from "@/components/common/description";
import Button from "@/components/common/button";
import StarBackground from "@/components/StarBackground";
import SpaceScene from "@/components/SpaceScene";
import SubText from "@/components/SubText";
import { usePageVisitLogger } from "@/hooks/usePageVisitLogger";

const Container = styled.div`
  width: 375px;
  height: 812px;
  background: #0f1227;
  margin: 0 auto;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

// Start 페이지 컴포넌트 정의
export default function Start() {
  const router = useRouter();
  
  // 페이지 방문 로깅 설정
  usePageVisitLogger({
    pageType: "OPEN_TEASER",
    getUserId: () => {
      const id = localStorage.getItem("userId");
      return id ? parseInt(id) : null;
    },
  });

  // 탐험 시작 버튼 클릭 시 실행되는 함수
  const handleStartClick = () => {
    router.push("/onboarding");
  };

  return (
    <Container>
      <StarBackground />
      <ContentWrapper>
        <SubText text="어서오세요." variant="subtitle" />
        <Title mainText="나의 감정은 현재" highlightText="어떤 행성" subText="에 머물고 있을까요?" />
        <Description firsttext="감정을 담는 그릇, 나만의 작은감정" secondtext="우주 탐색을 시작해보세요." />
        <SpaceScene />
        <Button onClick={handleStartClick}>탐험 시작하기</Button>
      </ContentWrapper>
    </Container>
  );
}
