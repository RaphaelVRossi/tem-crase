import React from 'react';

import Layout from '@components/Layout/Layout';
import Link from 'next/link';

export default function Sobre() {
  return (
    <Layout justifyContent="flex-start" title="Sobre">
      <>
        <h1>A história do tem crase</h1>
        <p>
          O site surgiu depois de inumeras pesquisas na internet do tipo &#8222;
          volta as aulas tem crase?&#8222;. E encontrar respostas gigantes que
          explicavam todas as regras da crase não respondiam apenas &#8222;NÃO!
          &#8222;
        </p>
        <p>
          A ideia inicial era construir uma inteligência artificial que aprende
          com o tempo as regras da crase. Depois de vários anos tentando
          entender a regra, desisti. Acabei criando um site onde vou tentar
          cadastrar o maior número possível de frases que possuam crase (ou
          dúvidas) e mostrar as respostas.
        </p>
        <p>
          O projeto foi criado por{' '}
          <a
            href="https://gnun.es"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Gabriel Nunes
          </a>{' '}
          (no Twitter sou o{' '}
          <a
            href="https://twitter.com/nunesgabriel"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            @nunesgabriel
          </a>
          ). Trabalho como desenvolvedor de software, organizo uns eventos e sou
          entusiasta de design.
        </p>
        <p>
          Espero que você curta o projeto e sinta-se à vontade para{' '}
          <Link href="/ajude">
            <a className="link">ajudar a melhorá-lo</a>
          </Link>
          !
        </p>
        <h3>O site já contou com a ajuda de algumas pessoas</h3>
        <p>
          Muito obrigado! Se você ajudou, mas seu nome não está na lista, pode
          me mandar um e-mail em gabriel@onionrings.com.br. Pode mandar um
          e-mail também caso queira vincular algum link no seu nome!
        </p>
        <ul>
          <li>
            Mônica Guerretta: Ela criou o projeto{' '}
            <a
              href="https://www.instagram.com/qualeocerto/"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              &#8222;Qual é o certo?&#8222;
            </a>{' '}
            e ajudou em muitas respostas que temos aqui.
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/dalvacorrea/"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Dalva Corrêa
            </a>{' '}
            que compartilhou uma planilha com vários termos que causam dúvidas
            de crase
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/taniadarc/"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Tânia d&apos;Arc
            </a>{' '}
            que criou o texto da página &#8222;O que é crase?&#8222;
          </li>
        </ul>
      </>
    </Layout>
  );
}
