using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Domain.Entities;

namespace SkipperAgency.Infrastructure.Persistence.Configurations
{
    public class ServiceProviderCategoryConfig : IEntityTypeConfiguration<ServiceCategory>
    {
        public void Configure(EntityTypeBuilder<ServiceCategory> builder)
        {
            builder
                .HasKey(bc => new { bc.ServiceId, bc.CategoryId });

            builder
                .HasOne(bc => bc.Service)
                .WithMany(b => b.Categories)
                .HasForeignKey(bc => bc.ServiceId)
                .OnDelete(DeleteBehavior.Restrict);

            builder
                .HasOne(bc => bc.Category)
                .WithMany(c => c.Services)
                .HasForeignKey(bc => bc.CategoryId)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
