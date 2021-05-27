using Domain.Common;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Entities
{
    public class Service : AuditableEntity
    {
        public int Id { get; set; }
        public string ServiceProviderId { get; set; }
        [ForeignKey(nameof(ServiceProviderId))]
        public virtual ServiceProvider ServiceProvider { get; set; }
        public string Name { get; set; }
        public string ContactEmail { get; set; }
        public string ContactPhoneNumber { get; set; }
        public string Address { get; set; }
        public string ServicePrice { get; set; }
        public List<ServiceCategory> Categories { get; set; }
        public Service()
        {
            Categories = new List<ServiceCategory>();
        }
        public string Description { get; set; }
        public int NumOfViews { get; set; }
    }
}