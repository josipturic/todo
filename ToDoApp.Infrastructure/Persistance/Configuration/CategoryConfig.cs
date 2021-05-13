using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ToDoApp.Infrastructure.Persistance.Configuration
{
    public class CategoryConfig : IEntityTypeConfiguration<Category>
    {
        public void Configure(EntityTypeBuilder<Category> builder)
        {
            builder
                .HasMany(c => c.SubCategories)
                .WithOne(e => e.ParentCategory);

            builder.HasData(new Category(1, "Čišćenje kuća"), new Category(2, "Iznajmljivanje party kuća"), new Category(3, "Šetanje pasa"), new Category(4, "Pravljenje kolača"));
        }
    }
}
