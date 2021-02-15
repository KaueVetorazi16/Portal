using Balistica.Domain;
using System.ComponentModel.DataAnnotations;


namespace Balistica.Domain
{
    public class Arma
    {
        public int Id { get; set; }

        
        [Required(ErrorMessage = "Marca is requerid.")]
        public string Marca { get; set; }
         
        [Required(ErrorMessage = "País de Fabricação is requerid.")]
        public string PaisDeFabricacao { get; set; }
         
        [Required(ErrorMessage = "Tipo is requerid.")]
        public string Tipo { get; set; }
         
        [Required(ErrorMessage = "Modelo is requerid.")]
        public string Modelo { get; set; }
         
        [Required(ErrorMessage = "Alma is requerid.")]
        public string Alma { get; set; }
    
        [Required(ErrorMessage = "Raias is requerid.")]      
        public int Raias { get; set; }
     
        [Required(ErrorMessage = "Tipo do cano is requerid.")]
        public string TipoDoCano { get; set; }
          
        [Required(ErrorMessage = "Comprimento is requerid.")]
        public string ComprimentoDoCano { get; set; }
       
        [Required(ErrorMessage = "Ação is requerid.")]
        public string Acao { get; set; }
        
        [Required(ErrorMessage = "Carregamento is requerid.")]
        public string Carregamento { get; set; }
        
        [Required(ErrorMessage = "Percussão is requerid.")]
        public string Percussao { get; set; }
        
        [Required(ErrorMessage = "Tiro unitário is requerid.")]
        public string SistemaDeFuncionamento { get; set; }    
       
        [Required(ErrorMessage = "Capacidade is requerid.")]
        public string Capacidade { get; set;}
        
        [Required(ErrorMessage = "Acabamento is requerid.")]
        public string Acabamento { get; set; }

        [Required(ErrorMessage = "Mobilidade is requerid.")]
        public string Mobilidade { get; set; }
       
        public string Observacoes { get; set; }
        [Required(ErrorMessage = "Marca is requerid.")]
        public string Imagem { get; set; }
        
        [Required(ErrorMessage = "Calibre is requerid.")]
        public string CalibreId { get; set; }
        public Calibre Calibre {get;}

   

    }
}