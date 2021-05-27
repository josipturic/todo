using Application.Common.Mappings;
using Application.ServiceProviders.Models;
using Domain.Entities;
using System;
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
        public string ContactEmail { get; set; }
        public string ContactPhoneNumber { get; set; }
        public List<CategoryModel> Categories { get; set; }
        public string Description { get; set; }
        public int NumOfViews { get; set; }
        public DateTime Created { get; set; }
        public DateTime? LastModified { get; set; }
    }
}
