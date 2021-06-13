using Application.Common.Interfaces;
using MediatR;
using System.Linq;
using System.Threading;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using ToDoApp.Application.Admin.Models;
using AutoMapper;
using ToDoApp.Application.Services.Models;
using Application.ServiceProviders.Models;

namespace ToDoApp.Application.Admin.Queries.GetAdminDashboardData
{
    public class GetAdminDashboardDataQuery : IRequest<AdminDashboardDataModel>
    {
        public class Handler : IRequestHandler<GetAdminDashboardDataQuery, AdminDashboardDataModel>
        {
            private readonly IApplicationDbContext _context;
            private readonly IMapper _mapper;

            public Handler(IApplicationDbContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<AdminDashboardDataModel> Handle(GetAdminDashboardDataQuery request, CancellationToken cancellationToken)
            {
                var numOfServiceProviders = await _context.ServiceProviders.CountAsync();
                var numOfServices = await _context.Services.CountAsync();
                var services = await _context.Services.ToListAsync();
                var mostViews = services.Max(s => s.NumOfViews);
                var serviceWithMostViews = services.Where(s => s.NumOfViews == mostViews).FirstOrDefault();
                var service = _mapper.Map<ServiceModel>(serviceWithMostViews);
                var sps = await _context.ServiceProviders.ToListAsync();
                var mostServices = sps.Max(s => s.NumOfServices);
                var spWithMostServices = sps.Where(s => s.NumOfServices == mostServices).FirstOrDefault();
                var sp = _mapper.Map<ServiceProviderModel>(spWithMostServices);

                return new AdminDashboardDataModel(numOfServiceProviders, numOfServices, service.Id, service.Name, sp.Id, sp.FullName, sp.NumOfServices, service.NumOfViews);
            }
        }
    }
}
