const { select, input, checkbox  } = require('@inquirer/prompts')
const fs = require("fs").promises

let mensagem = "Bem vindo ao APP de metas! ";

let metas = [ meta ]

const carregarMetas = async () => {
    try {
        const dados = await fs.readFile("metas.json", "utf-8")
        metas = JSON.parse(dados)
        }
        catch (erro) {
            metas = []
        }
    }

    const salvarMetas = async () => {
        await fs.writeFile("metas.json", JSON.stringify(metas, null, ))
    }

    const cadastrarMeta = async () => {
            const meta = await input({ message: "Digite a meta:"})
    
            if(meta.length == 0) {
            mensagem = 'A meta não pode ser vazia'
            return                
        }
    
        metas.push(
        { value: meta, checked: false }
    )
    mensagem = "Meta cadastrada com sucesso!"    
}

const listarMetas = async () => {
    if(metas.length == 0) {
        mensagem = "Não existem metas"
        return
    }

    const respostas = await checkbox({
        message: "Use as setas para mudar de meta, o espaço para marcar ou desmarcar e o enter para finalizar essa etapa",
        choices: [...metas],
        instructions: false,
    })

    metas.forEach((m) => {
        m.checked = false
    })

    if(respostas.lenght == 0) {
        mensagem = "Nenhuma meta selecionada"
        return
    }  

    respostas.forEach((resposta) => {
        const meta = metas.find((m) => {
            return m.value == resposta
        })

        meta.checked = true
    })

    mensagem = 'Meta(s) marcada(s) como concluída(s)'

}

const metasRealizadas = async () => {
    if(realizadas.lenght ==0) {
        mensagem = 'Não existem metas'
        return
    }

    const realizadas = metas.filter((meta) => {
        return meta.checked
    })

    if(realizadas.lenght ==0) {
        mensagem = 'Não existem metas realizadas! :( '
        return
    }   

    await select({
        message: "Metas Realizadas:" + realizadas.length,
        choices: [...realizadas]
    })
}

const metasAbertas = async () => {
    if(metas.length == 0){
        mensagem = "Não existem metas!"
        return
    }

    const abertas = metas.filter((meta) => {
        return meta.checked != true
    })

    if(abertas.length == 0) {
        mensagem = "Não existem metas abertas! :)"
        return
    }

    await select({
        message: "Metas Abertas:" + abertas.length,
        choices: [...abertas]
    })
}

const removerMetas = async () => {
    if(metas.lenght == 0) {
        mensagem = "Não existem metas!"
        return
    }

    const metasRemovidas = metas.map((meta) => {
        return {value: meta.value, checked: false}
    })

    const itemsARemover = await checkbox({
        message: "Selecione item para remover",
        choices: [...metasDesmarcadas],
        instructions: false,
    })

    if(itemsARemover.lenght == 0) {
        mensagem = "Nenhum item para remover!"
        return
    }

    itemsADeletar.forEAch((item) => {
        metas = metas.filter((meta) => {
            return meta.value != item
        })        
    })
    
    mensagem = "Meta(s) removidas(s) com sucesso!"
}

const mostarMensagem = () => {
    console.clear();

    if(mensagem != ""){ 
        console.log(mensagem)
        console.log(" ")
        mensagem = " "
    }
}

const start = async () => {
    await carregarMetas()

    while(true){
        mostarMensagem()
        await salvarMetas()

        const option = await select({
            message: "Menu >",
            choices: [
                {
                    name: "Cadastrar meta",
                    value: "cadastrar"
                },
                {
                    name: "Listar metas",
                    value: "listar"
                },
                {
                    name: "Metas realizadas",
                    value: "realizadas"
                },
                {
                    name: "Metas abertas",
                    value: "abertas"
                },
                {
                    name: "Remover Metas",
                    value: "remover"
                },
                {
                    name: "Sair",
                    value: "sair"
                },
            ]
        })

        switch(option) {
            case "cadastrar":
                await cadastrarMeta()
                break
            case "listar":
                await  listarMetas()
                break
            case "realizadas":
                await metasRealizadas()
                break
            case "abertas":
                await metasAbertas()
                break
            case "remover":
                await removerMetas()
                break
            case "sair":
                console.log("Até a próxima")
                return
        }
    }
}

start();