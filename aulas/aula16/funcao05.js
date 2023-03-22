// RECURSIVIDADE (CHAMANDO A FUNÇÃO DENTRO DELA MESMA)

function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))

/*

SABENDO QUE O FATORIAL DE UM NUMERO É IGUAL AO NUMERO VEZES O FATORIAL DO NUMERO ANTERIOR - 1


5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4!

n! = n x (n-1)!
1! = 1

*/