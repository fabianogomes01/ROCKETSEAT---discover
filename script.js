function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    // Pegar a tag img
    const img = document.querySelector('#profile img')

    // Verificar se está no modo light
    if(html.classList.contains('light')) {
        // Se tiver lightmode, add img light
        img.setAttribute('src', './assets/avatar-light.png')
    } else {
        // Se tiver sem light mode, manter a imagem normal
        img.setAttribute('src', './assets/avatar.png')
    }
}
