using System.Threading.Tasks;
using Balistica.Repository.Pagination;
using Balistica.Domain;
using System.Collections.Generic;

namespace Balistica.Repository
{
    public interface IBalisticaRepository
    {

        //Geral
         void Add<T>(T entity) where T: class;
         void Update<T>(T entity) where T: class;
         void Delete<T>(T entity) where T: class;

         Task<bool> SaveChangesAsync();

        //Armas
        Task<Arma[]> GetAllArmaAsyncByMarca(string marca); 
        Task<Arma[]> GetAllArmaAsync();
        Task<Arma> GetArmaAsyncById(int id);

        //Municoes
        Task<Municao[]> GetAllMunicaoAsyncByMarca(string marca); 
        Task<Municao[]> GetAllMunicaoAsync();
        Task<Municao> GetMunicaoAsyncById(int id);

        //Calibre
        Task<Calibre[]> GetAllCalibreAsyncByNominal(string nominal); 
        Task<Calibre[]> GetAllCalibreAsync();
        Task<Calibre> GetCalibreAsyncById(int id);
       // Task<IEnumerable<Calibre>> GetCalibres(CalibresParameters calibresParameters);

        
        

    }
}