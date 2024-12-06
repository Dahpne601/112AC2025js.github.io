document.getElementById('hamburger').onclick = () => {
    document.getElementById('sidebar').classList.add('open');
};

document.getElementById('close').onclick = () => {
    document.getElementById('sidebar').classList.remove('open');
};
