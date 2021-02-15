using System.ComponentModel.DataAnnotations;
namespace Balistica.Domain
{
    public class Municao
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Marca is requerid.")]
        public string Marca { get; set; }
         [Required(ErrorMessage = "Tipo do estojos is requerid.")]
        public string TipoEstojo { get; set; }
         [Required(ErrorMessage = "Tipo do projétil is requerid.")]
        public string TipoProjetil { get; set; }
         [Required(ErrorMessage = "Tipo da espoleta is requerid.")]
        public string TipoEspoleta { get; set; }
        public string Imagem { get; set; }
        [Required(ErrorMessage = "Calibre is requerid.")]
        public string CalibreId { get; set; }
        public Calibre Calibre {get;}
      
    }
}