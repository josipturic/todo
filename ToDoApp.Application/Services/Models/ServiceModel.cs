using Application.Common.Mappings;
using Domain.Entities;
using System.Collections.Generic;

namespace ToDoApp.Application.Services.Models
{
    public class ServiceModel : IMapFrom<Service>
    {
        public int Id { get; set; }
        public virtual ServiceProvider ServiceProvider { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string ServicePrice { get; set; }
        public List<ServiceCategory> Categories { get; set; }
        public string Description { get; set; }
    }
}
