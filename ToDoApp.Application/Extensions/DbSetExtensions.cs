using Microsoft.EntityFrameworkCore;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Extensions
{
    public static class DbSetExtensions
    {
        /// <summary>
        /// Finds an entity with the given primary key value. If an entity with the given primary key value is being tracked by the context, then it is returned immediately without making a request to the database.
        /// Otherwise, a query is made to the database for an entity with the given primary key value and this entity, if found, is attached to the context and returned. If no entity is found, then null is returned.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="dbSet"></param>
        /// <param name="primaryKey"></param>
        /// <param name="cancellationToken"></param>
        /// <returns></returns>
        public static async Task<T> FindByKeyAsync<T>(this DbSet<T> dbSet, object primaryKey, CancellationToken cancellationToken) where T : class
        {
            return await dbSet.FindAsync(new object[] { primaryKey }, cancellationToken);
        }
    }
}