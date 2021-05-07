import Markdown from 'markdown-to-jsx'
import styled from 'styled-components'
import CodeBlock from 'src/components/CodeBlock'

const md = `
# O que é e porque usar o Next\n
Next é um framework criado a partir do react, lançado em 2016 por Guillermo Rauch, que hoje também é co-fundador da Vercel que disponibiliza um sistema de servidores onde podemos fazer deploys de qualquer aplicações de front. O Next engloba três grandes recursos de front-end (SSR, SPA e SSG) e nessa apresentação, vamos falar um pouco sobre elas.\n
# Geração de sites estáticos (Static Site Generation)\n
- Ocorre quando um servidor se comunica com uma API, gera as páginas estáticas possíveis e as armazena numa CDN, assim o usuário acessa diretamente o conteúdo sem ter que executar nada\n
  ## Vantagens\n
  - Não utiliza muito o servidor\n
  - Melhor performance entre todos\n
  - Flexibilidade para usar qualquer servidor, já que o conteúdo é estatico (html, css)\n
  ## Desvantagens\n
  - Tempo de build elevado, caso haja muitas páginas\n
  - Dificuldade para realizar atualizações constantes, por ter que buildar todas as páginas sempre que houver mudanças\n
  ## Quando utilizar\n
  - Site simples sem muitas interações com usuário\n
  - Se não sofre muitas modificações\n
  - Se não há muitas páginas\n
  - Quando a performance é extremamente importante\n
  - Ex.: Landing Pages, Blog, Portifólios\n
# Renderização no lado do cliente (Single Page Application):\n
- Ocorre quando ao acessar uma página, serão baixados arquivos essenciais (app.js) do CDN e depois serão feitas requisições para uma API, que por sua vez retornarão o conteúdo a ser exibido. A partir disso, a navegação pela página, será feita através de novas requisições para renderizar novos conteúdos, sem a necessidade de rebaixar o js.\n
  ## Vantagens\n
  - Dinamismo na página sem refresh de conteúdo\n
  - Velocidade na navegação após first-load\n
  - Ótimo para aplicações web, por seguir esse tipo de estrutura e por possuir muitas bibliotecas disponíveis\n
  ## Desvantagens\n
  - Load inicial pode ser muito longo\n
  - Performance imprevisível já que requisições sendo feitas ao lado do cliente, podem afetar o tempo de renderização de conteúdo\n
  - Dificuldades em SEO, Crawler do google não consegue analisar informações por não esperar o js rodar antes de analisar o esqueleto da página\n
  ## Quando utilizar\n
  - Quando SEO não é uma prioridade\n
  - Quando páginas possuem muitas interações e buscam evitar reloads entre rotas\n
  - Quando as informações serão diferentes para cada usuário\n
  - Ex.: Twitter, FB, Spotify\n
# Renderização no lado do servidor (Server Side Rendering)\n
- Ocorre quando ao acessar uma página, o servidor faz as requisições necessárias a API, renderiza e retorna ao usuário com o conteúdo todo pronto.\n
  ## Vantagens\n
  - Ótimo para SEO, já que o google quando acessar a página terá todas as informações dela disponíveis já que foi renderizada antes do acesso (server side)\n
  - Mais rapidez no carregamento do conteúdo já que ele é acessado todo pronto\n
  - Processamento baixo no lado do cliente\n
  ## Desvantagens\n
  - TTFB(time to first byte) maior, já que o servidor que fará todo o processo de renderização da página, então o usuário só terá acesso ao conteúdo após ele ter sido todo construído ao lado do servidor\n
  - Reload completo em mudanças de rotas\n
  ## Quando utilizar\n
  - Quando há necessidade de uma SPA, porém com loading mais rápido\n
  - Quando o conteúdo muda frequentemente\n
  - Quando número de páginas é grande\n
  - Quando SEO é importante\n
  - Ex.: Ecommerce, Sites de notícias\n
# CSS-in-JS (Styled-jsx, Styled Components, Emotion, etc)\n
# Extensível (babel, webpack, typescript)\n
# Otimização pra produção\n
# Code Splitting\n
# Conclusão, de maneira geral, o Next nos traz:\n
- Melhorias no processo de desenvolvimento, benefícios de custo e tempo.\n
- Melhorias de performance como pudemos ver\n
- SEO\n
`

const MarkdownContainer = styled.article`
  border-top: 1px solid;
  h1, h2, p {
    margin-bottom: .75rem;
  }
  h1 {
    margin-top: 2rem;
  }
  ul {
    margin-left: 1rem;
  }
`

const code = `const Presentation = () => {
  return (
    <MarkdownContainer>
      <CodeBlock  />
      <Markdown>
        {md}
      </Markdown>
    </MarkdownContainer>
  )
}`

const Presentation = () => {
  return (
    <MarkdownContainer>
      <CodeBlock code={code} language={'jsx'} />
      <Markdown>
        {md}
      </Markdown>
    </MarkdownContainer>
  )
}

export default Presentation
