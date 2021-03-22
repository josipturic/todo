using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Entities
{
    public class Category
    {
        public int Id { get; set; }
        public string CategoryName { get; set; }
        public int? ParentId { get; set; }
        [ForeignKey(nameof(ParentId))]
        public virtual Category ParentCategory { get; set; }
        public virtual ICollection<Category> SubCategories { get; set; }
        [NotMapped]
        public bool IsMainCategory { get => ParentCategory is null; }
        public Category ()
        {
            SubCategories = new List<Category>();
        }
    }
}
