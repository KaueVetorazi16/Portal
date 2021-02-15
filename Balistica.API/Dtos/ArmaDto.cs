namespace Balistica.API.Dtos
{
    public class ArmaDto
    {
        public int Id { get; set; }
        public string Marca { get; set; }
        public string PaisDeFabricacao { get; set; }
        public string Tipo { get; set; }
        public string Modelo { get; set; }
        public string Alma { get; set; }
        public int Raias { get; set; }
        public string TipoDoCano { get; set; }
        public string ComprimentoDoCano { get; set; }
        public string Acao { get; set; }
        public string Carregamento { get; set; }
        public string Percussao { get; set; }
        public string SistemaDeFuncionamento { get; set; }
        public string Capacidade { get; set;}
        public string Acabamento { get; set; }
        public string Mobilidade { get; set; }
        public string Observacoes { get; set; }
        public string Imagem { get; set; }
        public string CalibreId {get;set ;}
        public CalibreDto Calibre { get; set; }
    }
}