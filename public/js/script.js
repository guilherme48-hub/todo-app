function completaTarefa(id) {
    fetch("http://localhost:3000/completar", {
        method: "post",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ id })
    })
    .then(() => {
        console.log('Tarefa completada com sucesso!');
        window.location.reload();
    })
    .catch((erro) => {
        console.error('Erro ao completar a tarefa:', erro);
    });
}

function descompletarTarefa(id) {
    fetch("http://localhost:3000/descompletar", {
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
    })
    .then(() => {
        console.log('Tarefa descompletada com sucesso!');
        window.location.reload();
    })
    .catch((erro) => {
        console.error('Erro ao descompletar a tarefa:', erro);
    });
}

function alterarTema() {
    const tema = localStorage.getItem("tema");
    const body = document.querySelector("body");
    const button = document.querySelector(".tema-button");

    if (tema) {
        let novoTema;

        if (tema === "light") {
            novoTema = "dark";
            button.innerHTML = `<img src="/imagens/sun-icon.png" alt="sol">`;
            body.classList.remove("light");
            body.classList.add("dark");
        } else {
            novoTema = "light";
            button.innerHTML = `<img src="/imagens/moon-icon.png" alt="lua">`;
            body.classList.remove("dark");
            body.classList.add("light");
        }

        localStorage.setItem("tema", novoTema);
        return;
    }

    localStorage.setItem("tema", "dark");
    body.classList.add("dark");
}

function verificarTema() {
    const tema = localStorage.getItem("tema");
    const body = document.querySelector("body");
    const button = document.querySelector(".tema-button");

    if (tema) {
        if (tema === "dark") {
            body.classList.add("dark");
            button.innerHTML = `<img src="/imagens/sun-icon.png" alt="sol">`;
        } else {
            body.classList.add("light");
            button.innerHTML = `<img src="/imagens/moon-icon.png" alt="lua">`;
        }
    }
}

verificarTema();
