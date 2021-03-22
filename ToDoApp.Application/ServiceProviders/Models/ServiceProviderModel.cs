using Application.Common.Mappings;
using Domain.Entities;
using System.Collections.Generic;

namespace ToDoApp.Application.ServiceProviders.Models
{
    public class ServiceProviderModel : IMapFrom<ServiceProvider>
    {
        public string Id { get; set; }
        public string CompanyName { get; set; }
        public string Email { get; set; }
        public string FullName { get; set; }
        public string Address { get; set; }
        public bool TOSAccepted { get; set; }
        public string Oib { get; set; }
        public string BusinessDescription { get; set; }
        public Category MainCategory { get; set; }
        public ICollection<Category> SubCategories { get; set; }
    }
}
