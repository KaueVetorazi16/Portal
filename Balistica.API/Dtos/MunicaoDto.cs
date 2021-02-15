using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Balistica.API.Dtos
{
    public class MunicaoDto
    {
        public int Id { get; set;}
        public string Marca { get; set;}
        public string Imagem { get; set;}
        public string TipoEstojo { get; set; }
        public string TipoProjetil { get; set; }
        public string TipoEspoleta { get; set; }
        public string Imagem { get; set; }
        public string CalibreId { get; set; }
        public Calibre Calibre {get;}

    }
}