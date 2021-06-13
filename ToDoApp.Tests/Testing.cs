using Domain.Entities;
using Infrastructure.Persistence;
using MediatR;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Moq;
using NUnit.Framework;
using Respawn;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

namespace ToDoApp.Tests
{
    [SetUpFixture]
    public class Testing
    {
        private static IConfiguration _configuration;
        private static IServiceScopeFactory _scopeFactory;
        private static Checkpoint _checkpoint;

        [OneTimeSetUp]
        public void RunBeforeTests()
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("testappsettings.json", true, true)
                .AddEnvironmentVariables();

            _configuration = builder.Build();

            var services = new ServiceCollection();

            var startup = new Startup(_configuration);

            services.AddSingleton(Mock.Of<IWebHostEnvironment>(w => w.ApplicationName == "ToDoApp.Tests" && w.EnvironmentName == "Development"));

            startup.ConfigureServices(services);

            _scopeFactory = services.BuildServiceProvider().GetService<IServiceScopeFactory>();

            _checkpoint = new Checkpoint
            {
                TablesToIgnore = new[] { "_EFMigrationsHistory" }
            };
        }

        public static async Task ResetState()
        {
            await _checkpoint.Reset(_configuration.GetConnectionString("DbConnection"));
        }

        public static async Task<TEntity> FindAsync<TEntity>(int id) where TEntity : class
        {
            using var scope = _scopeFactory.CreateScope();

            var context = scope.ServiceProvider.GetService<ToDoDBContext>();

            return await context.FindAsync<TEntity>(id);
        }

        public static async Task AddAsync<TEntity>(TEntity entity) where TEntity: class 
        {
            using var scope = _scopeFactory.CreateScope();

            var context = scope.ServiceProvider.GetService<ToDoDBContext>();

            context.Add(entity);

            await context.SaveChangesAsync();
        }

        public static async Task<TResponse> SendAsync<TResponse>(IRequest<TResponse> request) 
        {
            using var scope = _scopeFactory.CreateScope();

            var mediator = scope.ServiceProvider.GetService<IMediator>();

            return await mediator.Send(request);
        }

        public static async Task<List<int>> AddCategories()
        {
            using var scope = _scopeFactory.CreateScope();

            var context = scope.ServiceProvider.GetService<ToDoDBContext>();

            var category = new Category { CategoryName = "Category One" };

            context.Categories.Add(category);

            await context.SaveChangesAsync();

            return new List<int> { category.Id };
        }
    }
}
