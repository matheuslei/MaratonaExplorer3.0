function loginUsuario() {
  const telaLogin = document.querySelector('.login');
  const telaCardapio = document.querySelector('.fundo');
  telaLogin.classList.add('escondido');
  telaCardapio.classList.remove('escondido');
  const usuarioInput = document.querySelector('#inputUsuario').value;
  const nomeCliente = document.querySelector('.nomeCliente');
  nomeCliente.innerHTML = usuarioInput;
}
