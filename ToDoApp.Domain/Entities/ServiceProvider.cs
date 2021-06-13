using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Entities
{
    public class ServiceProvider : AppUser
    {
        public string CompanyName { get; set; }
        public DateTime DateRegistered { get; set; }
        [NotMapped]
        public string FullName
        {
            get => CompanyName;
        }
        public List<Service> Services { get; set; }
        public ServiceProvider()
        {
            Services = new List<Service>();
        }
        [NotMapped]
        public int NumOfServices { get => Services.Count; }
    }
}
