using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Balistica.Domain
{
   public class Imagem
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "nome is requerid.")]
        public string nome { get; set; }
       
    }
}
