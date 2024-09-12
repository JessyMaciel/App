const { select, input, checkbox  } = require('@inquirer/prompts')

let meta = {
    value: 'Tomar 3L de água por dia',
    checked: false,
}

let metas = [ meta ]

const cadastrarMeta = async () => {
    const meta = await input({ message: "Digite a meta:"})
    
        if(meta.length ==0) {
            console.log('A meta não pode ser vazia')
        if(meta.length ==0) {
            console.log('A meta não pode ser vazia')
            mensagem = 'A meta não pode ser vazia'
            return
                
        }
    
    metas.push(
        { value: meta, checked: false })
    
}

const listarMetas = async () => {
    const respostas = await checkbox({
        message: "Use as setas para mudar de meta, o espaço para marcar ou desmarcar e o enter para finalizar essa etapa",
        choices: [...metas],
        instructions: false,
    })

    metas.forEach((m) => {
        m.checked = false
    })

    if(respostas.lenght == 0) {
        console.log("Nenhuma meta selecionada")
        return
    }  

    respostas.forEach((resposta) => {
        const meta = metas.find((m) => {
            return m.value == resposta
        })

        meta.checked = true
    })

    console.log('Meta(s) marcadas como concluída(s)')

}

const metasRealizadas = async () => {
    const realizadas = metas.filter((meta) => {
        return meta.checked
    })

    console.log(realizadas)

    if(realizadas.lenght ==0) {
        console.log('Não existem metas realizadas! :( ')
        return
    }

    await select({
        message: "Metas Realizadas:" + realizadas.length,
        choices: [...realizadas]
    })

    console.log(realizadas)
}

const metasBertas = async () => {
    const abertas = metas.filter((meta) => {
        return meta.checked != true
    })

    if(abertas.length == 0) {
        console.log("Não existem metas abertas! :)")
        return
    }

    await select({
        message: "Metas Abertas" + abertas.length,
        choices: [...abertas]
    })
}

const deletarMetas = async () => {
    const metasDesmarcadas = metas.map((meta) => {
        return {value: meta.value, checked: false}
    })
}

const deletarMetas async () => {
    const respostas = await checkbox({
        message: "Selecione item para deletar",
        choices: [...metasDesmarcadas],
        instructions: false,
    })

    if(itemsaDeletar.lenght == 0) {
        console.log("Nenhum item para deletar!")
        return
    }

    itemsaDeletar.forEAch((item) =>{
        metas.filter((meta) => {
            return meta.checked.value != item
        })
    })
    console.log("Meta(s) deleta(s) com sucesso!")
}

}

const start = async () => {

    while(true){

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
                    name: "Deletar Metas",
                    value: "deletar"
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
                console.log(metas)
                break
            case "listar":
                await  listarMetas()
                console.log("Listar metas")
                break
            case "realizadas":
                await metasRealizadas()
                break
            case "abertas":
                await metasAbertas()
                break
            case "deletar":
                await deletarMetas()
                break
            case "sair":
                console.log("Até a próxima")
                return
        }
    }
}

start()