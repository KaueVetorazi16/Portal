using Balistica.Domain;
using Microsoft.EntityFrameworkCore;

namespace Balistica.Repository
{
    public class BalisticaContext : DbContext
    {
        public BalisticaContext(DbContextOptions<BalisticaContext> options) : base (options) {}

        public DbSet<Arma> Armas { get; set; }
        public DbSet<Municao> Municoes {get; set;}
        public DbSet<Calibre> Calibres {get; set;}


    }
}