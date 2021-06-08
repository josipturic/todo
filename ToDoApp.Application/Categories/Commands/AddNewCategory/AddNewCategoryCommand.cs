using Application.Common.Interfaces;
using Domain.Entities;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace ToDoApp.Application.Categories.Commands.AddNewCategory
{
    public class AddNewCategoryCommand : IRequest<Unit>
    {
        public string CategoryName { get; set; }
        public class Handler : IRequestHandler<AddNewCategoryCommand, Unit>
        {
            private readonly IApplicationDbContext _context;

            public Handler(IApplicationDbContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(AddNewCategoryCommand request, CancellationToken cancellationToken)
            {
                var category = new Category {
                   CategoryName = request.CategoryName 
                };

                await _context.Categories.AddAsync(category);

                await _context.SaveChangesAsync(cancellationToken);

                return Unit.Value;
            }
        }
    }
}
