using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Domain.Entities;

namespace SkipperAgency.Infrastructure.Persistence.Configurations
{
    public class ServiceProviderCategoryConfig : IEntityTypeConfiguration<ServiceProviderCategory>
    {
        public void Configure(EntityTypeBuilder<ServiceProviderCategory> builder)
        {
            builder
                .HasKey(bc => new { bc.ServiceProviderId, bc.CategoryId });

            builder
                .HasOne(bc => bc.ServiceProvider)
                .WithMany(b => b.Categories)
                .HasForeignKey(bc => bc.ServiceProviderId)
                .OnDelete(DeleteBehavior.Restrict);


            builder
                .HasOne(bc => bc.Category)
                .WithMany(c => c.ServiceProviders)
                .HasForeignKey(bc => bc.CategoryId)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
