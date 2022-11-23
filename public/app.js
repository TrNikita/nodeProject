document.addEventListener('click', event => {
    const id = event.target.dataset.id;
    const noteHTML = event.target.closest('li');

    switch (event.target.dataset.type) {
        case 'remove':
            remove(id).then(() => {
                noteHTML.remove();
            });
            break;
        case 'change':
            const title = prompt('Введите новое название');
            if (title) {
                change(id, title)
                    .then(() => {
                        noteHTML.children[0].innerText = title;
                    });
            }
    }
});

async function remove(id) {
    await fetch(`/${id}`, {
        method: 'DELETE',
    });
}

async function change(id, title) {
    await fetch(`/${id}`, {
        method: 'PUT',
        body: JSON.stringify({title}),
        headers: {'Content-Type': 'application/json'},
    });
}
