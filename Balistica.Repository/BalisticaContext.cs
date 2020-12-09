using Balistica.Domain;
using Balistica.Domain.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Balistica.Repository
{
    public class BalisticaContext : IdentityDbContext<User, Role, int, 
                                                    IdentityUserClaim<int>, UserRole, IdentityUserLogin<int>,
                                                    IdentityRoleClaim<int>, IdentityUserToken<int>>
    {
        

        public BalisticaContext(DbContextOptions<BalisticaContext> options) : base (options) {}

        public DbSet<Arma> Armas { get; set; }
        public DbSet<Municao> Municoes {get; set;}
        public DbSet<Calibre> Calibres {get; set;}
    
      protected override void OnModelCreating(ModelBuilder modelBuilder){
                
                base.OnModelCreating(modelBuilder);
                modelBuilder.Entity<UserRole>(userRole => {
                
                userRole.HasKey(ur => new {ur.UserId, ur.RoleId});

                userRole.HasOne(ur => ur.Role)
                .WithMany(r => r.UserRoles)
                .HasForeignKey(ur => ur.RoleId)
                .IsRequired();

                 userRole.HasOne(ur => ur.User)
                .WithMany(r => r.UserRoles)
                .HasForeignKey(ur => ur.UserId)
                .IsRequired();


            });
      }

    }

     
}