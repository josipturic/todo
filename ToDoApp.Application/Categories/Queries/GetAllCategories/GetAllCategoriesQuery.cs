using MediatR;
using Application.Common.Interfaces;
using AutoMapper;
using System.Threading.Tasks;
using System.Threading;
using ToDoApp.Application.Categories.Models;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace ToDoApp.Application.Categories.Queries.GetAllCategories
{
    public class GetAllCategoriesQuery : IRequest<IEnumerable<CategoryModel>>
    {
        public class Handler : IRequestHandler<GetAllCategoriesQuery, IEnumerable<CategoryModel>>
        {
            private readonly IApplicationDbContext _context;
            private readonly IMapper _mapper;

            public Handler(IApplicationDbContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<IEnumerable<CategoryModel>> Handle(GetAllCategoriesQuery request, CancellationToken cancellationToken)
            {
                return await _context.ServiceProviders.ProjectTo<CategoryModel>(_mapper.ConfigurationProvider)
               .ToListAsync(cancellationToken);
            }
        }
    }
}
