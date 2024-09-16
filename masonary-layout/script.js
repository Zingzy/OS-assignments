const main = document.getElementById('main');
const pre = document.querySelector('.pre');
let selectedFiles = [];

async function handleDirectorySelection() {
    try {
        const dirHandle = await window.showDirectoryPicker();

        for await (const entry of dirHandle.values()) {
            if (entry.kind === 'file') {
                if (entry.name.match(/\.(jpe?g|jpg|gif|bmp|webp)$/i)) {
                    const fileHandle = await entry.getFile();
                    selectedFiles.push(fileHandle);
                }
            }
        }

        displayFiles();
    } catch (err) {
        console.error('Directory selection canceled or failed:', err);
    }
}

document.addEventListener('click', handleDirectorySelection);

function displayFiles() {
    pre.style.display = 'none';
    main.innerHTML = '';
    selectedFiles.forEach((file) => {
        const imageDiv = document.createElement('div');
        const image = document.createElement('img');
        image.src = URL.createObjectURL(file);
        imageDiv.appendChild(image);
        main.appendChild(imageDiv);
    });
}
