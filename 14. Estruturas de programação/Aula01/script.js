// 1- Variáveis
    let nome = "Arisio";
    console.log(nome);

    nome = "Arisio Andrade";
    console.log(nome);

    const idade = 22;

    //idade = 23;
    //console.log(idade);

    let newAge = idade;
    newAge = 23;
    console.log(newAge);

// 2- Aprofundamento em variáveis
    let a = 20, b = 30, c = 40;

    console.log(a + " - " + b + " - "+ b);
    let nomeCompleto = "Arisio Andrade";
    let nomecompleto = "Arisio Andrade";

    console.log(nomeCompleto);
    console.log(nomecompleto);

    let _teste, $teste; //caracteres especiais permitidos

// 3- Nomes reservados
    //break, case, catch, class, const, continue, default, delete, export, enum, else e outras;

// 4- Função prompt -> recebe um dado do usuário e pode salva-lo em uma variável
    //const x = prompt("Digite um número: ")
    //console.log(x);

// 5- Altert -> emite uma mensagem na tela através de um pop up 
    //alert("Teste!");

// 6- Math
    //console.log(Math.max(1,2,8,9,20));
    //console.log(Math.min(1,2,8,9,20));
    //console.log(Math.floor(5.51));
    //console.log(Math.ceil(5.51));

// 7- Console
    //console.log("Imprimindo algo");
    //console.error("Erro")
   //console.warn("Acho que deveria ter criado apenas duas variáveis!")

// 8- If
    const y = 10, j = 5;

    if(j > y) {
        console.log("É maior do que " + y);
    } else if(j < y) {
        console.log("É menor do que " + y);
    } else {
        console.log("Os valores são iguais");
    }

// 9- While
    let p = 0;

    while(p <= 5) {
        console.log(p);
        p += 1;
    }

    let o = 10;

    do{
        console.log(o)
        o -= 1;
    }while(o > 0);

// 10- For
    for (let t = 0; t < 10; t++) {
        console.log("Repetindo algo!")
    }

// 11 - Switch
    const job = "Programador";

    switch(job) {
        case "Programador":
            console.log("Você é um programador");
            break;
        case "Advogado":
            console.log("Você é um advogado");
            break;
        case "Médico":
            console.log("Você é um médico");
            break;
        default:
            console.log("Profissão não encontrada")
    }