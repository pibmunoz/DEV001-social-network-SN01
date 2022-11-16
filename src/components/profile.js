export const viewForProfile = ()  => {
    
    const profileDiv = document.createElement('div');
    profileDiv.classList.add("bodyGif")

    profileDiv.innerHTML = `<section><iframe src="https://giphy.com/embed/1Zbeweu52ZaQE" width="300" height="300" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p>Aquí comienza la Historia de Usuario 2</p>
`
    return profileDiv
}

