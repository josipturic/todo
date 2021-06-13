using System.Collections.Generic;

namespace Domain.Entities
{
    public class Category
    {
        public int Id { get; set; }
        public string CategoryName { get; set; }
        public bool CategoryDeleted { get; set; }
        public List<ServiceCategory> Services { get; set; }
        public Category ()
        {
            Services = new List<ServiceCategory>();
        }
        public Category (int id, string categoryName)
        {
            Id = id;
            CategoryName = categoryName;
        }
    }
}
