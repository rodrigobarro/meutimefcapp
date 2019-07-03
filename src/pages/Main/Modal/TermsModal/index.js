/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styled from 'styled-components';

const Body = styled.View`
  width: 90%;
  margin: 0 auto;
`;

const Title = styled.Text`
  text-align: center;
  padding-top: 20px;
  font-size: 25px;
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

const Paragraph = styled.Text`
  color: #fffed8;
`;
export default class TermsModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const APP_NAME = '';
    const DOMAIN = '';
    const BRAND_SITE = '';
    return (
      <Body>
        <Title>TERMOS DE USO</Title>
        <Topic>1. {APP_NAME}</Topic>

        <Paragraph>
          1.1. O presente termo contempla as condições de uso da plataforma eletrônica do {APP_NAME}{' '}
          no Brasil.
        </Paragraph>

        <Paragraph>
          1.1.1 Este termo de uso (“Termo de Uso”) regulamenta a utilização da plataforma eletrônica
          para o uso da versão web (“Website”) e do aplicativo {APP_NAME} (“Aplicativo”) no site{' '}
          {DOMAIN.toUpperCase()}, seu download e demais sistemas de acesso e instalação,
          disponibilizados pela empresa {BRAND_SITE}, aos seus usuários, através do endereço
          eletrônico {DOMAIN}. No ato de adesão à Plataforma, o usuário (doravante “Usuário”) se
          obriga a aceitar, plenamente e sem reservas, todos os termos e condições deste Termo de
          Uso, que tem por objetivo a definição de regras de uso com a finalidade de promover a
          informação, entretenimento, diversão e lazer dos seus usuários.
        </Paragraph>

        <Paragraph>
          1.2.1 A {BRAND_SITE} disponibilizará, através do site {DOMAIN} o acesso a versão web ao
          Usuário, através do qual será possível interagir em uma plataforma denominada {APP_NAME},
          onde fatos do mundo real influenciam os resultados obtidos no mundo virtual.
        </Paragraph>

        <Paragraph>
          1.2.2 O jogo tem versão web sendo responsivo a acesso mobile podendo ser utilizado através
          de computadores e notebooks pelos navegadores web ou através do seu celular pelo endereço{' '}
          {DOMAIN}.
        </Paragraph>

        <Paragraph>
          1.2.3 A Plataforma destina-se apenas para fins de informação e entretenimento, tratando-se
          de um entretenimento de estratégia e habilidade, podendo ser utilizada de forma gratuita
          sem restrições de jogabilidade e usabilidade.
        </Paragraph>

        <Topic>2. CADASTRO E CONDIÇÕES DE USO</Topic>

        <Paragraph>
          2.1 A partir de 12 de junho de 2018, poderá ser utilizada a versão disponibilizada pelos
          usuários que cumpram os requisitos mínimos identificados neste Termo.
        </Paragraph>

        <Paragraph>
          2.1.1 Os Usuários dos Serviços de Entretenimento {APP_NAME} serão conjuntamente
          denominados neste termo simplesmente como “Usuários”.
        </Paragraph>

        <Paragraph>
          2.1.2 O Usuário declara estar plenamente apto às práticas dos atos da vida civil, sendo
          que não há restrição de idade. Caso o Usuário se trate de pessoa que necessite de
          representação na forma da lei, deverá estar devidamente representado ou assistido
          (conforme o caso), por seus representantes legais, os quais deverão contratar o {APP_NAME}{' '}
          em caráter de representação ou assistência, responsabilizando-se integralmente pelo
          Usuário e seus atos. O Usuário (e seu representante legal, quando for o caso), declara
          estar ciente de todos os direitos e obrigações aqui estabelecidos, com os quais
          expressamente concorda.
        </Paragraph>

        <Paragraph>
          2.1.3 No {APP_NAME}, poderá ser exigido um cadastro no site, com a indicação de nome,
          e-mail, sexo, data de nascimento, endereço completo, CPF, celular e outros elementos de
          identificação que se demonstrem necessários com o tempo para cumprimento das formalidades
          legais e objetivos da plataforma. O Usuário e/ou o seu representante legal é/são o(s)
          único(s) responsável(is) pelas informações cadastrais prestadas, respondendo pela
          veracidade e correção dos dados. O Usuário se compromete a informar à {BRAND_SITE}{' '}
          qualquer alteração em seus dados cadastrais no prazo de até 10 (dez) dias, mantendo-os
          sempre atualizados. Periodicamente a plataforma poderá solicitar ao Usuário que valide os
          dados cadastrais informados, para confirmação de sua veracidade e validade. Caso o Usuário
          deixe de atualizar ou validar as suas informações, a utilização da plataforma eletrônica
          nas suas diversas formas poderá ser suspensa até que o Usuário tenha atualizado ou
          validado a veracidade de suas informações cadastrais. O Usuário desde já autoriza a{' '}
          {BRAND_SITE}, sempre que julgar necessário, por si ou por terceiros por ela credenciados,
          solicitar documentos adicionais para comprovação dos dados informados, que deverão ser
          disponibilizados pelo Usuário no prazo máximo de 10 (dez) dias. A {BRAND_SITE} poderá,
          ainda, consultar quaisquer bancos de dados, inclusive bases de restrições creditícias,
          para validação das informações prestadas pelo Usuário. A verificação de documentos e/ou
          consulta de bases de dados pela {BRAND_SITE} não confere ao Usuário atestado de
          regularidade para qualquer finalidade, nem o exime do cumprimento das obrigações previstas
          neste Termo de Uso.
        </Paragraph>

        <Topic>3. FORMAS E RESPONSABILIDADE DE CADASTRAMENTO</Topic>

        <Paragraph>
          3.1 Os Serviços de Entretenimento descritos neste Termo serão disponibilizados através dos
          meios disponíveis no momento do cadastramento, mediante o correto preenchimento das
          informações solicitadas e cumprimento integral das condições legalmente previstas e
          constantes neste Termo atualizados em conformidade pela {BRAND_SITE}. Uma vez finalizado o
          cadastro do Usuário, a {BRAND_SITE} liberará a utilização das funcionalidades da
          plataforma, passando este Termo de Uso a vigorar automaticamente em relação ao Usuário. O
          Usuário é o único responsável pela guarda e utilização do login e senha cadastrados para
          acesso a plataforma e jogo, sendo vedada sua divulgação a terceiros. O Usuário desde já
          concorda que toda e qualquer operação realizada com o login e senha cadastrados pelo
          Usuário, ainda que sem sua autorização, será de sua inteira e exclusiva responsabilidade.
        </Paragraph>

        <Topic>4. PRAZO E PERÍODO DE DISPONIBILIZAÇÃO DO {APP_NAME}</Topic>

        <Paragraph>
          4.1 A utilização da plataforma eletrônica e aplicativos será disponibilizada com prazo até
          28/02/2019 e enquanto se demonstrarem cumpridas as condições estipuladas no presente Termo
          e demais Regulamentos pertinentes.
        </Paragraph>

        <Topic>5. MECÂNICA E REGRAS DO {APP_NAME}</Topic>

        <Paragraph>5.1. O {APP_NAME} tem diversos módulos com atrativos diferentes:</Paragraph>

        <Paragraph>
          5.1.1 Ao subscrever o {APP_NAME}, os Usuários receberão o total de $ 100.000 (cem mil) em
          moedas virtuais sem nenhum valor real usadas no jogo. O objetivo do Usuário no módulo
          Fantasy é acumular pontos escalando um time de jogadores de acordo de diversos torneios
          reais de futebol conforme descritas nas Regras do Jogo. Cada jogador pontua de acordo com
          a sua performance durante o Campeonato. O Usuário que acumular mais pontos é o vencedor do
          Fantasy.{' '}
        </Paragraph>

        <Paragraph>
          5.1.2 O Usuário também pode dar palpites no resultado de jogos para participar de um Bolão
          onde acumula pontos de acordo com os seus palpites em comparação com os resultados reais
          dos jogos. Novamente, o Usuário que acumular mais pontos é o vencedor do Bolão.
        </Paragraph>

        <Paragraph>
          5.1.3 A terceira forma do usuário participar do jogo é através da criação e participação
          em Ligas onde ele pode ser convidado ou criar Ligas com amigos para disputar até três (3)
          Ligas Fantasy e até três (3) Ligas Bolão para concorrer somente com os usuários que
          estiverem na Liga. O Usuário que tiver mais pontos na Liga, ganha.
        </Paragraph>

        <Paragraph>
          5.1.4 A quarta forma de participar do jogo é aquela em que cada Usuário pode participar
          com mais quatro (4) Usuários de uma Seleção que joga com equipes formadas por mais cinco
          (5) usuários onde os seus resultados são somados a cada rodada para ver qual a Seleção que
          acumula mais pontos e é o campeão das Seleções.
        </Paragraph>

        <Paragraph>
          5.2 O usuário não é obrigado a participar em todas os módulos. Ele é livre para escolher
          as fórmulas que mais gosta ou se identifica.
        </Paragraph>

        <Topic>6. RANKINGS E SUAS MECÂNICAS</Topic>

        <Paragraph>
          6.1 O {APP_NAME} é uma competição mensal em formato de rankings. Cada jogador participará
          da Liga única de cada torneio disponibilizado no jogo e pode participar de Ligas criadas
          por ele ou outros usuários nas modalidades Fantasy e Bolão. O Ranking é a classificação do
          Usuário em cada uma das Ligas em que participa.
        </Paragraph>

        <Topic>7. PROPRIEDADE INTELECTUAL</Topic>

        <Paragraph>
          7.1 A {BRAND_SITE} concede aos Usuários uma licença não exclusiva, intransferível e
          limitada de acesso para utilizar os Serviços de Informação e Entretenimento,
          exclusivamente para uso pessoal, sem fins comerciais e desde que integralmente atendidas
          as condições previstas neste termo.
        </Paragraph>

        <Paragraph>
          7.2 Tendo em vista o caráter da licença concedida para acesso aos Serviços de Informacao e
          Entretenimento, os Usuários não poderão, diretamente ou através de dispositivo, mecanismo,
          software ou qualquer outro meio, exemplificativamente (i) remover, alterar, interferir,
          evitar ou de qualquer forma modificar marca d’água, copyright, símbolo, marca ou qualquer
          outro sinal indicativo de propriedade relativos aos Serviços de Informação Entretenimento,
          ou quaisquer direitos e/ou mecanismos de proteção associados aos Serviços; (ii) copiar,
          fazer download, capturar, reproduzir, arquivar, distribuir, fazer upload, publicar,
          modificar, traduzir, exibir, transmitir, apropriar, incorporar ou comercializar os
          Serviços de Entretenimento; (iii) incorporar os Serviços de Entretenimento a qualquer
          aplicativo de software ou hardware, exibir ou retransmitir os Serviços de Entretenimento
          através dos mesmos, ou torná-lo disponível através de frames ou links; (iv) distribuir,
          anunciar ou desenvolver um negócio a partir dos Serviços de Entretenimento; (v) utilizar
          os Serviços de Entretenimento ou parte deles, de qualquer forma, para a criação de obras
          derivadas ou nele baseadas, tais como montagens, vídeos similares e materiais de marketing
          ou merchandising, entre outros.
        </Paragraph>

        <Paragraph>
          7.3 A {BRAND_SITE} esta licenciada para uso de todos os direitos relacionados ao Uso da
          Plataforma durante o período de vigência deste termo. O uso da Plataforma, das informações
          e as demais funcionalidades do Fantasy.{BRAND_SITE}, nomeadamente logo , marca e outros
          são protegidos pela legislação de direitos autorais e outros direitos de propriedade
          intelectual. Neste sentido, e conforme descrito acima, os Usuários não poderão reproduzir,
          copiar, utilizar, executar, criar trabalhos derivados, republicar, fazer upload, editar,
          enviar, transmitir ou distribuir, por qualquer meio que seja, quaisquer partes dos
          Serviços de Entretenimento, marcas, materiais, entre outros, de titularidade da{' '}
          {BRAND_SITE} ou por ela utilizados sob licença , sem a autorização prévia por escrito
          desta.
        </Paragraph>

        <Paragraph>
          7.4 Fica expressamente vedada qualquer prática que possa prejudicar a imagem da{' '}
          {BRAND_SITE} ou violar direitos desta sobre os Serviços de Informação e Entretenimento,
          danificar seus patrimônios, danificar ou de qualquer forma interferir no fluxo normal de
          comunicações com seus servidores, na segurança, inviolabilidade e privacidade dos dados lá
          armazenados e transmitidos.
        </Paragraph>

        <Topic>8. DISPOSIÇÕES GERAIS</Topic>

        <Paragraph>
          8.1 Este Termo de Uso estará disponível em todas as plataformas que disponibilizam o{' '}
          {APP_NAME}.com, sendo que os mesmos poderão ser imediatamente cancelados para os Usuários
          que praticarem atos que desrespeitem a legislação vigente e as regras deste Termo e/ou que
          utilizarem quaisquer meios ilícitos ou não expressamente permitidos para obter benefício
          próprio ou para terceiro.
        </Paragraph>

        <Paragraph>
          8.1.1 Sem prejuízo do disposto neste termo, poderão ter igualmente a utilização do{' '}
          {APP_NAME} suspensa, desativada e/ou cancelada, a exclusivo critério da {BRAND_SITE}, os
          Usuários que desrespeitarem as políticas de segurança e privacidade do site {DOMAIN}.
        </Paragraph>

        <Paragraph>
          8.2 As questões não expressamente previstas neste termo serão analisadas e julgadas pelo
          departamento de atendimento ao cliente da {BRAND_SITE}, cujas decisões serão a critério da{' '}
          {BRAND_SITE} publicadas no site {DOMAIN} e/ou enviadas ao Usuário por e-mail ou outro meio
          escrito.
        </Paragraph>

        <Paragraph>
          .3 O Usuário concorda com todas as condições deste termo sem reservas a partir da
          disponibilização dos Serviços de Entretenimento do {APP_NAME} e reconhece que este termo
          poderá ser alterado pela {BRAND_SITE} sempre que necessário e a seu exclusivo critério. A{' '}
          {BRAND_SITE} publicará as atualizações no website {DOMAIN}.
        </Paragraph>

        <Paragraph>
          8.4 O {APP_NAME} dispõe de uma estrutura tecnológica assente em sistemas de hardware e
          software dedicados à sua operação, sendo que a {BRAND_SITE} se reserva o direito de
          efetuar toda e qualquer ação de manutenção, correção e atualização que se demonstrarem
          necessárias nas suas plataformas, podendo ou não a seu critério informar os Usuários das
          referidas modificações e/ou atualizações.
        </Paragraph>

        <Paragraph>
          8.5 O Usuário reconhece e declara estar ciente de que poderá haver interrupções na
          disponibilização e acessibilidade da plataforma eletrônica e aplicativos do {APP_NAME}{' '}
          pela {BRAND_SITE} por motivos técnicos, em razão de manutenção preventiva ou corretiva ou
          por motivos de caso fortuito ou força maior. A {BRAND_SITE} não garante que a
          disponibilidade e acessibilidade da plataforma eletrônica e aplicativos ficarão sem
          interrupção, nem se responsabiliza por eventuais operações que deixem de ser realizadas
          durante os períodos de indisponibilidade.
        </Paragraph>

        <Paragraph>
          8.6. Reconhecem os Usuários que terceiros de má-fé poderão se utilizar de subterfúgios
          tecnológicos a fim de ter acesso a seus dados pessoais e/ou a fraudar as funcionalidades
          da plataforma eletrônica e dos aplicativos e, portanto, isentam a {BRAND_SITE} de qualquer
          responsabilidade correlata.
        </Paragraph>

        <Paragraph>
          8.7 Os Usuários, no ato da aquisição, declaram aderir sem reservas as disposições
          constantes deste regulamento e autorizam desde logo de forma gratuita a divulgação pela{' '}
          {BRAND_SITE}, a seu critério, das informações respeitantes em especial aos seus nomes e
          respectivas pontuações, no ambiente da plataforma e seus aplicativos, bem como em qualquer
          outro meio audiovisual.
        </Paragraph>

        <Paragraph>
          8.8 A {BRAND_SITE} poderá suspender ou interromper definitivamente os Serviços de
          Informação e Entretenimento, a qualquer tempo, a seu exclusivo critério.
        </Paragraph>

        <Paragraph>
          8.9 Os Usuários obrigam-se a cumprir todas as regras sobre prevenção e combate aos crimes
          de lavagem de dinheiro, de terrorismo e seu financiamento, entre outros, a ocultação de
          bens especificados pela Lei nº 9.613/98, conforme alterada, e pelo Conselho de Controle de
          Atividades Financeiras, além de outras legislações e regulamentações aplicáveis às
          hipóteses, bem como a colaborar de forma efetiva com as autoridades, órgãos de regulação
          e/ou de fiscalização, incluindo órgãos de defesa do consumidor, no fornecimento de dados
          e/ou informações, quando legalmente admitidos, inclusive, mas sem limitação, no que tange
          à prevenção e combate aos crimes de lavagem de dinheiro e ocultação de bens aos crimes
          contra crianças e adolescentes, adotando todas as medidas necessárias de sua
          responsabilidade para coibir tais ilícitos. O Usuário declara e garante que não pratica ou
          praticará quaisquer atos que sejam tidos como lavagem de dinheiro ou ocultação de bens,
          direitos ou valores. O Usuário deverá informar a {BRAND_SITE} imediatamente sobre qualquer
          situação que possa estar relacionada à lavagem de dinheiro e/ou ao financiamento do
          terrorismo e que possam afetar a {BRAND_SITE} direta ou indiretamente.
        </Paragraph>

        <Paragraph>
          8.10 Aplica-se a este regulamento a legislação brasileira e fica desde já eleito o Foro
          Central da Comarca da Capital do Estado de São Paulo para dirimir quaisquer controvérsias
          dele oriundas, caso as mesmas não possam ser resolvidas pelo serviço de atendimento ao
          Cliente da {BRAND_SITE}.
        </Paragraph>

        <Paragraph>Termo de Uso – V.02 – datada de 30 de julho de 2018</Paragraph>
      </Body>
    );
  }
}
