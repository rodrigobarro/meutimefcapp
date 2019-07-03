/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';

const Teste = styled.View`
  width: 90%;
  margin: 0 auto;
`;

const Title = styled.Text`
  text-align: center;
  padding-top: 20px;
  font-size: 24px;
  font-weight: bold;
  color: #fffed8;
  margin-bottom: 40px;
`;

const Topic = styled.Text`
  font-size: 25px;
  font-weight: bold;
  font-style: italic;
  color: #fffed8;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const SubTopic = styled.Text`
  font-size: 20px;
  font-weight: bold;
  font-style: italic;
  color: #fffed8;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Paragraph = styled.Text`
  color: #fffed8;
`;

export default class PrivacyModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const APP_NAME = 'TESTE';
    const DOMAIN = 'TESTE';
    const SUPPORT_EMAIL = 'TESTE';
    return (
      <Teste>
        <Title>POLÍTICA DE PRIVACIDADE E TRATAMENTO DA INFORMAÇÃO</Title>

        <Paragraph>
          O {APP_NAME} está comprometido com a privacidade dos dados pessoais dos USUÁRIOS no{' '}
          {DOMAIN}. O objetivo desta Política de Privacidade e Tratamento da Informação é
          disponibilizar aos participantes da {DOMAIN}, de forma transparente e de fácil
          entendimento, todas as informações e operações realizadas pelo {DOMAIN}, acerca das
          técnicas e métodos que são utilizados para coleta, uso, acesso, correção e
          compartilhamento de suas informações pessoais.
        </Paragraph>

        <Topic>Compromisso</Topic>

        <SubTopic>1. Princípio da Identificação</SubTopic>

        <Paragraph>
          O {DOMAIN} é uma plataforma eletrônica de “fantasy game” cujo objetivo é participar de
          diversos torneios de futebol do mundo real escalando jogadores de diversos clubes
          permitindo ao Usuário formar uma equipe que pontuará de acordo com a performance desses
          jogadores na vida real e e consequência acumular pontos durante a competição para ver quem
          escala os melhores times e faz mais pontos. O {APP_NAME}, e gerenciado pelo {APP_NAME} e
          respeita todas as regras de coleta, uso, acesso, correção e compartilhamento de suas
          informações do Torcedor.com assim como as regras próprias do {DOMAIN} constantes desta
          Politica. O {APP_NAME} conta com uma plataforma de software e website dedicados,
          compreendendo aplicações de software que tem como finalidade a informação e entretenimento
          dos seus USUÁRIOS CREDENCIADOS.
        </Paragraph>

        <Paragraph>
          Esta Política de Privacidade e Tratamento da Informação está embasada nos Princípios
          Internacionais e Nacionais, amplamente reconhecidos no âmbito das “Práticas justas no
          tratamento da informação”, notadamente aos Princípios da Organization for Economic
          Co-operation and Development de 1980, Princípios da Diretiva Européia (95/46/CE),
          Princípios de Ética da Federal Trade Comission norte-americana e Convenção Européia
          expedida pelo Conselho da Europa em 28 de janeiro de 1981, Constituição da República
          Federativa do Brasil, Código de Defesa do Consumidor, Decreto 7.962 de 15 de Março de
          2013, bem como a demais legislação pátria vigente.
        </Paragraph>

        <SubTopic>2. Princípio da Informação</SubTopic>

        <Paragraph>
          Estamos comprometidos com a privacidade dos dados pessoais dos USUÁRIOS cadastrados no
          {DOMAIN}, conferindo-lhe os padrões de segurança necessários para coleta e guarda das
          informações e assegurando os princípios éticos de transparência no tratamento, controle e
          uso de tais informações. Temos como prática colher apenas as informações e os dados
          necessários para possibilitar a consecução das finalidades do {DOMAIN} e a perfeita
          consecução dos serviços disponibilizados. As informações transacionais e dados colhidos
          pelo {DOMAIN} são confidenciais, destinando-se apenas aos propósitos da presente politica
          e as finalidades inerentes a {APP_NAME}. As informações serão processadas com a finalidade
          operacional e de melhoramento do relacionamento com o seu Usuario. Toda e qualquer
          utilização de dados pessoais que implique em cessão ou transmissão a terceiros, será
          tratada em caráter estatístico e geral.
        </Paragraph>

        <Topic>Tratamento dos dados pessoais dos usuários do {DOMAIN}</Topic>

        <SubTopic>3. Princípio do Consentimento Expresso</SubTopic>

        <Paragraph>
          Não comercializamos ou cedemos a terceiros as informações pessoais individualizadas dos
          USUÁRIOS e EMPRESAS participantes. Para a perfeita execução dos serviços, porém, pode vir
          a ser necessário transferir dados e informações pessoais para parceiros ou fornecedores de
          serviços, sempre visando a realização das operações disponibilizadas no {DOMAIN}.
        </Paragraph>

        <SubTopic>4. Princípio da Integridade de Dados Pessoais</SubTopic>

        <Paragraph>
          A {DOMAIN} não modifica ou altera os dados e informações pessoais fornecidos pelos seus
          USUÁRIOS, sendo estes, portanto, nos termos da legislação em vigor os únicos responsáveis
          pela veracidade das informações que forem cadastradas no {DOMAIN}.
        </Paragraph>

        <Topic>Abrangência da Política de Tratamento da Informação</Topic>

        <SubTopic>5. Princípios da Abrangência e Limitações</SubTopic>

        <Paragraph>
          A Política de Privacidade e Tratamento da Informação da {DOMAIN} abrange a coleta,
          tratamento e transmissão dos dados no {DOMAIN} de toda a sua organização, podendo envolver
          geolocalização e sincronização com outros e/ou redes sociais na internet. O USUÁRIO terá
          no {DOMAIN} um cadastro eletrônico que poderá ser atualizado periodicamente conforme
          legislação em vigor e poderá receber comunicações da {DOMAIN} ou seus parceiros com essa
          finalidade. A {DOMAIN} informa que envidará seus melhores esforços para garantir a
          idoneidade e qualificação dos parceiros e fornecedores, que forem contratados para acesso,
          veiculação e disponibilidade nas diversas plataformas eletrônicas de acesso (web e
          aplicativos).
        </Paragraph>

        <Topic>Comunicação</Topic>

        <SubTopic>6. Princípio da Transparência</SubTopic>

        <Paragraph>
          Sempre que o USUÁRIO entender conveniente, poderá acessar esta Política de Privacidade e
          Tratamento da Informação, bastando, para tanto, clicar no link “Política de Privacidade e
          Tratamento da Informação” disponível no WEBSITE do {DOMAIN}.
        </Paragraph>

        <SubTopic>7. Princípio da Comunicação</SubTopic>

        <Paragraph>
          A {DOMAIN} reitera sua preocupação acerca da privacidade e tratamento dos dados pessoais
          dos USUÁRIOS dispondo, para tanto, de um setor responsável pelo controle, suporte,
          fiscalização e cumprimento da presente política, que conta, com um canal de comunicação
          para o USUÁRIO para tratamento e resolução de assuntos relacionados à Política de
          Privacidade e Tratamento da Informação, através do e-mail {SUPPORT_EMAIL}.
        </Paragraph>

        <Topic>Modificação e Vigência</Topic>

        <Paragraph>
          A presente política estabelece um compromisso de cumprimento dos 7 princípios acima
          descritos. Ocasionalmente, poderá haver a necessidade de alteração, modificação ou
          complementação de alguns detalhes nesta Política. Se a {DOMAIN} pretender efetuar alguma
          alteração substancial na Política, publicará aqui sua nova versão, com 24 (vinte e quatro)
          horas antes de sua entrada em vigor. Se o USUÁRIO não concordar com as modificações
          publicadas, poderá solicitar livremente e sem qualquer penalidade, sua exclusão do WEBSITE
          da {DOMAIN} ou através do e-mail {SUPPORT_EMAIL}
        </Paragraph>

        <Topic>Contato:</Topic>

        <Paragraph>{SUPPORT_EMAIL}</Paragraph>

        <Paragraph>Política de Privacidade datada de 30 de julho de 2018 V.02</Paragraph>
      </Teste>
    );
  }
}
