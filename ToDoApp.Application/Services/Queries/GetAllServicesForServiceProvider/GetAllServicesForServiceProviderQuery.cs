using MediatR;
using Application.Common.Interfaces;
using AutoMapper;
using System.Threading.Tasks;
using System.Threading;
using ToDoApp.Application.Services.Models;
using Application.Extensions;
using System.Linq;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace ToDoApp.Application.Services.Queries.GetAllServicesForServiceProvider
{
    public class GetAllServicesForServiceProviderQuery : IRequest<IEnumerable<ServiceModel>>
    {
        public string ServiceProviderId { get; set; }
        public class Handler : IRequestHandler<GetAllServicesForServiceProviderQuery, IEnumerable<ServiceModel>>
        {
            private readonly IApplicationDbContext _context;
            private readonly IMapper _mapper;
            private readonly ICurrentUserService _currentUserService;


            public Handler(IApplicationDbContext context, IMapper mapper, ICurrentUserService currentUserService)
            {
                _context = context;
                _mapper = mapper;
                _currentUserService = currentUserService;
            }

            public async Task<IEnumerable<ServiceModel>> Handle(GetAllServicesForServiceProviderQuery request, CancellationToken cancellationToken)
            {
                var service = await _context.Services.Include(s => s.ServiceProvider).Include(s => s.Categories).ThenInclude(c => c.Category).Where(s => s.ServiceProviderId == _currentUserService.UserId && s.Deleted == false).ToListAsync();
                return _mapper.Map<IEnumerable<ServiceModel>>(service);
            }
        }
    }
}
