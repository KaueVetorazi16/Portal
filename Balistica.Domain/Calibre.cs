using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
namespace Balistica.Domain
{
    public class Calibre
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Nominal is requerid.")]
        public string Nominal { get; set; }
        public double DiametroDoProjetil { get; set; }
        public double ComprimentoDoEstojo { get; set; }

        public string FormaDeTravamento { get; set; }

        public string SistemaDePercussao { get; set; }        

      //  public List<Imagem> imagens;
       
    }
}