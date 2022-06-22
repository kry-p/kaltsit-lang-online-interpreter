// React core
import React from 'react';
import styled from 'styled-components';

const MarkdownH2 = styled.div`
  font-size: 1.625rem;
  line-height: 3rem;
`;

const MarkdownH3 = styled.div`
  font-size: 1.2rem;
  line-height: 1.6rem;
`;

const MarkdownText = styled.span`
  font-size: 1rem;
  line-height: 1.25rem;
`;

const MarkdownLinebreak = styled.div`
  height: 1rem;
`;

const MarkdownCodeblock = styled.div`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  margin: 0.125rem;
  border-radius: 0.25rem;

  background: rgb(192, 192, 192);
`;

const MarkdownWrapper = styled.div`
  padding: 1rem;
`;

const MarkdownUnorderedList = styled.ul`
  padding-left: 1rem;
  list-style-type: disc;
`;

const MarkdownListItem = styled.li`
  line-height: 1.5rem;
`;

const Markdown = () => {
  return (
    <MarkdownWrapper>
      <MarkdownH2>문법</MarkdownH2>
      <MarkdownLinebreak />
      <MarkdownText>
        켈시어는 <MarkdownCodeblock>모르는건가</MarkdownCodeblock>{' '}
        <MarkdownCodeblock>그렇게 될 수밖에 없는가</MarkdownCodeblock>{' '}
        <MarkdownCodeblock>그렇군</MarkdownCodeblock>{' '}
        <MarkdownCodeblock>몰?루는건가</MarkdownCodeblock>{' '}
        <MarkdownCodeblock>그렇다면</MarkdownCodeblock>{' '}
        <MarkdownCodeblock>그럴수는 없다</MarkdownCodeblock>{' '}
        <MarkdownCodeblock>네가 원하는 답은 해 주지 않겠다</MarkdownCodeblock>{' '}
        <MarkdownCodeblock>그리 쉬운 것도 못 하나?</MarkdownCodeblock>{' '}
        <MarkdownCodeblock>그것도 못 하나?</MarkdownCodeblock>{' '}
        <MarkdownCodeblock>많은 일이 있었지</MarkdownCodeblock>{' '}
        <MarkdownCodeblock>다음에 알려주겠다</MarkdownCodeblock>{' '}
        <MarkdownCodeblock>지금은 때가 아니다</MarkdownCodeblock>와<br />
        <MarkdownCodeblock>.</MarkdownCodeblock>
        <MarkdownCodeblock>,</MarkdownCodeblock>
        <MarkdownCodeblock>!</MarkdownCodeblock> 으로 구성되는 한국어 기반
        난해한 프로그래밍 언어입니다.
      </MarkdownText>
      <MarkdownLinebreak />
      <MarkdownH3>시작과 끝</MarkdownH3>
      <MarkdownLinebreak />
      <MarkdownText>
        모든 프로그램은 <MarkdownCodeblock>그런건가...</MarkdownCodeblock>로
        시작하여{' '}
        <MarkdownCodeblock>이 이야기는 그만하도록 하지.</MarkdownCodeblock>로
        끝나야 합니다.
      </MarkdownText>
      <MarkdownLinebreak />
      <MarkdownH3>숫자의 표기</MarkdownH3>
      <MarkdownLinebreak />
      <MarkdownText>
        마침표와 쉼표를 이어 붙여서 표기합니다.
        <br />
        마침표는 1, 쉼표는 -1에 각각 대응하며, 이어 붙여져 있을 경우 개수만큼
        더하고 빼어 값을 냅니다.
      </MarkdownText>
      <MarkdownLinebreak />
      <MarkdownH3>변수의 할당과 출력</MarkdownH3>
      <MarkdownLinebreak />
      <MarkdownText>
        변수는 자연수인 인덱스를 통해 접근할 수 있습니다.
        <br />
        <MarkdownCodeblock>...모르는건가..</MarkdownCodeblock>와 같이 작성하며,
        왼쪽 점의 개수는 정수인 값, 오른쪽 점의 개수는 변수가 저장될
        인덱스입니다.
        <br />
        <MarkdownCodeblock>그렇군</MarkdownCodeblock>을 사용하여 변수를 출력할
        수 있습니다.
        <br />
        <MarkdownCodeblock>그렇군</MarkdownCodeblock> 앞의 점 개수를 인덱스로
        하는 변수의 값을 출력하며, 뒤에는 어떤 문자열이 붙어도 처리에 변화가
        없으나 <MarkdownCodeblock>!</MarkdownCodeblock>가 붙을 경우 해당 숫자에
        대응되는 유니코드 문자를 출력합니다.
      </MarkdownText>
      <MarkdownLinebreak />
      <MarkdownH3>연산</MarkdownH3>
      <MarkdownLinebreak />
      <MarkdownText>
        각각 정해진 문자열 앞의 스페이스로 구분된 점의 개수를 읽어, 해당 점의
        개수를 인덱스로 하는 두 개의 값에 대해 연산을 수행합니다.
        <MarkdownLinebreak />
        <MarkdownUnorderedList>
          <MarkdownListItem>그리 쉬운 것도 못 하나? (덧셈)</MarkdownListItem>
          <MarkdownListItem>그것도 못 하나? (뺄셈)</MarkdownListItem>
          <MarkdownListItem>많은 일이 있었지 (곱셈)</MarkdownListItem>
          <MarkdownListItem>다음에 알려주겠다 (나눗셈)</MarkdownListItem>
          <MarkdownListItem>지금은 때가 아니다 (나머지)</MarkdownListItem>
        </MarkdownUnorderedList>
        갸령,{' '}
        <MarkdownCodeblock>... ....그리 쉬운 것도 못 하나?</MarkdownCodeblock>와
        같이 사용할 수 있으며 이 경우 3번째 변수와 4번째 변수의 합을 출력하게
        됩니다.
        <MarkdownLinebreak />
        구문 뒤에 <MarkdownCodeblock>.</MarkdownCodeblock> 또는{' '}
        <MarkdownCodeblock>,</MarkdownCodeblock>가 붙으면 마침표의 개수만큼 +1,
        쉼표의 개수만큼 -1을 하여 나온 값을 인덱스로 하는 변수에 대입합니다.
      </MarkdownText>
      <MarkdownLinebreak />
      <MarkdownH3>제어문</MarkdownH3>
      <MarkdownLinebreak />
      <MarkdownText>
        <MarkdownCodeblock>그렇다면</MarkdownCodeblock>을 입력하면 조건문이
        되며, 앞에 붙은 점의 개수를 인덱스로 하는 변수의 값이 0이면 그 뒤의
        구문을 실행합니다.
        <br />
        <MarkdownCodeblock>그럴수는 없다</MarkdownCodeblock>는 코드의 흐름을
        변경하는 명령으로, goto와 용법이 같습니다. 뒤에 붙은 점의 개수에
        해당하는 소스 코드의 라인으로 이동합니다.
      </MarkdownText>
      <MarkdownLinebreak />
      <MarkdownH3>기타</MarkdownH3>
      <MarkdownLinebreak />
      <MarkdownText>
        <MarkdownCodeblock>몰?루는건가</MarkdownCodeblock>를 입력하면 강제
        줄바꿈을 할 수 있으며, 해당 라인의{' '}
        <MarkdownCodeblock>몰?루는건가</MarkdownCodeblock> 뒤의 모든 문자열은
        무시됩니다.
      </MarkdownText>
      <MarkdownLinebreak />
      <MarkdownH2>저작권</MarkdownH2>
      <MarkdownLinebreak />
      <MarkdownText>
        이 프로젝트에 사용된 삽화의 저작권은 Hypergryph에 있습니다.
        <br />
        또, favicon과 apple-touch-icon의 저작권은 몰루는건가... 이모티콘의
        저작자인 네티캣에게 있습니다.
      </MarkdownText>
      <MarkdownLinebreak />
      <MarkdownLinebreak />
    </MarkdownWrapper>
  );
};

export default Markdown;
