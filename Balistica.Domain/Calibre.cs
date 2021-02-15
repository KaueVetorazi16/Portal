using System.ComponentModel.DataAnnotations;
namespace Balistica.Domain
{
    public class Calibre
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "Nominal is requerid.")]
        public string Nominal { get; set; }
        public string Imagem { get; set; }
    }
}