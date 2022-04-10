export class Cnab {
    constructor(cnab: any) {
        this.IdArquivoCnab = cnab.idarquivocnab;
        this.NomeArquivo = cnab.nomearquivo;
        this.Linha = cnab.linha;
        this.Cpf = cnab.cpf;
        this.Cartao = cnab.cartao;
        this.DonoLoja = cnab.donoloja;
        this.NomeLoja = cnab.nomeloja;
        this.Tipo = cnab.tipo;
        this.Data = cnab.data;
        this.Valor = cnab.valor;
        this.Hora = cnab.hora;
    }

    public IdArquivoCnab: number | undefined;
    public NomeArquivo: string | undefined;
    public Linha: number | undefined;
    public Cpf: string | undefined;
    public Cartao: string | undefined;
    public DonoLoja: string | undefined;
    public NomeLoja: string | undefined;
    public Tipo: number | undefined;
    public Data: Date | undefined;
    public Valor: number | undefined;
    public Hora: Date | undefined;
}
