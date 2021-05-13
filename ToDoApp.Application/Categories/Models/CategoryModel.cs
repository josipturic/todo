using Application.Common.Mappings;
using Domain.Entities;
using System.Collections.Generic;

namespace ToDoApp.Application.Categories.Models
{
    public class CategoryModel : IMapFrom<Category>
    {
        public int Id { get; set; }
        public string CategoryName { get; set; }
        public int? ParentId { get; set; }
        public Category? ParentCategory { get; set; }
        public ICollection<Category> SubCategories { get; set; }
        public bool IsMainCategory { get; set; }
    }
}
