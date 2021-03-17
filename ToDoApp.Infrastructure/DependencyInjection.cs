using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using Application.Common.Interfaces;
using Domain.Entities;
using Infrastructure.HttpClients;
using Infrastructure.Persistence;
using Infrastructure.Services;
using System.Text;
using SkipperAgency.Infrastructure.Identity;

namespace Infrastructure
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
        {
            if (configuration.GetValue<bool>("UseInMemoryDatabase"))
            {
                services.AddDbContext<ToDoDBContext>(options =>
                    options.UseInMemoryDatabase("ToDoDBContext"));
            }
            else
            {
                services.AddDbContext<ToDoDBContext>(options =>
                    options.UseSqlServer(
                        configuration.GetConnectionString("DbConnection"),
                        b => b.MigrationsAssembly(typeof(ToDoDBContext).Assembly.FullName)));

            }

            services.AddScoped<IApplicationDbContext>(provider => provider.GetService<ToDoDBContext>());

            // Identity configuration
            services.AddIdentity<AppUser, IdentityRole>(options =>
            {
                options.User.RequireUniqueEmail = true;
            })
                .AddEntityFrameworkStores<ToDoDBContext>()
                .AddSignInManager<SignInManager<AppUser>>()
                .AddUserManager<UserManager<AppUser>>()
                .AddDefaultTokenProviders();

            var signingKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["AppSettings:Secret"]));

            services.AddAuthorization(options =>
            {
                options.DefaultPolicy = new AuthorizationPolicyBuilder(JwtBearerDefaults.AuthenticationScheme)
                    .RequireAuthenticatedUser()
                    .Build();
            }).AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(config =>
            {
                config.RequireHttpsMetadata = false;
                config.SaveToken = true;
                config.TokenValidationParameters = new TokenValidationParameters()
                {
                    IssuerSigningKey = signingKey,
                    ValidateAudience = true,
                    ValidAudience = configuration["AppSettings:Audience"],
                    ValidateIssuer = true,
                    ValidIssuer = configuration["AppSettings:Issuer"],
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true
                };
            });

            services.AddScoped<IJwtService, JwtService>();
            //services.AddScoped<>

            services.AddTransient<IDateTime, DateTimeService>();
            services.AddTransient<IIdentityService, IdentityService>();
            services.AddTransient<IHttpClient, BasicHttpClient>();

            services.AddFluentEmail(configuration["EmailSettings:FromEmail"])
                .AddRazorRenderer()
                .AddSendGridSender(configuration["EmailSettings:SendGridAPIKey"]);

            return services;
        }
    }
}
