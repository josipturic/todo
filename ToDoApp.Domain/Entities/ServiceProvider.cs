using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Entities
{
    public class ServiceProvider : AppUser
    {
        public string CompanyName { get; set; }
        [NotMapped]
        public string FullName
        {
            get => CompanyName;
        }
        public string BusinessDescription { get; set; }
        public int MainCategoryId { get; set; }
        [ForeignKey(nameof(MainCategoryId))]
        public virtual Category MainCategory { get; set; }
        public ICollection<Category> SubCategories { get; set; }
        public ServiceProvider()
        {
            SubCategories = new List<Category>();
        }
    }
}
