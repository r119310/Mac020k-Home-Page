const currentURL = window.location.href;

function homeLink() {
    if (currentURL.includes('/JP/')) {
        window.location.href = "https://r119310.github.io/JP/home.html";
    }
    else{
        window.location.href = "https://r119310.github.io/EN/home.html";
    }
}

function profileLink() {
    if (currentURL.includes('/JP/')) {
        window.location.href = "https://r119310.github.io/JP/profile.html";
    }
    else{
        window.location.href = "https://r119310.github.io/EN/profile.html";
    }
}

function JPLink() {
    const parts = currentURL.split('/');
    const convertedParts = parts.map(part => {
        return part === 'EN' ? 'JP' : part;
    });
    const newUrl = convertedParts.join('/');
    window.location.href = newUrl;
}

function ENLink() {
    const parts = currentURL.split('/');
    const convertedParts = parts.map(part => {
        return part === 'JP' ? 'EN' : part;
    });
    const newUrl = convertedParts.join('/');
    window.location.href = newUrl;
}