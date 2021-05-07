import { CodeBlock, dracula } from 'react-code-blocks'
import styled from 'styled-components'

interface CodeBlockProps {
  code: string,
  language: string,
  highlight?: any
}

const CodeBlockWrapper = styled.div`
  width: 100%;
  font-family: 'Fira Code', monospace;
  > span {
    width: 70%;
    margin: 0 auto;
  }
`

const CodeBlockElement = ({ code, language, highlight }: CodeBlockProps) => {
  return (
    <CodeBlockWrapper>
      <CodeBlock
        text={code}
        language={language}
        // showLineNumbers={showLineNumbers}
        theme={dracula}
        highlight={highlight}
      />
    </CodeBlockWrapper>
  );
}

export default CodeBlockElement