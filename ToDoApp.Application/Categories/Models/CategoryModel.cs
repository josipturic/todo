using Application.Common.Mappings;
using Domain.Entities;

namespace ToDoApp.Application.Categories.Models
{
    public class CategoryModel : IMapFrom<ServiceCategory>
    {
        public int Id { get; set; }
        public string CategoryName { get; set; }
        public string ServiceId { get; set; }

        public void Mapping(MappingProfile profile)
        {
            profile.CreateMap<ServiceCategory, CategoryModel>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.CategoryId))
                .ForMember(dest => dest.CategoryName, opt => opt.MapFrom(src => src.Category.CategoryName));

            profile.CreateMap<Category, CategoryModel>().ReverseMap();
        }
    }
}