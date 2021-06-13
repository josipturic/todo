using Application.Common.Mappings;
using Domain.Entities;
using System;
using System.Collections.Generic;
using ToDoApp.Application.Services.Models;

namespace Application.ServiceProviders.Models
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
        public DateTime DateRegistered { get; set; }
        public List<ServiceModel> Services { get; set; }
        public int NumOfServices { get; set; }
    }
}
