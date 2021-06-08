using MediatR;
using Application.Common.Interfaces;
using AutoMapper;
using System.Threading.Tasks;
using System.Threading;
using ToDoApp.Application.Services.Models;
using System.Linq;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace ToDoApp.Application.Services.Queries.GetServiceProviderServices
{
    public class GetServiceProviderServicesQuery : IRequest<IEnumerable<ServiceModel>>
    {
        public string ServiceProviderId { get; set; }
        public class Handler : IRequestHandler<GetServiceProviderServicesQuery, IEnumerable<ServiceModel>>
        {
            private readonly IApplicationDbContext _context;
            private readonly IMapper _mapper;


            public Handler(IApplicationDbContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<IEnumerable<ServiceModel>> Handle(GetServiceProviderServicesQuery request, CancellationToken cancellationToken)
            {
                var service = await _context.Services.Include(s => s.ServiceProvider).Include(s => s.Categories).ThenInclude(c => c.Category).Where(s => s.ServiceProviderId == request.ServiceProviderId && s.Deleted == false).ToListAsync();
                return _mapper.Map<IEnumerable<ServiceModel>>(service);
            }
        }
    }
}
