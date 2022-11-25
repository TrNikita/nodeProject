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
            const editNote = `
                <label for=${id}>
                    <input class='p-2 m-1' type='text' name="newTitle" id='input${id}' value=${noteHTML.children[0].innerText}>
                </label>
                <button
                    class='btn btn-success'
                    data-type='save'
                    data-id=editBtn${id}
                >
                Сохранить
                </button> 
               <button
                    class='btn btn-danger'
                    data-type='cancel'
                    data-id=cancelBtn${id}
                >
                Отменить
                </button>
                `;
            noteHTML.innerHTML = editNote;

            const editBtn = document.querySelector(`[data-id="editBtn${id}"]`);
            editBtn.addEventListener('click', () => {
                const input = document.querySelector(`#input${id}`);
                change(id, input.value)
                    .then(() => {
                        noteHTML.children[0].innerText = input.value;
                        location.reload();
                    });
            });

            const cancelBtn = document.querySelector(`[data-id="cancelBtn${id}"]`);
            cancelBtn.addEventListener('click', () => {
                location.reload();
            });
    }
});

async function remove(id) {
    await fetch(`/${id}`, {
        method: 'DELETE',
    });
}

async function change(id, title) {
    await fetch(`/${id}`, {
        method: 'PUT', body: JSON.stringify({title}), headers: {'Content-Type': 'application/json'},
    });
}
