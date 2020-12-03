using System.Linq;
using System.Threading.Tasks;
using Balistica.Domain;
using Microsoft.EntityFrameworkCore;

namespace Balistica.Repository
{
    public class BalisticaRepository : IBalisticaRepository
    {

        private readonly BalisticaContext _context;
        public BalisticaRepository(BalisticaContext context)
        {
            _context = context;
            _context.ChangeTracker.QueryTrackingBehavior = QueryTrackingBehavior.NoTracking;
        }
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public void Update<T>(T entity) where T : class
        {
            _context.Update(entity);
        }

        
          public async Task<bool> SaveChangesAsync()
        {
            return (await _context.SaveChangesAsync()) > 0;
        }

        public async Task<Arma> GetArmaAsyncById(int ArmaId)
        {
            IQueryable<Arma> query = _context.Armas;
             query = query.Where( a => a.Id == ArmaId);

            return await query.FirstOrDefaultAsync();
        }
        public async Task<Arma[]> GetAllArmaAsync()
        {
            IQueryable<Arma> query = _context.Armas;

            return await query.ToArrayAsync();
        }

        public   async Task<Arma[]> GetAllArmaAsyncByMarca(string marca)
        {
             IQueryable<Arma> query = _context.Armas;
             query = query.Where(a => a.Marca.ToLower().Contains(marca.ToLower()));

            return await query.ToArrayAsync();
        }

         public async Task<Calibre> GetCalibreAsyncById(int CalibreId)
        {
            IQueryable<Calibre> query = _context.Calibres;
             query = query.Where( c => c.Id == CalibreId);

            return await query.FirstOrDefaultAsync();
        }
        public async Task<Calibre[]> GetAllCalibreAsync()
        {
            IQueryable<Calibre> query = _context.Calibres;

            return await query.ToArrayAsync();
        }

        public async Task<Calibre[]> GetAllCalibreAsyncByNominal(string nominal)
        {
            IQueryable<Calibre> query = _context.Calibres;
             query = query.Where(c => c.Nominal.ToLower().Contains(nominal.ToLower()));

            return await query.ToArrayAsync();
        }

        public async Task<Municao[]> GetAllMunicaoAsync()
        {
            IQueryable<Municao> query = _context.Municoes;

            return await query.ToArrayAsync();
        }

        public async Task<Municao[]> GetAllMunicaoAsyncByMarca(string marca)
        {
             IQueryable<Municao> query = _context.Municoes;
             query = query.Where(m => m.Marca.ToLower().Contains(marca.ToLower()));

            return await query.ToArrayAsync();
        }


        public async Task<Municao> GetMunicaoAsyncById(int MunicaoId)
        {
            IQueryable<Municao> query = _context.Municoes;
             query = query.Where( m => m.Id == MunicaoId);

            return await query.FirstOrDefaultAsync();
        }
    }
}