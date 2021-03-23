using Application.Common.Interfaces;
using AutoMapper;
using MediatR;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Application.ServiceProviders.Models;
using Application.ServiceProviders.Helpers;
using System.Linq;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;

namespace Application.ServiceProviders.Queries.FilterServiceProviders
{
    public class FilterServiceProvidersQuery : IRequest<IEnumerable<ServiceProviderModel>>
    {
        public string CategoryId { get; set; }
        public string SubCategoryIds { get; set; }

        public class Handler : IRequestHandler<FilterServiceProvidersQuery, IEnumerable<ServiceProviderModel>>
        {
            private readonly IApplicationDbContext _context;
            private readonly IMapper _mapper;

            public Handler(IApplicationDbContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<IEnumerable<ServiceProviderModel>> Handle(FilterServiceProvidersQuery request, CancellationToken cancellationToken)
            {
                var categoryId = int.Parse(request.CategoryId);
                var subcategoryIds = ServiceProviderHelper.ParseSubcategoryIds(request.SubCategoryIds);

                var serviceProviders = await _context.ServiceProviders.Where(p => p.MainCategoryId == categoryId).
                    Where(p => p.SubCategories.Select( s => s.Id).Any(c => subcategoryIds.Any(sc => sc == c))). ProjectTo<ServiceProviderModel>(_mapper.ConfigurationProvider).ToListAsync(cancellationToken);

                return serviceProviders;
            }
        }
    }
}
