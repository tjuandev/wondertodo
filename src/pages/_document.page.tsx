import Document, { Head, Html, Main, NextScript } from 'next/document'
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="description"
            content="Este aqui é o WonderTodo, seu melhor gerenciador de tarefas."
          />
          <meta
            name="keywords"
            content="todo, tasks, tarefa, realtime, colaborativo"
          />
          <meta name="copyright" content="© Thiago Juan" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
            rel="stylesheet"
          />
          <link rel="apple-touch-icon" href="/favicon.png" />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
