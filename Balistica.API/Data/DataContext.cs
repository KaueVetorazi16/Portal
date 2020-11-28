

using Balistica.API.Model;
using Microsoft.EntityFrameworkCore;

namespace Balistica.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options) {}

        public DbSet<Arma> Armas { get; set; }

    }
}