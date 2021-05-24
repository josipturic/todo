using Application.Common.Mappings;
using Domain.Entities;

namespace ToDoApp.Application.Categories.Models
{
    public class CategoryModel : IMapFrom<ServiceProviderCategory>
    {
        public int Id { get; set; }
        public string CategoryName { get; set; }
        public string ServiceProviderId { get; set; }

        public void Mapping(MappingProfile profile)
        {
            profile.CreateMap<ServiceProviderCategory, CategoryModel>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.CategoryId))
                .ForMember(dest => dest.CategoryName, opt => opt.MapFrom(src => src.Category.CategoryName))
                .ForMember(dest => dest.ServiceProviderId, opt => opt.MapFrom(src => src.ServiceProviderId));
        }
    }
}
