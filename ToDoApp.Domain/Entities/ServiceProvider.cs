using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Entities
{
    public class ServiceProvider : AppUser
    {
        public string CompanyName { get; set; }
        [NotMapped]
        public string FullName
        {
            get => CompanyName;
        }
        public string BusinessDescription { get; set; }
        public List<Service> Services { get; set; }
        public ServiceProvider()
        {
            Services = new List<Service>();
        }
    }
}
