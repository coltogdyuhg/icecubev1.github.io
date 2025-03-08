function confirmBeforeUnload(e) {
    if (localStorage.getItem('tabcloseprevention') === 'true' && (e.clientY < 0 || e.clientY === undefined)) {
        const confirmationMessage = 'Are you sure you want to leave? You may lose your progress.';
        e.returnValue = confirmationMessage;
        return confirmationMessage;
    }
}

window.addEventListener('beforeunload', confirmBeforeUnload);
