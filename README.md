🧪 Projeto Cypress - Testes Automatizados de Front-end e API
📋 Descrição

Este projeto tem como objetivo automatizar testes de front-end e API utilizando Cypress, uma das ferramentas mais modernas e robustas para automação de aplicações web.
O foco está em desenvolver testes eficientes, organizados e de fácil manutenção, seguindo as melhores práticas do mercado para garantir qualidade e confiabilidade do software.

    Testes de Login

    Cadastro de Produtos

    Edição de Produtos

    Exclusão de Produtos

Além disso, o projeto já contempla boas práticas para escalabilidade, integração contínua (CI/CD) e testes visuais no futuro.
🚀 Tecnologias Utilizadas

    Cypress (Framework de testes end-to-end)

    Node.js (Ambiente de execução e gerenciamento de pacotes)

    JavaScript (Linguagem principal dos testes)

    Git & GitHub (Controle de versão e colaboração)

🛠️ Instalação e Configuração

    Clone o repositório:

git clone https://github.com/Dfabios/Projeto-Cypress.git

Acesse a pasta do projeto:

cd Projeto-Cypress

Instale as dependências:

npm install

Execute o Cypress no modo interativo:

npx cypress open

ou execute diretamente no terminal:

    npx cypress run

⚡ Atenção: Certifique-se de que a API esteja rodando em http://localhost:3000 para testes de login e produtos.
📂 Estrutura de Pastas

Projeto-Cypress/
├── cypress/
│   ├── e2e/
│   │   ├── api/
│   │   │   ├── api_login.cy.js     # Testes de login
│   │   │   ├── api_produtos.cy.js  # Testes de produtos (cadastrar, editar, excluir)
│   ├── fixtures/                   # Dados simulados (mocks)
│   ├── support/                    # Comandos customizados e configurações
├── cypress.config.js               # Arquivo de configuração do Cypress
├── package.json                    # Gerenciamento de dependências
└── README.md                       # Documentação do projeto

🧪 Testes Implementados
Funcionalidade	Descrição
✅ Login com sucesso	Validação de autenticação com email e senha corretos
✅ Login com senha incorreta	Retorno de erro 401
✅ Login com senha vazia	Retorno de erro 400
✅ Cadastro de Produto	Criação de um novo produto via API
✅ Edição de Produto	Alteração dos dados de um produto existente
✅ Exclusão de Produto	Remoção de um produto cadastrado
✨ Diferenciais do Projeto

    Arquitetura limpa de testes: Separação clara entre fixtures, comandos, e2e.

    Custom Commands: Reutilização de funções (cy.api_login) para otimizar testes.

    Boas práticas de versionamento Git: Commits claros e organizados.

    Uso de Mocks e Stubs: Dados simulados para testar sem depender diretamente do backend.

    Testes robustos: Cobertura de testes críticos da aplicação (UI e API).

    Preocupação com manutenibilidade e escalabilidade.

📈 Roadmap Futuro

Integração contínua (CI/CD) via GitHub Actions ou Jenkins

Testes cross-browser (Chrome, Firefox, Edge)

Implementação de testes visuais com Percy ou Cypress Visual Testing Plugin

    Adicionar testes de componentes individuais (Component Testing)

🤝 Como Contribuir

    Faça um fork do projeto

    Crie uma branch para sua feature:

git checkout -b feature/nova-feature

Commit suas alterações:

git commit -m 'feat: Adiciona nova feature'

Push para a sua branch:

    git push origin feature/nova-feature

    Abra um Pull Request

👨‍💻 Autor

    Salvador D. Fábio

        GitHub

        LinkedIn (atualize com seu LinkedIn)

📄 Licença

Este projeto está licenciado sob a licença MIT.
Sinta-se livre para usar, modificar e distribuir este código!

Feito com ❤️ usando Cypress!
