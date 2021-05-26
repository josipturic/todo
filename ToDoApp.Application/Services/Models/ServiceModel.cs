using Application.Common.Mappings;
using Application.ServiceProviders.Models;
using Domain.Entities;
using System.Collections.Generic;
using ToDoApp.Application.Categories.Models;

namespace ToDoApp.Application.Services.Models
{
    public class ServiceModel : IMapFrom<Service>
    {
        public int Id { get; set; }
        public virtual ServiceProviderModel ServiceProvider { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string ServicePrice { get; set; }
        public List<CategoryModel> Categories { get; set; }
        public string Description { get; set; }
    }
}
