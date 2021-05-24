namespace Domain.Entities
{
    public class ServiceProviderCategory
    {
        public string ServiceProviderId { get; set; }
        public ServiceProvider ServiceProvider { get; set; }
        public int CategoryId { get; set; }
        public Category Category { get; set; }
    }
}
