using Application.Common.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using ToDoApp.Application.ServiceProviders.Models;

namespace Application.PeopleInNeed.Queries.GetAllPeopleInNeed
{
    public class GetServiceProvidersQuery : IRequest<IEnumerable<ServiceProviderModel>>
    {
        public class Handler : IRequestHandler<GetServiceProvidersQuery, IEnumerable<ServiceProviderModel>>
        {
            private readonly IApplicationDbContext _context;
            private readonly IMapper _mapper;

            public Handler(IApplicationDbContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<IEnumerable<ServiceProviderModel>> Handle(GetServiceProvidersQuery request, CancellationToken cancellationToken)
            {
                return await _context.ServiceProviders.ProjectTo<ServiceProviderModel>(_mapper.ConfigurationProvider)
                    .ToListAsync(cancellationToken);
            }
        }
    }
}
