using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Common.Interfaces
{
    public interface IApplicationDbContext
    {
        DbSet<AppUser> AppUsers { get; set; }
        DbSet<Admin> Admins { get; set; }
        DbSet<ServiceProvider> ServiceProviders { get; set; }
        DbSet<Category> Categories { get; set; }
        DbSet<Service> Services { get; set; }
        Task<int> SaveChangesAsync(CancellationToken cancellationToken = new CancellationToken());
        DbSet<TEntity> Set<TEntity>() where TEntity : class;
    }
}

