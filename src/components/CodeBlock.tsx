import { CodeBlock, dracula } from 'react-code-blocks'

interface CodeBlockProps {
  code: string,
  language: string,
}

const CodeBlockElement = ({ code, language }: CodeBlockProps) => {
  return (
    <CodeBlock
      text={code}
      language={language}
      // showLineNumbers={showLineNumbers}
      theme={dracula}
    />
  );
}

export default CodeBlockElement