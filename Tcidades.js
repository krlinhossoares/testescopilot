class TCIDADES {
    constructor(id, cidade, uf, cod_ibge) {
        this.id = id;
        this.cidade = cidade;
        this.uf = uf;
        this.cod_ibge = cod_ibge;
    }
}

// Example usage:
const cidade1 = new TCIDADES(1, 'São Paulo', 'SP', 3550308);
console.log(cidade1);