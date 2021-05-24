using System.Collections.Generic;

namespace Domain.Entities
{
    public class Category
    {
        public int Id { get; set; }
        public string CategoryName { get; set; }
        public List<ServiceProviderCategory> ServiceProviders { get; set; }
        public Category ()
        {
            ServiceProviders = new List<ServiceProviderCategory>();
        }
        public Category (int id, string categoryName)
        {
            Id = id;
            CategoryName = categoryName;
        }
    }
}
